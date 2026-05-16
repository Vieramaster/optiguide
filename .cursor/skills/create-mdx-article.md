# Create MDX Document Skill (System Docs / Knowledge Base — Next.js 2026)

## 1. Scope

This skill defines how to generate MDX-based documentation documents for a structured knowledge system.

These are NOT blog articles.

They are:
- system documentation
- technical references
- structured knowledge pages

---

## 2. File Structure

All documents must follow:

content/docs/<category>/<slug>.mdx

Rules:
- category defines domain grouping
- slug must be lowercase and URL-safe
- structure must remain flat per category (no deep nesting)

---

## 3. Frontmatter (Required)

Each MDX document must include minimal metadata:

- title
- category

### Example:

```md
---
title: "Document Title"
category: "category-1"
---