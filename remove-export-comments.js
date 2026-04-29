import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join, relative } from 'path';

import { SyntaxKind, isFunctionDeclaration, isVariableStatement, isFunctionExpression, isArrowFunction, forEachChild, ScriptKind, createSourceFile, ScriptTarget, forEachLeadingCommentRange, forEachTrailingCommentRange } from 'typescript';

function isExportedFunction(node) {
  const hasExport = node.modifiers && node.modifiers.some(m => m.kind === SyntaxKind.ExportKeyword);
  if (isFunctionDeclaration(node) && hasExport) return true;
  if (isVariableStatement(node) && hasExport) {
    return node.declarationList.declarations.some(decl => {
      const init = decl.initializer;
      return init && (isFunctionExpression(init) || isArrowFunction(init));
    });
  }
  return false;
}

function getFunctionBody(node) {
  if (isFunctionDeclaration(node) || isFunctionExpression(node) || isArrowFunction(node)) {
    return node.body;
  }
  if (isVariableStatement(node)) {
    for (const decl of node.declarationList.declarations) {
      const init = decl.initializer;
      if (init && (isFunctionExpression(init) || isArrowFunction(init))) {
        return init.body;
      }
    }
  }
  return undefined;
}

function rangeContains(ranges, pos) {
  return ranges.some(([start,end]) => pos >= start && pos < end);
}

function collectExportFunctionBodies(sourceFile) {
  const ranges = [];
  function visit(node) {
    if (isExportedFunction(node)) {
      const body = getFunctionBody(node);
      if (body) {
        ranges.push([body.pos, body.end]);
      }
    }
    forEachChild(node, visit);
  }
  visit(sourceFile);
  return ranges;
}

function removeCommentsOutsideExportedFunctions(filePath) {
  const sourceText = readFileSync(filePath, 'utf8');
  const scriptKind = filePath.endsWith('.tsx') ? ScriptKind.TSX : ScriptKind.TS;
  const sourceFile = createSourceFile(filePath, sourceText, ScriptTarget.Latest, true, scriptKind);
  const functionBodyRanges = collectExportFunctionBodies(sourceFile);
  const commentRanges = [];
  forEachLeadingCommentRange(sourceText, 0, (pos, end) => commentRanges.push({ pos, end }));
  forEachTrailingCommentRange(sourceText, 0, (pos, end) => commentRanges.push({ pos, end }));
  commentRanges.sort((a, b) => a.pos - b.pos);
  const filtered = functionBodyRanges.length === 0 ? commentRanges : commentRanges.filter(({pos}) => !rangeContains(functionBodyRanges, pos));
  if (filtered.length === 0) return false;
  let result = '';
  let last = 0;
  for (const {pos, end} of filtered) {
    if (pos < last) continue;
    result += sourceText.slice(last, pos);
    last = end;
  }
  result += sourceText.slice(last);
  if (result !== sourceText) {
    writeFileSync(filePath, result, 'utf8');
    return true;
  }
  return false;
}

function walkDir(dir) {
  let entries = [];
  for (const name of readdirSync(dir, { withFileTypes: true })) {
    const resolved = join(dir, name.name);
    if (name.isDirectory()) {
      if (name.name === 'node_modules' || name.name === '.git') continue;
      entries = entries.concat(walkDir(resolved));
    } else if (name.isFile() && /\.(ts|tsx)$/.test(name.name) && !name.name.endsWith('.d.ts')) {
      entries.push(resolved);
    }
  }
  return entries;
}

const files = walkDir(process.cwd());
let changed = 0;
for (const file of files) {
  if (removeCommentsOutsideExportedFunctions(file)) {
    changed += 1;
    console.log('changed', relative(process.cwd(), file));
  }
}
console.log('done', changed, 'files');
