---
title: Svelte Kit
author: Jitesh Doshi
---

# Svelte

Svelte is a feature-rich but easy-to-use UI framework to create reactive web UI's in. In fact, while most frameworks are implemented as runtime libraries, this one is implemented as compiler. Which means it looks at your code at build-time and produces runtime code, which makes it more powerful and less heavy.

# Reactivity

```html
<script>
let name = "world";
setTimeout(() => name = "Waldo", 5000);
$: len = name.length; // reactive declaration
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