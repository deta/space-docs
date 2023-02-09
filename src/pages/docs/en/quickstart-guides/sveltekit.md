---
title: Run a SvelteKit App
section: Quickstart Guides
position: 3
layout: "@docs"
---

> If this is your first Space app take a look at the [getting started guide](/docs/en/introduction/first-app).

If you don't have an existing SvelteKit app already you can create a new one by following the offical [SvelteKit instructions](https://kit.svelte.dev/docs/introduction#getting-started).

For Space to be able to run SvelteKit it needs to use the node adapter. This ensures that the app is built to be served by a NodeJS server, refer to the [SvelteKit Docs](https://kit.svelte.dev/docs/adapters#supported-environments-node-js) for more information.

Install the `@sveltejs/adapter-node` dependency, and modify `svelte.config.js` to the following:

```jsx
import adapter from '@sveltejs/adapter-node';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter()
	}
};

export default config;
```

Sample `package.json`

```json
{
	"name": "my-app",
	"version": "0.0.1",
	"scripts": {
		"dev": "vite dev",
		"build": "vite build",
		"preview": "vite preview",
		"check": "svelte-kit sync && svelte-check --tsconfig ./tsconfig.json",
		"check:watch": "svelte-kit sync && svelte-check --tsconfig ./tsconfig.json --watch"
	},
	"devDependencies": {
		"@sveltejs/adapter-auto": "next",
		"@sveltejs/kit": "next",
		"@types/cookie": "^0.5.1",
		"svelte": "^3.46.0",
		"svelte-check": "^2.7.1",
		"svelte-preprocess": "^4.10.6",
		"tslib": "^2.3.1",
		"typescript": "^4.7.4",
		"vite": "^3.1.0"
	},
	"type": "module",
	"dependencies": {
		"@fontsource/fira-mono": "^4.5.0",
		"@sveltejs/adapter-node": "^1.0.0-next.92",
		"yarn": "^1.22.19"
	}
}
```

Once you've got the node adapter set up locally and paired your SvelteKit app with a [Space Project](/docs/en/basics/projects/), just modify your [Space Spacefile](/docs/en/reference/spacefile/) file before [pushing changes](/docs/en/basics/revisions/) to Space.

Space Spacefile configuration for SvelteKit:

```yaml
v: 0
micros:
  - name: svelte-kit-app
    src: ./src/fullstack/my-app
    engine: svelte-kit
```