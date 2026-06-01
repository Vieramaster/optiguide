---
description: Standard procedure for designing form state, validation, and submission in the layered architecture
---

# Form Design Skill

Forms in features and entities.

**Align with:**
- `.cursor/rules/architecture/forms.mdc`
- `.cursor/rules/architecture/global-architecture.mdc` §2.4
- `.cursor/rules/ux/accessibility.mdc`

Reference: `entities/prescription/components/prescription-form.tsx`.

---

# 1. Core Principle

Forms are temporary interaction state. Submit orchestration lives at the form boundary; domain rules live in `logic/`.

---

# 2. Placement

| Piece | Location |
|-------|----------|
| Form UI | `entities/*/components/` or `features/*/components/` |
| Parse FormData | `entities/*/logic/parse.ts` or feature `logic/` |
| Validation rules | `logic/` (e.g. `evaluate-prescription-rules.ts`) |
| Submit handler hook | `hooks/use-*-form.ts` |

---

# 3. Flow (Prescription — canonical)

```
PrescriptionForm (UI)
  → usePrescriptionForm (submit orchestration)
    → logic/parse
    → logic/evaluate-prescription-rules
  → onSubmit callback to consumer feature
```

Consumer features pass `onSubmit`; they do not re-parse or re-validate.

---

# 4. Rules

- One validation SSOT per form domain
- Accessible labels (`htmlFor`, no placeholder-as-label)
- Explicit loading/error UX
- Controlled vs uncontrolled: match interaction complexity

---

# 5. Anti-Patterns

- Duplicated validation in catalog + entity
- Business rules inline in `onSubmit` in components
- Raw `FormData` parsing in multiple features
- Forms owning global app state
