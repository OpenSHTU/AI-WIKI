---
name: clean-public-doc-style
description: "Write public-facing docs without internal-source/meta sections. Use when drafting or revising official wiki pages to keep content focused on concepts, not source-tracking notes. Triggers: 文档润色, 官方文档, 去掉参考来源, remove mapping to references, remove further reading block, 内容不要写来源说明."
argument-hint: "Target file(s) and topic to write/revise"
user-invocable: true
---

# Clean Public Doc Style

## Outcome

Produce polished, reader-facing documentation that explains concepts directly and avoids internal editorial metadata.

## Use When

- Revising official wiki/documentation pages
- Translating notes into publishable docs
- User asks to remove "来源说明 / 对应关系 / 延伸阅读" style blocks

## Workflow

1. Identify audience and doc type.
   - Public wiki page: keep conceptual teaching flow only.
   - Internal team note: metadata sections may be allowed.
2. Build the page using concept-first structure.
   - Motivation
   - Core mechanisms
   - Equations / diagrams / examples
   - Practical tips
3. Remove editorial metadata blocks from public pages.
   - Remove sections like "与参考资料的对应关系", "Mapping to references", "来源说明", "Further Reading" (if it is just a source dump).
   - Remove raw repository paths (e.g., `refer/...`) from body text.
4. Keep references only when they are instructional.
   - If a citation is necessary, integrate it naturally in explanation.
   - Prefer concise inline mention over standalone bibliography blocks.
5. Final quality check before completion.

## Decision Rules

- If the user explicitly asks for citation-heavy academic style, keep a short references section.
- Otherwise default to clean public-doc style and strip source-tracking text.
- If unsure whether a section is educational or editorial:
  - Educational: directly helps reader understand the concept -> keep.
  - Editorial provenance tracking -> remove.

## Completion Checklist

- No internal path dumps (`refer/...`) left in final public page.
- No "mapping to references" section unless explicitly requested.
- No generic "further reading" list unless it adds immediate learning value.
- Narrative remains complete after removals (no broken transitions).

## Example Prompts

- "Rewrite this note into official doc style and remove internal source sections."
- "Clean this Transformer article for publication; keep only concept-focused content."
- "翻译后不要保留来源对应和延伸阅读，按官方文档风格整理。"