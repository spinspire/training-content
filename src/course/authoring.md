---
title: Authoring Guide
author: Joshua Leisure
---
Start by stating the goal of the material -- what the reader should be taking away from this lesson and a brief preview of the content. 

For example: "Loops are imporant in any programming language as they allow you to apply repeatedly the same processing to each element of a collection (array). We will also learn about different kinds of loops appropriate for different situations (e.g. looping a fixed number of times vs as long as a condition is true)."

## Headings

- Don't use heading level-1, as those are reserved for page title (above).
- Mostly use heading level-2 for sections.
- In some cases where you need sub-sections, use heading level-3.

## Bullets & Paragraphs

- For content within a section, there is the option of using bullet points or paragraphs. This is up to author and author's style choice, for example, you could write a paragraph explaing the importance of loops, then using bullets (`-`) to describe the syntax or key points.
- Try to keep numbered list to a minimum and only use them when trying to do steps or rank the importance of something.

## Table of contents

- We will have a table of contents per page on the left side of the page, just to let the user scroll/click to their desired section to review/look at to make things quicker for the user.
- The table of contents will be generated from the section and sub-section headings

## Code Snippets

- Provide as many code snippets as needed as they are really helpful to the reader in a technical tutorial.
- Rather than providing 1 line of code and explaining it, it might be better to show a multi-line code snippet first, and then explaining it (perhaps using bullets)

```javascript
function foo(param1, param2) {
  // code here
}
```

- Don't try to put too many inline comments as they clutter up the code. Explain in the text content (paragraph or bullets)

## References and author

- Please include your name under the "author" field in the frontmatter. 
- Provide references as appropriate. See other markdown files for examples.