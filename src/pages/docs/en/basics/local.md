---
title: Running locally
section: Basics
position: 3
layout: "@docs"
---

## Starting a Development Server

Once you've created a project, you can start developing your app locally.
You can use the `space dev` command to start a local development server for your project.

```bash
space dev --open # start a local development server and open the app in your browser
```

You can control what command is run for each micro by editing the `dev` field in your `Spacefile`.

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
    dev: node index.js
    path: api
```

## Running micros individually

Optionally you can instead use separate commands to run each micro individually, then use a reverse proxy to route requests to the correct micro.

```bash
space dev up client # start client
space dev up api # start api

space dev proxy --port 3000 # start a reverse proxy on port 3000 in front of all micros
```

> **Note** The `space dev` command only takes care of running your micros locally.
> You will need to install all micro dependencies before running the `space dev` command.

## Triggering Actions

You can trigger actions from your local development server by using the `space dev trigger` command.

```bash
space dev up backend # start your backend micro

space dev trigger action-name # trigger an action (the action's micro must be running)
```

## Running commands

If you want to run a single command in the context of your project, you can use the `space run` command.

```bash
# Run a command in the context of your project
space run npm run my-script

# If you need to pass flags to the command, you can use the `--` separator
space run -- npm run my-script --my-flag
```
