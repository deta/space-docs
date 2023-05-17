---
title: Build a To Do App
position: 1
layout: "@layouts/DocsPageLayout.astro"
---

# Tutorial: Build a To Do App

This guide will teach you how to build your first internet application on Deta Space. It assumes zero prior knowledge about Space itself, and is meant to teach through practice. If you want to read more in depth about the concepts behind Space, see [Intro to Space apps](https://www.notion.so/New-Docs-a1d09ca83ab142daa680afdd3c20f4c1) and  [Space Fundamentals](https://www.notion.so/New-Docs-a1d09ca83ab142daa680afdd3c20f4c1).

The guide has 5 sections:

- ************************Overview************************ is a quick overview of Space and what we’ll build
- **Prerequisites** are what you need before you can start building
- **Projects, Builder and the Space Runtime** will set you up and briefly touch on a few concepts
- **Coding the app** will teach you how to code an app for Space
- **Running the app** will teach you how to run your app on Space, and emulate it locally

## Overview

### What is Deta Space?

Deta Space is a personal computer that lives in the internet, or ‘personal cloud’. A personal cloud is a new approach to cloud computing, making it a lot simpler for developers to create and share software on the internet. It’s also a completely new way of using internet software that puts you, as a user, in the driver’s seat. If you’re curious, you can read more here (LINK).

What’s important to realize about the personal cloud is that every user of an app gets their own copy, with their own resources to power it. As you build the app, you’ll see you don’t think about auth or other users — you assume there’s just you. But once you’ve written your app, you’ll be able to publish it to just about anyone, if you want.

Don’t be afraid if this sounds new — Space supports most common programming languages and frameworks. Your code will resemble a typical web application. If anything, you’ll probably end up writing less code than you would otherwise. That’s because Space itself gives you a lot out of the box.

### What Are We Building?

In this guide, we’ll show you how to build a simple to do app on Space. You can see what we’ll be building by installing the “To Do App” (*needs link*) from Deta Discovery and trying it out yourself.

The app consists of two main parts:

- a User Interface made from a static frontend built with HTML, JS and CSS
- a Node.js server which intermediates between User Interface and a database (which comes with Space)

## Prerequisites

This guide assumes you have a basic understanding of how a web app works. It also uses JavaScript, but you should be able to follow if you’re used to another programming language.

### **Deta Account**

Since we are building an app for Deta Space, you will need a Deta account. You can signup for free [here](https://deta.space/signup) if you haven’t already (make sure Developer Mode is enabled).

### **Space CLI**

An essential part of building a Space app is the Space command line interface (CLI). We will use the CLI in this guide. You’ll also need it in the future to build your own Space apps. Make sure you install and log in to the CLI before starting. Read more about that here:  [Setup the Space CLI guide](Tutorial%20Build%20a%20To%20Do%20App%20dad0749b2ee84e1b85b6748634738d01.md).

### **Node.js**

In addition to the Space CLI you’ll also need the following installed on your machine:

- Node.js ≥18
- NPM

The full code for the app that we are building is on GitHub: https://github.com/deta/todo-app. You can clone it if you want, but you won’t need to, to complete the guide.

## Projects, Builder and the Space Runtime

Any Space app starts as a ******************Project******************, which provides tools for you to build, manage, and debug a Space app. Projects are created in ****************Builder****************, which is a System application that comes pre-installed in your Space, if you’re a developer. With Builder, you can manage different projects that you’re working on.

To get started with our to do app, lets open a terminal on your development machine, create a new directory for our app called `todo-app`, and then navigate into it:

```bash
mkdir todo-app && cd todo-app
```

Next we’ll create a new Project in Builder using the Space CLI. We can use the `space new` command for this:

```bash
space new
```

The CLI will ask you for a Project name, we’ll call ours `todo-app`:

```bash
? What is your project's name? > todo-app
```

The CLI will now create your Project and link your local directory to it. You may have noticed a `**Spacefile**` was created in the directory where we ran the `space new` command. Deta Space has its own runtime, the **Space Runtime**, which is the “environment” where your app runs. And the `**Spacefile**` is used to tell the Space Runtime how to run your app, but we’ll explore it more as we go.

The runable component within the Space Runtime is a **Micro**, a serverless compute unit that can be configured to serve static files, run a server or handle other types of events. Micros can be written in almost any programming language or framework.  Our Quick Starters have more information.

Let’s get back to our app.

## Coding our App

A Space app can combine up to five different Micros, but for this app we will need two:

- a static Micro for our frontend
- a Node.js Micro for our backend

Deta Space also offers two built-in data storage primitives: **Base**, a NoSQL database and **Drive**, for storing files. We’ll use Base in our app, which we’ll get to in a bit.

### Frontend

Let’s start with the our frontend. We’ll create a new directory in our Project and navigate into it:

```bash
mkdir frontend && cd frontend
```

Then we can create a simple `index.html` file in the new directory. This will serve as the entry point for our app.

- `index.html`

    ```html
    <!DOCTYPE html>
    <html lang="en">

    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Space To Do Example</title>
    	<link rel="stylesheet" href="/style.css">
    </head>

    <body>
      <div class="container">
        <div class="card">
          <input id="input" placeholder="Put here your stuff that you planning to do!">
          <div id="todos"></div>
        </div>

        <p class="description">
          Press <b>Enter</b> to add todo your list. Click on the <b>Check Mark</b>, to mark it as <b>Done</b>.
        </p>
      </div>

      <script type="module" src="/main.js"></script>
    </body>

    </html>
    ```


In `index.html` you can see we are importing a JavaScript file called `main.js`. Let’s create this file as well.

- `main.js`

    ```jsx
    let todos = [];

    const todosList = document.getElementById('todos');
    const inputElement = document.getElementById('input');

    async function getTodos() {
      const request = await fetch('/api');
      const data = await request.json();

      todos = data.todos;
      renderTodos();
    }

    async function addTodo(text) {
      const trimmedText = text.trim();

      if (trimmedText === '') return inputElement.focus();
      inputElement.value = '';

      const response = await fetch('/api', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text: trimmedText })
      });

      const data = await response.json();

      todos.push(data.todo);
      renderTodos();
    }

    async function toggleTodo(key) {
      todos = todos.map((todo) => {
        if (todo.key === key) todo.done = !todo.done;
        return todo;
      });
      renderTodos();

      await fetch(`/api/${key}`, { method: 'PUT' });
    }

    async function removeTodo(key) {
      todos = todos.filter((todo) => todo.key !== key);
      renderTodos();

      await fetch(`/api/${key}`, { method: 'DELETE' });
    }

    function renderTodos() {
      todosList.innerHTML = '';

      todos.forEach((todo, i) => {
        const key = todo.key;

        const todoElement = document.createElement('div');
        todoElement.className = 'todo';

        const textElement = document.createElement('div');
        textElement.className = `text ${todo.done ? 'done' : ''}`;
        textElement.innerText = todo.text;

        const deleteElement = document.createElement('img');
        deleteElement.className = 'action';
        deleteElement.src = '/trashbin.svg';
        deleteElement.tabIndex = 0;
        deleteElement.addEventListener('click', () => removeTodo(key));
        deleteElement.addEventListener('keyup', (event) => event.key === 'Enter' && removeTodo(key));

        const toggleElement = document.createElement('img');
        toggleElement.className = `action ${todo.done ? 'active' : ''}`;
        toggleElement.src = '/check.svg';
        toggleElement.tabIndex = 0;
        toggleElement.addEventListener('click', () => toggleTodo(key));
        toggleElement.addEventListener('keyup', (event) => event.key === 'Enter' && toggleTodo(key));

        todoElement.append(toggleElement);
        todoElement.append(textElement);
        todoElement.append(deleteElement);

        todosList.prepend(todoElement);
      });
    }

    inputElement.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') addTodo(event.target.value);
    });

    getTodos();
    ```


We don’t have to go through this file in detail, but what’s important to know is that it talks with our backend (yet to be created) using an `/api` endpoint to create and fetch to do items.

For some simple styling we can optionally create a CSS file `style.css`.

- `style.css`

    ```css
    body {
      margin: 0;
      padding: 0;
      padding-top: 4em;
      padding-bottom: 8em;
      width: 100%;
      min-height: 100vh;
      overflow-x: hidden;
      color: #f7f5f2;
      background: linear-gradient(90deg,#1c1b1b 30px,#0000 1%) 50%,linear-gradient(#1c1b1b 30px,#0000 1%) 50%,#ffffff26;
      background-size: 32px 32px;
    }

    .container {
      width: 100%;
      margin: 0 auto;
      padding: 0 16px;
      max-width: 600px;
    }

    #input {
      width: 100%;
      border: none;
      outline: none;
      font-size: 1em;
      line-height: 2em;
      padding: .5rem 1rem;
      font-weight: normal;
      border-radius: .75rem;
      background-color: transparent;
    }

    #input:focus {
      outline: none;
    }

    .card {
      border: 0 solid;
      position: relative;
      border-radius: .375rem;
      transition-property: all;
      transition-timing-function: cubic-bezier(.4,0,.2,1);
      transition-duration: .15s;
      border-width: 4px;
      border-color: #49464580;
      background-color: rgb(28 27 27);
    }

    .description {
      color: #494645;
      line-height: 1em;
      font-size: 0.75em;
      text-align: center;
    }

    .todo {
      position: relative;
      display: flex;
      flex-direction: row;
      padding: 0.5rem 1rem;
      border-top: 4px solid;
      border-color: #49464580;
    }

    .text {
      text-overflow: ellipsis;
      overflow: hidden;
      width: 100%;
      font-size: 1em;
      line-height: 2em;
      padding-right: 0.5em;
    }

    .text.done {
      text-decoration: line-through;
      color: #727272;
    }

    .action {
      cursor: pointer;
      width: 2em;
      height: 2em;
      filter: invert(20%);
      transform: scale(0.75);
      transition: filter 0.15s ease, transform 0.2s ease;
    }

    .action:first-child {
      margin-left: -0.5em;
      margin-right: 0.5em;
    }

    .action:last-child {
      margin-left: auto;
    }

    .action.active {
      transform: scale(0.9);
      filter: invert(50%);
    }

    .action:hover, .action:focus {
      outline: none;
      filter: invert(75%);
    }
    ```


### Backend

Our next step will be to create the backend API, which will receive instructions from our frontend and talk to our database. For this let’s create another Micro in the `backend` directory:

```bash
mkdir backend && cd backend
```

Our API will be built using a Node.js server. We’ll use [Express](https://expressjs.com/) as a framework, so let’s create a new NPM project and install the `express` and `deta` packages (more on that in a bit):

```bash
npm init -y && npm install express deta
```

For our simple API we’ll create a `index.mjs` file that will contain our API routes and start the server.

- `index.mjs`

    ```jsx
    import { Deta } from 'deta';
    import Express from 'express';

    const app = Express();

    const deta = Deta();
    const db = deta.Base('todos');

    app.use(Express.json());

    app.get('/', async (req, res) => {
        try {

            const todos = await db.fetch();
            todos.items.sort((a, b) => a.createdAt - b.createdAt);

            res.send({ success: true, todos: todos.items  });

        } catch (error) {
            console.error(error);
            res.status(500).send({ success: false, error });
        }
    });

    app.post('/', async (req, res) => {
        try {

            const todo = await db.put({
                text: req.body.text,
                createdAt: Date.now(),
                done: false
            });

            res.send({ success: true, todo });

        } catch (error) {
            console.error(error);
            res.status(500).send({ success: false, error });
        }
    });

    app.put('/:key', async (req, res) => {
        try {

            const todo = await db.get(req.params.key);

            await db.update({ done: !todo.done }, req.params.key);

            res.send({ success: true, todo });
        } catch (error) {
            console.error(error);
            res.status(500).send({ success: false, error });
        }
    });

    app.delete('/:key', async (req, res) => {
        try {

            await db.delete(req.params.key);
            res.send({ success: true });

        } catch (error) {
            console.error(error);
            res.status(500).send({ success: false, error });
        }
    })

    const port = process.env.PORT
    app.listen(port, () => {
        console.log(`backend running on port ${port}!`);
    });
    ```


There a few important things happening in this file, let’s go through each one:

****************************Starting the server****************************

At the bottom of the file, you’ll see that we are starting the HTTP server using the `PORT` environment variable. The Space Runtime will route HTTP requests to our Micro on the port set in this variable. Since our app talks over HTTP, this is necessary.

```jsx
const port = process.env.PORT
app.listen(port, () => {
    console.log(`backend running on port ${port}!`);
});
```

************************************Connecting to Deta Base************************************

At the top of the file we are importing the `express` package and also the `deta` package. `express` will run our web server, while `deta` is an SDK which you can use to talk with Space’s built-in database, Base.

```jsx
import { Deta } from 'deta';
import Express from 'express';

const app = Express();

const deta = Deta();
const db = deta.Base('todos');

```

You can see that we are instantiating the SDK with `Deta()` and then referencing a Base called `todos` using `deta.Base('todos')` in our `db` variable. This is all that is needed to setup and connect our server to a fully functional database.

If you examine the four handler functions in `index.mjs`, you’ll see how `GET`, `POST`, `PUT` and `DELETE` requests are translated into reading, creating, updating and deleting to dos from our `todos` database. We just use a few simple methods the Deta SDK offers on our `db` object.

- `index.mjs`

    ```jsx
    import { Deta } from 'deta';
    import Express from 'express';

    const app = Express();

    const deta = Deta();
    const db = deta.Base('todos');

    app.use(Express.json());

    app.get('/', async (req, res) => {
        try {

            const todos = await db.fetch();
            todos.items.sort((a, b) => a.createdAt - b.createdAt);

            res.send({ success: true, todos: todos.items  });

        } catch (error) {
            console.error(error);
            res.status(500).send({ success: false, error });
        }
    });

    app.post('/', async (req, res) => {
        try {

            const todo = await db.put({
                text: req.body.text,
                createdAt: Date.now(),
                done: false
            });

            res.send({ success: true, todo });

        } catch (error) {
            console.error(error);
            res.status(500).send({ success: false, error });
        }
    });

    app.put('/:key', async (req, res) => {
        try {

            const todo = await db.get(req.params.key);

            await db.update({ done: !todo.done }, req.params.key);

            res.send({ success: true, todo });
        } catch (error) {
            console.error(error);
            res.status(500).send({ success: false, error });
        }
    });

    app.delete('/:key', async (req, res) => {
        try {

            await db.delete(req.params.key);
            res.send({ success: true });

        } catch (error) {
            console.error(error);
            res.status(500).send({ success: false, error });
        }
    })

    const port = process.env.PORT
    app.listen(port, () => {
        console.log(`backend running on port ${port}!`);
    });
    ```


If you’re curious about what else Deta Base has to offer, you can read more here (MORE).

One more point we’d like to mention. As we referenced earlier, the notion of multiple users is completely abstracted away in our code. There is no auth code or logic dealing with multiple users managing their own to dos. Nonetheless, Space will still let us release our app to many users around the world, with this simple setup, which we’ll get to later.

### Configuring the app using the Spacefile

Now that we have both Micros setup, the last step is to connect them together into a single app. For that we’ll shift our attention to the `**Spacefile**` that was created in the beginning. If you open it, you’ll see the file should be almost completely empty:

```bash
# Spacefile Docs: https://go.deta.dev/docs/spacefile/v0
v: 0
```

It only includes a link to the `Spacefile` docs and the version field.

Let’s change that and add a new field for our Micros called `micros` and add the frontend Micro to it:

```yaml
# Spacefile Docs: https://go.deta.dev/docs/spacefile/v0
v: 0
micros:
	- name: client
    src: frontend
    engine: static
    serve: .
```

You can see that the Micro has a few different fields set, we’ll explain them:

- `name`: this identifies your Micro and can be anything you like, we’ll call ours `client`
- `src`: this is the source of your Micro and it should be set the the directory that contains your Micro, in our case `frontend`
- `engine`: this tells the Space runtime what type of Micro you are using. Since our Micro is a static frontend we set it to `static`
- `serve`: this tells the Space runtime which directory contains the static files that it should serve. Since our simple frontend has all the files in the Micro’s source directory we can just set it to the current directory using a dot `.`

This would already be enough for Space to run our frontend as a full Space app. Our frontend also needs a backend though, so let’s set that up as well.

We’ll just add another Micro to the `micros` field in our `Spacefile`:

```yaml
# Spacefile Docs: https://go.deta.dev/docs/spacefile/v0
v: 0
micros:
	- name: client
    src: frontend
    engine: static
    serve: .

	- name: api
    src: backend
    engine: nodejs16
    run: node index.mjs
    dev: node --watch index.mjs
```

The fields for this Micro are as follows:

- `name`: we’ll call ours `api`
- `src`: the source of our server is in the `backend` directory
- `engine`: Since we are using Node.js for our server, let’s use `nodejs16`
- `run`: this tells the Space runtime what command to use to run the Micro. Since our  `index.mjs` file starts our server we’ll just run the file with `node`
- `dev`: this tells the Space runtime what command to use for development. We use the same command as for `run` but with the `watch` flag enabled, which allows node to automatically reload our server when we change something

### Application Routing

Now that we have our two Micros configured, you might be wondering how Space actually runs them, and how they are able to handle incoming requests across different routes.

Space requires you to choose a **************************Primary Micro**************************, as you need at least one Micro to handle all incoming requests. This Micro will serve as the fallback, if no other Micro is handling a request. Your Primary Micro will also be available on the root (`/`) of your app.

To do this we can use the `primary` field of a Micro in the `Spacefile`. For our to do app we want our frontend to be the Primary Micro, so we’ll add the field to it:

```yaml
# Spacefile Docs: https://go.deta.dev/docs/spacefile/v0
v: 0
micros:
	- name: client
    src: frontend
    engine: static
		primary: true
    serve: .

	- name: api
    src: backend
    engine: nodejs16
    run: node index.mjs
    dev: node --watch index.mjs
```

Every other Micro that is not the Primary Micro will be available under a specific route, relative to the root `/`. In our case, since our backend Micro is called `api`, the Micro will be available on `/api`.

You can see this if you take a look at our `main.js` file in the `frontend` directory, where our frontend is talking to our backend via a simple fetch call to the `/api` route:

```jsx
 const request = await fetch('/api');
```

Meanwhile, in our backend server in `index.mjs`, all the handlers will be relative to the `/api` route. As we send the `GET` request to the `/api` route of our app, it will trigger the `app.get('/', async (req, res) => {})` backend’s handler.

## Running your app

### Locally

Once we have our app fully configured using the `Spacefile`, we can run it locally to test if everything works. For this we’ll use the `space dev` command. It will start both of our Micros and emulate the routing of our entire Space app.

Let’s try it by running `space dev`:

```bash
$ space dev

👀  Checking for running Micros...
💻  Starting 2 micro servers...

Micro client (primary)
L url: http://localhost:4200/

Micro api
L url: http://localhost:4200/api
```

To access your app, open a browser window and visit `http://localhost:4200/`. You should see our fully functional to do app!

![Untitled](Tutorial%20Build%20a%20To%20Do%20App%20dad0749b2ee84e1b85b6748634738d01/Untitled.png)

Try adding to dos and marking existing todos as complete. Everything should work — even when you reload the page your to dos should remain the same.

Behind the scenes `space dev` setup a new Base for our to dos in our Builder Project. We can view the raw data in the Base with a UI in Builder. To open our Project there, we can just run `space open` and a new browser window should appear with the Builder interface open:

```bash
space open
```

Navigate to the “Develop” page and then the “Data” tab to view your Base:

![Untitled](Tutorial%20Build%20a%20To%20Do%20App%20dad0749b2ee84e1b85b6748634738d01/Untitled%201.png)

You can use the Base UI to edit your data and the changes should show up in your local app after reloading the page.

### On Space

Now it’s time to put our app live on the internet in Deta Space. To do this we can simply run another command with the Space CLI, `space push`:

```bash
space push
```

`space push` will take all of the source code, the configuration from the `Spacefile`, and send it to the build pipeline to create a ****************Revision****************. This Revision reflects an executable copy of your app at a point in time.

```bash
$ space push

Validating Spacefile...

✓ Micro "client"
✓ Micro "api"

Your Spacefile looks good, proceeding with your push!!

✓ Successfully started your build!
✓ Successfully pushed your Spacefile!

📦  Pushing your code & running build process...

2023/03/07 13:56:31 Parsing Spacefile...
2023/03/07 13:56:31 Packaging code for micros...
2023/03/07 13:56:31 Packaging dependencies for micros...
created revision: lamprey-pqyy
```

After the Revision is created, the CLI will also create a new “Builder Instance” than runs the Revision. This instance is a live version of your app on the internet. It has all the same features as any other Space app, the only difference is that it is connected to your Builder Project.

```bash
💻  Updating your Builder instance with the new revision...

starting update...
fetching release configuration...
allocating resources..
configuring resource 1 out of 2...
configuring resource 2 out of 2...

🎉  Successfully pushed your code and updated your Builder instance!

Builder instance: https://todo-app-1-r941271.deta.app
```

The CLI will print a URL which you can use to access and use your Builder Instance. The instance will also show up on your Space Canvas.

**Congrats, you have just built your first Space app! 🎉**

<aside>
💡 You will notice that your instance already contains the to dos that you created through the local app. This is because your Builder instance shares its data with your Builder Project (including local dev).

</aside>

## **Important Takeaway**

One very important detail you’ll notice is that your instance is only accessible to you. It is protected behind Deta Auth: if you’re not logged in to your Deta account, or in incognito, you can’t access it. This is fundamental to how Space works — apps are for you, by default.

If you are building an app that needs some or all parts to be public, like a website, you can use “public routes” to make specific routes or entire Micros public. Learn more about that in our “Authentication” guide.

## Wrapping up

Congratulations, you have built your very own Space app!

You have learned how to:

- create a new Builder project
- create and configure Micros
- use Deta Base to store and retrieve and view data
- run your app both locally and on Space

Good job! We hope you now feel like you have a decent grasp of how a Space app works.

## Going Beyond

### Extending your To Do App

If you have extra time or have more motivation, here are some ideas on how to improve this to do app and take it even further:

1. Add another scheduled action that creates a recurring to do item
2. Add another Base that keeps track of different task lists
3. Use Deta Drive to allow the user to upload files to a to do item
4. Create publicly shareable to dos with public routes

If you want to dive deeper into the concepts behind Space and all the features it has to offer, head over to our “Fundamentals”, “Use Cases”, or “Quick Starters”.

### Publishing

Space is based on the personal cloud, where apps and data are personal. But once you’ve built something personal, the personal cloud also has a powerful publishing model where you can make your app available to almost anyone in the world with an internet connection.

Read more about publishing on Space here.