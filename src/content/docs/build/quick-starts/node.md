---
title: Run a Node.js App
layout: "@layouts/DocsPageLayout.astro"
---

This quickstart assumes that you have:

- A [Deta Space account](https://deta.space/signup)
- [The Space CLI](/docs/en/build/fundamentals/space-cli) installed and authenticated on your machine
- [Node.js](https://nodejs.org) and [npm](https://docs.npmjs.com/cli/v9/configuring-npm/install) installed on your machine

> 💡 Currently, Space only supports Node.js 16, with plans to add support for Node.js 18 soon.
> We recommend using a Node version manager like [nvm](https://github.com/nvm-sh/nvm) to install Node.js and npm on your computer. This will allow you to quickly install and use different versions of Node.js.

## Create a Node.js App

First, create a directory to contain the source code of your app, and navigate to it.

```bash
mkdir nodejs-app
cd nodejs-app
```

Next, initialize a new Node.js app and generate a `package.json` file to manage the dependencies for your app. We'll also install a web framework; for this guide, we'll use [Express.js](https://expressjs.com), but feel free to use another framework of your choice if you prefer.

```bash
npm init -y
npm i express
```

To get started with Express.js, create a new file called `index.js`. Then, add the following code:

```js
const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Hello from Space! 🚀");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});
```

This code sets up a basic web server that listens on the port specified by the `PORT` environment variable.

> 💡 Make sure your app is configured to listen on the port defined by the `PORT` [environment variable](/docs/en/build/fundamentals/the-space-runtime/configuration#pre-set-variables).

## Create a Space Project

[Space projects](/docs/en/build/fundamentals/development/projects) allow you to build, test, and use apps on Deta Space. They are also a (optional) launchpad for releasing them to the public.

To create a Space project, run the following command in the directory containing your source code:

```bash
space new
```

You will be prompted to enter a name for your project. The CLI will display a generated configuration for the app and prompt you to confirm. 

Once confirmed, the project will be created along with a [`Spacefile`](/docs/en/build/fundamentals/the-space-runtime#the-spacefile). The `Spacefile` contains the configuration for your [Micro](/docs/en/build/fundamentals/the-space-runtime/micros) and a `.space` directory that stores project information and links it to your project.

```yaml
# Spacefile Docs: https://go.deta.dev/docs/spacefile/v0
v: 0
micros:
  - name: nodejs-app
    src: .
    engine: nodejs16
    primary: true
```

> ⚠️ For now, the Spacefile with the generated configuration only works when there an `index.js` file at the root directory of the micro's source code else you will have to explicitly define what command should be executed to start your app with the `run` command.

> ⚠️ If the CLI fails to generate a configuration for your app, you can configure it manually. For more information, please refer to the [Spacefile](/docs/en/build/reference/spacefile) reference.

The Spacefile can be further configured to depending on your project's specific requirements. So whether your project has a build step, or only a specific directory is required to be included in the final package of the Micro, you can configure these with the Spacefile and the build pipeline will handle them accordingly. [Read more here](/docs/en/build/fundamentals/the-space-runtime#the-spacefile#whats-the-spacefile).

```diff
# Spacefile Docs: https://go.deta.dev/docs/spacefile/v0
v: 0
micros:
  - name: nodejs-app
    src: .
    engine: nodejs16
    primary: true
+   commands:
+     - npm run build
+   include:
+     - dist
+   run: node dist/index.js
```

## Developing Locally

You can run your app on your local machine, in a way that [emulates Space](/docs/en/build/fundamentals/development/local-development) for development. To do so, you need to define a startup command for your  app's development server using the `dev` command in the Spacefile.

```diff
# Spacefile Docs: https://go.deta.dev/docs/spacefile/v0
v: 0
micros:
  - name: nodejs-app
    src: .
    engine: nodejs16
    primary: true
    commands:
      - npm run build
    include:
      - dist
    run: node dist/index.js
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

This will validate your Spacefile, package and upload your source code to the Space build pipeline, and stream logs of the whole process on your terminal. Once the build process is complete, your [Builder Instance](/docs/en/build/fundamentals/development/local-development). Open it in your browser to test and use a live copy of your app on the internet.

> 💡 You can use `space push --open` to open the builder instance in your browser after successful deployement and update of the builder instance.

Congratulations! 🎉 You have successfully built, deployed and got your first Node.js app on Space. 🚀
