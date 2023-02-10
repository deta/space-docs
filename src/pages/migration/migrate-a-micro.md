---
title: Migrate a Micro
position: 1
layout: "@docs"
---


💡 This guide is designed specifically for those who have prior experience with Deta Cloud and provides instructions on how to transfer a Micro running on Deta Cloud to a Deta Space App. **It is not something you have to read from top to bottom before trying out Deta Space.** The recommended way to learn about Deta Space is by reading the [new documentation](https://deta.space/docs).

Deta Micros are lightweight runtimes connected to an HTTP endpoint with Python and Node.js support. Deta Space provides the ability to build apps with Micros, offering support for a wide range of languages and frameworks right out of the box.

> ⚠️ **Deta Cloud support will end on May 1, 2023.**

In this guide, we will walk through the process of migrating your Deta Cloud Micros to a Deta Space App.

## Requirements and Prerequisites

Before you begin, make sure that you have installed and logged into the Space CLI on your system. Login instructions for the Space CLI can be found [here](https://deta.space/docs/en/basics/cli).

## Cloning the Source Code of Your Deta Cloud Micro

The first step in the process of moving your Deta Cloud Micro to a Deta Space App is to pull the source code of the Deta Cloud Micro onto your local system.

You can do it by using the following command in the Deta Cloud CLI:

```bash
deta clone --name <micro-name> --project <project-name>
```
If you are uncertain about the `micro-name` or `project-name`, you can retrieve the command from the Deta Cloud dashboard. To do this, log in to your Space Canvas, select the `Legacy Cloud` app, and use the project selector to choose your project. Then, click on the desired Micro in the left sidebar and go to `Settings`. Finally, copy and paste the command under `Clone Micro`.

![Deta Cloud Dashboard](/migration_assets/migrate_a_micro/deta-cloud-dashboard.png)

## Modifying Your Source Code

If your Deta Cloud Micro is running on a Python runtime, no changes to your code are necessary. Here's an example:

```python
from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def root():
    return "Hello World"
```

However, if your micro is running on a Node.js runtime, modifications to the code will be necessary. In Deta Cloud, Micros running on Node.js runtime require the app instance of the framework, located in `index.js` to be exported. For example:

```js
// on Deta Cloud

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello world!');
});

const port = parseInt(process.env.PORT) || 8080;

module.exports = app;
```

In Deta Space, instead of exporting the app instance, you need to make sure that your Micro listens on the port specified in the `PORT` environment variable. The following is an example of how the code mentioned earlier would be modified:

```js
// on Deta Space

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello world!');
});

const port = parseInt(process.env.PORT) || 8080;
app.listen(port, () => {
  console.log(`helloworld: listening on port ${port}`);
});
```

Once the modification is complete, you are now ready to deploy to Space.

## Initialize a Space Project

To begin with Space, it is necessary to create a Space project using the Space CLI. Although Space projects can also be managed through the Builder app on the Space dashboard (also known as Canvas), we will focus on using the CLI for now.

To create a new Space project, execute the following command from the directory of your cloned Micro.

```bash
space new
```

You will then be prompted to provide a name for your project.

```bash
? What is your project's name? >
```

Once you have named your project, the Space CLI will attempt to bootstrap the configuration for your project and prompt you to confirm if you wish to use the configuration. For Python apps, the process will appear as follows:

```bash
📦  No Spacefile found, trying to auto-detect configuration ...
👇  Space detected the following configuration:

Micro found in "./"
L engine: python3.9

? Do you want to bootstrap the project with this configuration?
```

Type `y` or simply press `Enter` to use the bootstrapped configuration. This will create a Project on Deta Space and autogenerate a [Spacefile](https://deta.space/docs/en/reference/spacefile#whats-the-spacefile) for your project. The Spacefile will how to run your app on Space. Additionally, the CLI will create a `.space` directory locally, which links your local directory to your Space and stores information about the project. It is important to note that this directory should not be included in your version control system and will automatically be added to the `.gitignore` file.

> If the CLI fails to detect the app and generate the configuration, it will generate a blank Spacefile, which you can configure manually. For more information on the Spacefile, please refer to the official documentation [here](https://deta.space/docs/en/reference/spacefile).

> When working on Python projects, it is a good practice to include the virtual environment directory in the [.spaceignore](https://deta.space/docs/en/basics/revisions#ignoring-files-and-directories) file because it contains packages and dependencies that are specific to a particular environment and are not required for deployment. For example:
>
> ```
> .venv
> ```

## Deploying to Space

You are now ready to deploy your app! Simply run the following command in your terminal:

```bash
space push
```

This command will check the validity of your Spacefile, package the required files, and upload them to the Space build pipeline. The logs will be displayed in real-time on your terminal, allowing you to keep track of the progress and easily identify any potential issues that may arise during the deployment process. Once the deployment is successful, a new [revision](https://deta.space/docs/en/basics/revisions#whats-a-revision) will be created and an up-to-date Builder instance of your app will be deployed. You can easily access this Builder instance through your Space Canvas.

![Space Canvas](/migration_assets/migrate_a_micro/space-canvas.png)

By clicking on the Builder instance in the Space Canvas, it will open in a new tab with a unique endpoint of the format `<alias-random>.deta.app`.

Congratulations, you have successfully deployed your app to Deta Space! One final step remains to complete the migration process.

## Authentication in Deta Cloud vs Deta Space

In Deta Cloud, every Micro was publicly accessible by default, and to secure them, users needed to enable authentication and create an API key. On the other hand, Deta Space has a more advanced and comprehensive approach to authentication, where everything is protected with authentication by default, ensuring that only the owner of the app can access it.

### Public Routes

In Deta Space, you have the option to make specific or all of your Micro's routes publicly accessible and generate API keys for your private routes.

If you want to make every route of your Micro publicly accessible, similar to the default behavior in Deta Cloud, open the Spacefile created earlier. In the Spacefile, add the `public_routes` field to your Micro and set `/*` as the public route, as shown below:

```bash
v: 0
micros:
  - name: python-app
    src: .
    engine: python3.9
    public_routes:
      - "/*"
```

The wildcard `*` after the root endpoint `/` in `public_routes` makes every route of the Micro publicly accessible. Space offers much more fine-grained control over which routes you can make public than Deta Cloud.

For more detailed information on this topic, please refer to the post [here](/migration/cloud-vs-space-auth). Now, let's move on to finish migrating your Micro.

To apply the changes to your Builder instance, you need to push your app again:

```bash
space push
```

Once the push is successful, you have successfully migrated your Deta Cloud Micro to Deta Space!

### API Keys

To continue using API Keys with your migrated Micro, you need to enable the `api_keys` preset in the configuration of your Micro in the Spacefile. This will allow you to secure your private routes with API Keys, just as you did with your Deta Cloud Micro.

```bash
v: 0
micros:
  - name: python-app
    src: .
    engine: python3.9
		public_routes:
			- "/*"
		presets:
		      api_keys: true
```

Next, run the command `space push` to apply changes to your Space app. This will enable API keys for your Deta Space Micro, just like they were with your Deta Cloud Micro. To generate an API Key, simply go to your Space Canvas, click on the ellipsis (‘…') on the tile of your app, and you'll be able to generate an API Key from there.

<div style="display: flex; flex-direction: column; width: 100%; align-items: center;">
<img src="/migration_assets/migrate_a_micro/context-menu.png" alt="Context Menu" height="320px" />
</div>

Click "Configuration," and you should be brought to a Configuration menu for your app in the Builder. From here, you can click "Create new API Key" to generate an API Key.

<div style="display: flex; flex-direction: column; width: 100%; align-items: center;">
<img src="/migration_assets/migrate_a_micro/create-api-key.png" alt="Context Menu" height="320px" />
</div>

With that, you have enabled API Keys for your Micro. You can now access protected routes by passing the API Key as an `X-Space-App-Key` header in your requests. For more information on API Keys in Space, visit the official documentation [here](https://deta.space/docs/en/basics/micros#api-keys).


That's it! You have successfully migrated your Deta Cloud Micro to Space.

Share with us what you have built, connect with the Deta team, seek answers to your questions, and hang out on our [community Discord](https://discord.com/invite/deta-827546555200438332) with fellow **Detonians!** We would love to have you.

Happy hacking!
