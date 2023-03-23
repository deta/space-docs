---
title: Run a SvelteKit App
section: Quickstart Guides
position: 3
layout: "@docs"
---


> This guide assumes that you have a SvelteKit app that you want to run on Space. If you don't have a SvelteKit app, follow the instructions on the [SvelteKit docs](https://kit.svelte.dev/docs/creating-a-project) to create one.


## Configure your SvelteKit app
To run a SvelteKit app on Space, you'll need to use the SvelteKit node adapter: [`@sveltejs/adapter-node`](https://kit.svelte.dev/docs/adapter-node). If you already use the Node adapter, skip to the [next section](#run-it-on-space).


First, install the `@sveltejs/adapter-node` dependency:

```sh
npm install @sveltejs/adapter-node
```

Then, in your `svelte.config.js` file, replace the current adapter with the node adapter:

```js
import adapter from '@sveltejs/adapter-node';
// rest of the file
```


Your project is now configured to run on Space. Let's run it!

## Run it on Space
After making sure you've installed the [Space CLI](/docs/en/basics/cli), run the following command in your project's directory:

```sh
space new
```
Follow the prompts to give your app a name. Once that's done, let's push your app to Space:

```sh
space push
```

Great job! You've just deployed your first SvelteKit app on Space. You can now access your app at the URL provided by the CLI.