---
title: Developing Locally
section: Basics
position: 3
hidden: false
layout: "@docs"
---

## Starting a Development Server

Once you've created a Space project, you can start developing your app locally using the Space CLI's `space dev` command.

```bash
space dev
```

Behind the scenes, the Space CLI is:

- Generating a data key to allow your app to access the Bases and Drives of your project
- Running each of your micro in a separate process
- Exposing all of your micros through a single entrypoint, on `localhost:4200` by default.

If you want to open the app in your browser automatically after starting your Micros, use the `--open` flag.

You can customize the development command for each micro in your `Spacefile` using the `dev` key.

```yaml
v: 0
micros:
  - name: client
    src: ./client
    engine: svelte
    primary: true
    path: client
  - name: api
    src: ./api
    engine: nodejs16
    dev: nodemon index.js # start the micro in development mode
    path: api
```

The specified `dev` commands need to start a web server that listens on the port specified with the `PORT` environment variable. This way the CLI can properly forward requests to the micro.

You can find instructions on how to setup the right `dev` command for each engine in the "Quickstart Guides".

## Advanced Usage

If you want to have more control over the development process, you can also split the `dev` command into two parts:

- First, start micros individually using the `space dev up` command
- Then, start the reverse proxy using the `space dev proxy`

For our example above, this would look like this:

```bash
# Start the micros individually
space dev up client
space dev up api

# Start the reverse proxy
space dev proxy
```

Some use cases for this approach include:

- Running each micro in a separate terminal window
- integrating micros with other development tools (ex: vscode tasks)

The `space dev` command is just a shortcut for the combination of `space dev up` and `space dev proxy`.

## Running scheduled actions manually

You can trigger [scheduled actions](/docs/en/basics/micros#scheduled-actions) from your local development server by using the `space dev trigger` command.

First make sure you have defined a scheduled action in your Spacefile and set up the right handler in your Micro:

```yaml
v: 0
micros:
  - name: backend
    src: backend
    engine: nodejs16
    run: "node index.js"
    actions:
      - id: "cleanup"
        name: "Clean Up"
        description: "Cleans up unused data"
        trigger: "schedule"
        default_interval: "0/15 * * * *"
```

After starting your development server using either `space dev` or `space dev up`, you can trigger the action manually using the `space dev trigger` command:

```bash
space dev trigger cleanup
```

This will call your local action handler with a mock payload and print the returned response to your console.

## Running commands against your project

If you don’t want to specify a dev command in your Spacefile or you want to run a one-off script while still benefitting from the automatic Base & Drive SDK setup you can wrap your command a `space exec` call:

```bash
# Run a command in the context of your project
space exec --project <project-id> -- npm run init-deta-base.py
```

If you run the command from a directory that is linked to a space app, you can omit the `--project` flag.

Some use cases include:

- testing Base & Drive locally
- pre-filling your projects Bases & Drives with data
- programmatically interacting with Base & Drive
- …anything you can think of!
