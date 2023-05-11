# New App Guide

## Welcome

Hi there!  

You’re starting an exciting journey building web applications for a new personal computer on the internet: ***Deta Space***. This guide is meant to help you build personal cloud apps with Deta Space, from A to Z. 

If you’re curious what all the fuss is about, read more about what the personal cloud is, or why you should care.

## Sign Up for Space and Log In

If you haven’t yet, the first thing you’ll need to do is sign up for a Deta Space account. You can do so [here](https://deta.space/signup?dev_mode=true). You should get a confirmation email. After you confirm, you can [log in to Space](https://deta.space/login).

![Screen Shot 2023-04-25 at 15.25.26.png](New%20App%20Guide%20260a946f6baf4706b19233d05db8c1eb/Screen_Shot_2023-04-25_at_15.25.26.png)

> 💡P.S. Make sure the ********************Developer******************** **Mode** toggle is enabled when you signup.
> 

## The User Interface

After you log in, you should see a screen like this. 

![Screen Shot 2023-04-06 at 14.21.39.png](New%20App%20Guide%20260a946f6baf4706b19233d05db8c1eb/Screen_Shot_2023-04-06_at_14.21.39.png)

This is your **************Canvas**************, which is a home for all your apps: what you create and 3rd party apps you install. The command bar at the bottom is called ********Teletype********, which provides you with many context-specific actions to help you navigate Space (like Searching the Docs). If you ever aren’t sure what to do, you can open ******************Teletype****************** and see what’s there. The blue app is called **************Builder************** and is your companion for building apps on Deta Space, along with the Space CLI.

Read more about the Space User Interface here

## Installing the Space CLI

To build apps, you need a the Space CLI on your local machine. Download it with one of the following commands:

**MacOS** Windows Linux

```
curl -fsSL https://get.deta.dev/space-cli.sh | sh
```

After it downloads, you need to use the command `space login` to authenticate with the CLI. This requires an ************************Access Token************************, which you can get by clicking the ****************Settings**************** action from Teletype on your Canvas. 

Read more about Installing the CLI and the complete list of CLI commands.

## Apps on Deta Space

A Space app is different from a normal web app. Instead of one central app that serves many users, each user gets their own personal copy of an app, in their own personal cloud on  Space. Space apps and their data are private by default, meaning they belong to users, who have to be logged in to use them. 

IMAGE OF PC ARCHITECTURE

As a developer, you build assuming that you’re the only (already authenticated) user. You can use your favorite programming languages and frameworks, but you don’t have to think about authentication code or data separation. Of course you can still build public facing features or applications that don’t have auth, like websites. 

With Deta Space, you can build all sorts of web applications for yourself and keep it that way. But the personal cloud also has a powerful publishing model — you’re one step away from making your app available to almost anyone in the world with an internet connection.

## Creating a Project with Builder

You need a **************Project************** to build an app. A **Project** is where you build, test, and release apps to the public. Projects live in a Space System App mentioned earlier, called ****************Builder****************. You can create a Project with the Space CLI or in the Builder UI.

******************Space UI****************** | ************************************Builder UI

Open a new terminal, navigate into a new directory (or the directory of an existing app you want to push to Space) and run the `space new`  command:

```
space new
```

Enter a name for your Project. The Space CLI should try to detect applications in your local directory. If found, you can see the config bootrapped by the CLI for those applications in a newly created `Spacefile`.   If you used the Builder UI or have an existing Builder Project, you can use the CLI command `space link` to link a local directory with your Builder Project.

Your Project should now appear when you open the Builder app, where you can test, run, manage and publish your apps with Space.

![Screen Shot 2023-04-26 at 01.11.53.png](New%20App%20Guide%20260a946f6baf4706b19233d05db8c1eb/Screen_Shot_2023-04-26_at_01.11.53.png)

Read more about Managing Projects and about Builder

## The Space Runtime and Spacefile

Deta Space has its own runtime — the Space Runtime — that can run almost any type of web app. It supports most programming languages and frameworks. The `Spacefile`  contains the configuration of your app and is used by Deta Space to understand what your app looks like and how to run it. 

Here’s an example `Spacefile` for a [To Do app](https://github.com/deta/todo-app) built with a static frontend and a Node.js backend:

```bash
# Spacefile Docs: https://go.deta.dev/docs/spacefile/v0
v: 0
micros:
  - name: frontend
    src: frontend
    engine: static
    primary: true
    commands:
      - npm run build
    serve: dist
    dev: npm run dev -- --port $PORT

  - name: backend
    src: backend
    engine: nodejs16
    run: node index.js
    path: api
    dev: npm run dev
    actions:
      - id: "cleanup"
        name: "Delete done tasks"
        trigger: "schedule"
        default_interval: "1 minute"
```

Read more about the Space Runtime or check out the Spacefile reference for all available options.

## Computing with Micros

A Space app runs on serverless compute units called **Micros**. ****A Space app can contain up to five Micros, which run most programming languages and frameworks. 

If `space new` doesn’t bootsrap your Micro when creating a project locally, you can add it by writing to the `Spacefile`.  Create an individual Micro with the `Micros` field in the `Spacefile`.

```yaml
v: 0
micros:
  - name: frontend
    src: frontend
    engine: static
```

Here’s what the required fields in the `Spacefile` do:

- `name`: identifies your Micro inside your app
- `src`: the location of your the Micro’s code in your local directory (relative to the root)
- `engine`: the programming language or framework for your Micro

There are many optional fields that you can use, depending on what your app does. With the `Spacefile` you can make Micros do many things, among them:

- provide Deta’s build pipeline with build commands for your Micro via `build`
- provide the Space CLI with a command to spin up your Micro locally via `dev`
- indicate on what relative path to serve any given Micro via `path`
- make individual routes public via `public_routes`
- create scheduled tasks via `actions`

Check out the Spacefile reference for all available options.

### Making Your App Public

If you’re building something like a website and need parts of your app (or the whole thing) to be public facing, check out how to use the `public` or `public_routes` fields in the `Spacefile`.

```yaml
v: 0
micros:
  - name: frontend
    src: frontend
    engine: static
		public: true
```

## Data Storage

Deta Space offers persistent data storage for Space apps with **********************Collections**********************. Every Space app gets its own Collection. End users of an app are the ones with access to this Collection — data is meant to belong to them. 

Collections offer two persistent storage services:

- **Deta Base**: a simple and powerful NoSQL database.
- **Deta Drive:** simple file storage.

To get started writing data or files to Base or Drive, you can use the **Deta SDKs** or **Deta HTTP APIs**. Authentication is fully managed by Space if you use the SDKs and the `space dev` command for local development. 

- ************************Base SDK Code Snippet************************
    
    ```jsx
    const { Deta } = require('deta'); // import Deta
    
    // Initialize
    const deta = Deta();
    
    // This how to connect to or create a database.
    const db = deta.Base('simple_db');
    
    // You can create as many as you want without additional charges.
    const books = deta.Base('books');
    
    // store objects
    // a key will be automatically generated 
    await db.put({name: "alex", age: 77})
    ```
    

You can also manually authenticate against any Collection using a ****************Data Key****************, which you can get from your Builder Project, under the Develop / Data tab. ********************************There is also a ****************Data Key**************** in the environment of every Space app, stored as `DETA_PROJECT_KEY`. 

- ****************************************************************************Base HTTP API Code Snippet with Manual Authentication****************************************************************************
    
    ```jsx
    
    const fetch = require('node-fetch');
    
    const dataKey = process.env.DETA_PROJECT_KEY;
    
    // Replace these placeholders with your own values
    const projectId = dataKey.split('_')[0];
    const baseName = 'your_base_name';
    
    const url = `https://database.deta.sh/v1/${projectId}/${baseName}/items`;
    
    const headers = {
      'X-API-Key': dataKey,
      'Content-Type': 'application/json',
    };
    
    fetch(url, { headers })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
      })
    ```
    

All the data stored while building your app is viewable and editable via **Base UI** and **Drive UI** in the **Develop Tab** of your Builder Project.

![Screen Shot 2023-04-25 at 17.38.14.png](New%20App%20Guide%20260a946f6baf4706b19233d05db8c1eb/Screen_Shot_2023-04-25_at_17.38.14.png)

![Screen Shot 2023-04-25 at 17.39.29.png](New%20App%20Guide%20260a946f6baf4706b19233d05db8c1eb/Screen_Shot_2023-04-25_at_17.39.29.png)

Read more about data on Space as a developer and as a user.

## Running Your App Locally

The Space CLI offers support to run your app locally, emulating how your app runs in Space with the command `space dev`. This command starts up your Micros, imitates Space’s routing locally, and authenticates your local development environment with your Project’s Bases and Drives. 

To use `space dev`, you will need to provide a `dev` parameter to every Micro in your `Spacefile`. The `dev` parameter is the command `space dev` uses to start a Micro’s development server. Make sure the command starts your web server on the port specified with the `PORT` environment variable, with port `XXXX` as a fallback.

`Spacefile`:

```yaml
# Spacefile Docs: https://go.deta.dev/docs/spacefile/v0
v: 0
micros:
    - name: svelte
      src: svelte
      engine: svelte-kit
      primary: true
    - name: fastapi
      src: fastapi
      engine: python3.9
      dev: uvicorn main:app
      run: uvicorn main:app
      path: api
