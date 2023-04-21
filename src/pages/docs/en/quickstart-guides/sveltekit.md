---
title: Run a SvelteKit App
section: Quickstart Guides
position: 3
layout: "@docs"
---

This quickstart assumes that you have:

- A [Deta Space account](https://deta.space/signup)
- [Space CLI](https://deta.space/docs/en/basics/cli) installed on your machine and logged in
- [Node.js](https://nodejs.org) installed on your machine

You can use your existing [SvelteKit](https://kit.svelte.dev/) app or you can create one following the instructions [here](https://kit.svelte.dev/docs/creating-a-project).

## Create a Space Project

[Space projects](https://deta.space/docs/en/basics/projects) allow you to build and test apps with different Space features before releasing it to the public. To create a Space project, run the following command in the Next.js project directory:

```bash
space new
```

You will be prompted to enter a name for your project. The CLI will then display a generated configuration for the app and prompt you to confirm the setup of the project with that configuration. Once confirmed, the project will be created along with a [Spacefile](https://deta.space/docs/en/reference/spacefile) that contains the configuration for the micro and a `.space` directory that stores project information and links it to your Builder project.

```yaml
# Spacefile Docs: https://go.deta.dev/docs/spacefile/v0
v: 0
micros:
  - name: sveltekit-app
    src: .
    engine: svelte-kit
    primary: true
```

> ⚠️ If the CLI fails to generate a configuration for your app, you can configure it manually. For more information, please refer to [this](https://deta.space/docs/en/reference/spacefile).

## Use SvelteKit adapter for Node servers

SvelteKit app’s require their [Node server adapter](https://kit.svelte.dev/docs/adapter-node) to generate a standalone Node server for deployment on Space. Install the adapter with:

```bash
npm i -D @sveltejs/adapter-node
```

Now, you need to add the adapter to your `svelte.config.js`:

```diff
- import adapter from '@sveltejs/adapter-auto';
+ import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter()
	}
};

export default config;
```

## Developing Locally

To develop your app on your local machine, you can define what command should be executed to start your app’s development server with the `dev` command in the Spacefile. With this the CLI will take care of generating and injecting the `Data Key` for easier access to app’s Base and Drive instances with SDKs, as well as testing scheduled actions, so you can focus on developing your app without worrying about configuring these all by yourself.

```diff
# Spacefile Docs: https://go.deta.dev/docs/spacefile/v0
v: 0
micros:
  - name: nextjs-app
    src: .
    engine: next
    primary: true
+	  dev: npm run dev
```

Once you define the `dev` command for the micro in the Spacefile, you can start the development server by running the following command:

```
space dev
```

## Run it on Space

To deploy your app to Space, simply run:

```diff
space push
```

This will validate your Spacefile, then package and upload your source code to Space build pipeline, and stream logs of the whole process on your terminal. Once the build process is complete, the builder instance will be updated and the CLI will return the link to the Builder instance. Open it in your browser and you got your app running on Space.

> 💡 You can use `space push --open` to open the builder instance in your browser after successful deployment and update of the builder instance.

Congratulations! 🎉 You have successfully built, deployed and got your first SvelteKit app on Space. 🚀