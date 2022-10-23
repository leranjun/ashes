# ui

This workspace is created with the following commands:

```bash
cd packages && npm create svelte@latest ui
# Skeleton project - TypeScript - ESLint - Prettier - Playwright
cd ui && yarn install
yarn add -D @brainandbones/skeleton
npx svelte-add@latest tailwindcss
yarn install
```

Tailwind is configured per [Skeleton docs](https://www.skeleton.dev/guides/tailwind) (see [`tailwind.config.cjs`](tailwind.config.cjs)).

[`app.html`](src/app.html), [`app.postcss`](src/app.postcss) and [`+layout.svelte`](src/routes/+layout.svelte) are then modified per [SvelteKit-specific instructions](https://www.skeleton.dev/guides/frameworks/sveltekit).

Now do `yarn run dev` and view the results in a browser.
