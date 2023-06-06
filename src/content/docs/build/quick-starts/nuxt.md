---
title: Run a Nuxt App
layout: "@layouts/DocsPageLayout.astro"
---

This quickstart assumes that you have:

- A [Deta Space account](https://deta.space/signup)
- [The Space CLI](/docs/en/build/fundamentals/space-cli) installed and authenticated on your machine
- [Node.js](https://nodejs.org) installed on your machine

You can use your existing [Nuxt](https://nuxt.com/) app or you can create one following the instructions [here](https://nuxt.com/docs/getting-started/installation#new-project).

## Create a Space Project

[Space projects](/docs/en/build/fundamentals/development/projects) allow you to build, test, and use apps on Deta Space. They are also a (optional) launchpad for releasing them to the public.

To create a Space project, run the following command in the Next.js project directory:


```bash
space new
```

You will be prompted to enter a name for your project. The CLI will display a generated configuration for the app and prompt you to confirm. 

Once confirmed, the project will be created along with a [`Spacefile`](/docs/en/build/fundamentals/the-space-runtime/about#the-spacefile). The `Spacefile` contains the configuration for your [Micro](/docs/en/build/fundamentals/the-space-runtime/micros) and a `.space` directory that stores project information and links it to your project.

```yaml
# Spacefile Docs: https://go.deta.dev/docs/spacefile/v0
v: 0
micros:
  - name: nuxt-app
    src: .
    engine: nuxt
    primary: true
```

> ⚠️ If the CLI fails to generate a configuration for your app, you can configure it manually. For more information, please refer to the [Spacefile](/docs/en/build/reference/spacefile) reference.

## Developing Locally

You can run your app on your local machine, in a way that [emulates Space](/docs/en/build/fundamentals/development/local-development) for development. To do so, you need to define a startup command for your  app’s development server using the `dev` command in the Spacefile.

```diff
# Spacefile Docs: https://go.deta.dev/docs/spacefile/v0
v: 0
micros:
  - name: nuxt-app
    src: .
    engine: nuxt
    primary: true
+   dev: npm run dev -- -o
```

Once you define the `dev` command for the Micro in the Spacefile, you can start the development server by running the following command:

```bash
space dev
```

## Run it on Space

To deploy your app to Space, simply run:

```diff
space push
```

This will validate your Spacefile, package and upload your source code to the Space build pipeline, and stream logs of the whole process on your terminal. Once the build process is complete, your [Builder Instance](/docs/en/build/fundamentals/development/local-development). Open it in your browser to test and use a live copy of your app on the internet.

> 💡 You can use `space push --open` to open the builder instance in your browser after successful deployment and update of the builder instance.

Congratulations! 🎉 You have successfully built, deployed and got your first Nuxt app on Space. 🚀