---
title: Svelte Kit
author: Jitesh Doshi
category: svelte
---

[Svelte Kit](https://kit.svelte.dev) is an extension to Svelte that does these very important tasks:

1. Provide client-side, in-browser [routing](https://kit.svelte.dev/docs#routing).
2. Totally abstract out client-side rendering (CSR), server-side rendering (SSR), and pre-rendering (static generation of HTML output at build time).
3. Allow routes to be generated from file-system structure (`src/routes/foo.svelte` component renders at route `/foo`)
4. Wrap route components as a `slot` inside [layout component](https://kit.svelte.dev/docs#layouts) in `src/routes/__layout.svelte`.
5. Provide server-side [endpoints](https://kit.svelte.dev/docs#routing-endpoints) that return dynamic data.
6. Execute [hooks](https://kit.svelte.dev/docs#hooks) on the server at predefined points, such as before every request received by the server.
7. Allow routes to [load data](https://kit.svelte.dev/docs#loading) from own server or any other server using `load` method.
8. Swap out and swap in different backends using [adapters](https://kit.svelte.dev/docs#adapters).

Now, teach yourself Svelte Kit using that [docs page](https://kit.svelte.dev/docs).