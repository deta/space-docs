---
title: Run a Next App
section: Quickstart Guides
position: 1
layout: "@layouts/DocsPageLayout.astro"
---

This quickstart assumes that you have:

- A [Deta Space account](https://deta.space/signup)
- [Space CLI](https://deta.space/docs/en/basics/cli) installed on your machine and logged in
- [Node.js](https://nodejs.org) installed on your machine

You can use your existing [Next.js](https://nextjs.org/) app or you can create one following the instructions [here](https://nextjs.org/docs/getting-started).

## Create a Space Project

[Space projects](https://deta.space/docs/en/basics/projects) allow you to build, test, and use apps on Deta Space. They are also a (optional) launchpad for releasing them to the public. To create a Space project, run the following command in the Next.js project directory:

```bash
space new
```

You will be prompted to enter a name for your project. The CLI will display a generated configuration for the app and prompt you to confirm.

Once confirmed, the project will be created along with a [`Spacefile`](https://deta.space/docs/en/reference/spacefile). The `Spacefile` contains the configuration for your [Micro](https://deta.space/docs/en/basics/micros) and a `.space` directory that stores project information and links it to your Builder project.

```yaml
# Spacefile Docs: https://go.deta.dev/docs/spacefile/v0
v: 0
micros:
  - name: nextjs-app
    src: .
    engine: next
    primary: true
```

> ⚠️ If the CLI fails to generate a configuration for your app, you can configure it manually. For more information, please refer to the [Spacefile](https://deta.space/docs/en/reference/spacefile) reference.

## Enable Standalone Feature

Now, you need to enable the Next.js [Output File Tracing](https://nextjs.org/docs/advanced-features/output-file-tracing) feature. This creates a compressed version of the whole app with necessary dependencies built into the `.next/standalone` directory, which is meant to deploy on its own without additional `node_modules` dependencies.

In order to enable the `standalone` feature, add the following to your `next.config.js`:

```diff
/** @type {import('next').NextConfig} */
const nextConfig = {
+   output: 'standalone',
}

module.exports = nextConfig
```

## Developing Locally

You can run your app on your local machine, in a way that [emulates Space](https://deta.space/docs/en/basics/local) for development. To do so, you need to define a startup command for your  app’s development server using the `dev` command in the Spacefile.

```diff
# Spacefile Docs: https://go.deta.dev/docs/spacefile/v0
v: 0
micros:
  - name: nextjs-app
    src: .
    engine: next
    primary: true
+   dev: npm run dev
```

Once you define the `dev` command for the Micro in the Spacefile, you can start the development server by running the following command:

```
space dev
```

## Run it on Space

To deploy your app to Space, simply run:

```diff
space push
```

This will validate your Spacefile, package and upload your source code to the Space build pipeline, and stream logs of the whole process on your terminal. Once the build process is complete, your [Builder Instance](https://deta.space/docs/en/basics/revisions#testing-changes). Open it in your browser to test and use a live copy of your app on the internet.

> 💡 You can use `space push --open` to open the builder instance in your browser after successful deployment and update of the builder instance.

Congratulations! 🎉 You have successfully built, deployed and got your first Next.js app on Space. 🚀
