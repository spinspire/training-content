---
title: Svelte
author: Jitesh Doshi
tags: svelte
weight: -10
---

Svelte is a feature-rich yet easy-to-use UI framework to create reactive web UI's. In fact, while most frameworks are implemented as *runtime* libraries, this one is implemented as compiler. Which means it looks at your code at *build-time* and produces runtime code, which makes it more powerful and less heavy.

## Reactivity

```html
<script>
let name = "world";
setTimeout(() => name = "Waldo", 5000); // page updates reactively to change in value of name
$: len = name.length; // reactive declaration
$: console.log("name", name); // reactive statement
</script>

<p>Hello {name}</p>
<p>Len: {len}</p>
```

In the above example, not only will the paragraph say `Hello world` initially (an example of simple templating), 5 seconds later it will automatically update to `Hello Waldo` (result of automatic, compiler enforced reactivity). Not just that, the reactive declaration marked with `$:` will also be executed every time the value of `name` changes.

And now, teach yourself Svelte with the following resources:

1. [svelte.dev](https://svelte.dev) - the flagship site for Svelte
2. [Svelte Tutorial](https://svelte.dev/tutorial) - Do all modules, except "Motion", "Animation", and "Transitions", which should be considered *optional*.
3. [Video: Why learn Svelte](https://www.youtube.com/watch?v=CsEPsFrBQ94)
4. [Video: How to learn Svelte](https://www.youtube.com/watch?v=hoGsNORT2b0)
5. [Video: Beginner's tutorial in JavaScript UI development: with SvelteJS](https://www.youtube.com/watch?v=E5FmzsQWBh0)
6. [Video: Svelte: project structure and build process fully explained](https://www.youtube.com/watch?v=gNrZbNQglho)

## Main Features of Svelte

1. [templates](https://svelte.dev/docs#Template_syntax) (ability to use JS variables in HTML wrapped in `{}`)
2. reactive templates (whenever a value changes, it injects code that will re-render parts of the page that use that variable)
3. [reactive declarations and statements](https://svelte.dev/docs#3_$_marks_a_statement_as_reactive)
4. Single file components - HTML, CSS, and JavaScript all in one file, and the "component" is the "default" export.
5. Components can receive [props](https://svelte.dev/docs#1_export_creates_a_component_prop).
6. [CSS styles](https://svelte.dev/docs#style) are "scoped" by default.
7. Attach [event listeners](https://svelte.dev/docs#on_element_event)
8. Provides reactive [stores](https://svelte.dev/docs#svelte_store)
9. Provides actions (`use:action`) to attach callbacks to DOM changes