```

`space dev`:

```bash
~svelte-fastapi % space dev

👀  Checking for running micros...

💻  Starting 2 micro servers...

Micro svelte (primary)
L url: http://localhost:4200/

Micro fastapi
L url: http://localhost:4200/api
```

Read more about local development for Space.

## Pushing Your App to Space

Once you have your app working locally, you can push it to the internet on Deta Space with a single command, from your Project’s local directory:

```bash
~svelte-fastapi % space push
```

This command will package all your code files and pass them to the **Space Build Pipeline**, streaming build logs back to your machine. If your build completes successfully, a ******Revision****** (an installable and runnable package of your app) will be created and installed to your Project’s ******************************Builder Instance.******************************

Read more about pushing to Space and the Build Pipeline.

## Builder Instances

Builder Instances are fully functional apps running in Space, tied to a Project. You can use them to test and debug your app on Space before releasing it to the world. Or you can use them as a flexible personal copy of an app you built for your own use. They offer all the features that normal Space apps offer, and are always based on a specific **Revision** of a  **Project**.

![Screen Shot 2023-04-26 at 01.01.53.png](New%20App%20Guide%20260a946f6baf4706b19233d05db8c1eb/Screen_Shot_2023-04-26_at_01.01.53.png)

When you push a Project’s code for the first time, a Builder Instance is automatically added to your Canvas (signified by the purple `DEV` marker). You can also view them in your Builder Projects. Data stored is shared across your entire Builder Project — both your Builder Instance and your local setup with `space dev` have access to the same data.

### Logs and Debugging

As a real copy of your app running in Space, the Builder Instance is perfect for end to end tests in a real production environment. If something goes wrong at runtime, you can inspect the logs to see what the issue may be. Logs are viewable from your Project in Builder, or from your app’s context menu on the Canvas, just like on any other app.  

**Logs in your Builder Project** | ****Logs from the Canvas Context Menu

![Screen Shot 2023-04-26 at 10.16.22.png](New%20App%20Guide%20260a946f6baf4706b19233d05db8c1eb/Screen_Shot_2023-04-26_at_10.16.22.png)

Read more about debugging with Space.

### Using a Builder Instance

You can use your Builder Instance as you would any other app.  Click on your Builder Instance, to open it in a new tab. If your app is an API, use the URL outside the browser.

You also have all the normal features of a Space App:

- Here’s how you set environment variables
- Here’s how you view your data
- Here’s how you set a Custom Domain

## Publishing Your App

IMAGE GLOBAL SCALE, PERSONAL CLOUDS AROUND THE WORLD

Once you’ve built something that runs in your Builder Instance, you’re one step away from publishing it to just about anyone in the world.

You can use the CLI or Builder UI to create a **Release**, which will be installable in others’ personal clouds via a link:

**CLI** | Builder UI

```bash
space release
```

If you use the additional CLI flag `--listed`, your app will be publicly discoverable and installable via ****************************Deta Discovery****************************.

Read more about publishing on Space here.

## Help, I’m Stuck

- Discord
- FAQs