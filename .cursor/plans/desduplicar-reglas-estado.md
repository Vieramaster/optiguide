# Estado: desduplicación reglas (matriz dueño único)

**Implementado** en Agent mode.

## Sesiones completadas

| Sesión | Cambios |
|--------|---------|
| 1 | global: sin orchestrator duplicado; state §3.1 SSOT; services unificado Return discipline |
| 2 | global: copy → content §1.1; ui §1.4 + §3 acortados |
| 3 | forms §3 cross-ref; services validación cross-ref |
| 4 | accessibility §1.1 reduced motion SSOT; animations §5 cross-ref; RULES-INDEX topic ownership |

## Sesión 5

- `services.mdc` renombrado a `logic-discipline.mdc`; referencias actualizadas en rules.

## Pendiente

- Commit de todos los cambios `.cursor/rules/` (incluye parche reconciliación anterior)

## Referencia — semántica de capas (2026)

Criterio features / entities / shared: `global-architecture.mdc` §1.3 y `docs/ARQUITECTURA.md` § Cuándo usar cada capa.

## Verificación

```bash
rg "Orchestrator boundary|Product-language exception|Avoid over-fragmentation" .cursor/rules/
```

Debe devolver 0 resultados (salvo grep checklist en cursor-enforcement).
