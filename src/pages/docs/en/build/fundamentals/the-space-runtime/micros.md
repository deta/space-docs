---
title: Micros
position: 2
layout: "@docs"
---

## What's a Micro?

As mentioned in the [Space Runtime page](/docs/en/build/fundamentals/the-space-runtime/about), a Micro is a lightweight serverless compute unit inside your app which can be exposed to the world over HTTP. You can combine up to 5 Micros in a single Space app. Individual Micros can run many kinds of things:

- frontend sites built with frameworks like [React](https://react.dev/), [Vue](https://vuejs.org/), and [Svelte](https://svelte.dev/)
- full-stack frameworks like [Next](https://nextjs.org/), [Nuxt](https://nuxtjs.org/), or [SvelteKit](https://kit.svelte.dev/)
- backend apps built with Node.js, Python and even Go, Rust or something more custom.

Micros are defined in your project's [`Spacefile`](/docs/en/build/fundamentals/the-space-runtime#the-spacefile), which tells Deta Space what kinds of Micros live in your app and how to run them.

## Adding a Micro 

### On Project Creation

You can add your first Micro while bootstrapping a new project using the Space CLI. The CLI tries to auto-detect the type of app you want to deploy based on your local code. This detection works for most frontend frameworks like Next, Nuxt, SvelteKit, and backend runtimes like Node.js and Python.

CODE EXAMPLE / SCREEN SHOT OF MICRO CREATION VIA THE CLI

If the detection works and you confirm, the CLI will create the right `Spacefile` for you in your local directory. If the detection fails, Space supports running almost any programming language or framework on Micros using the `Spacefile`.

### Via the Spacefile

If you want to run something custom or need to add more Micros to an existing project, you can edit the project's `Spacefile` to add the required configuration. Take a look at the [Spacefile reference](/docs/en/build/reference/spacefile) for a complete list of options.

Here's the `Spacefile` for an app consisting of a single Node.js Micro:

```yaml
v: 0
micros:
  - name: api
    src: ./node-api
    engine: nodejs16
    run: npm run start
		dev: nodemon index.js
```

The `name` field identifies your Micro inside your app and the `src` should point to the location of the Micro's source code relative to your project's root. 

If your project contains more than one Micro, the `primary` field can be used to identify the [entry point of your application](/docs/en/build/fundamentals/the-space-runtime/micros#micro-routing) (which Micro will be executed when the root path of your app is invoked over HTTP).

Checkout the [Quick Starts](/docs/en/build/fundamentals/quick-starts) for instructions on adding specific Micros to your app.

## Directory Structure

A Micro can be thought of as its own independent service. As a result, Micros should be self-contained in their own directory inside your code base.  Let’s look at an example of a good structure.

Here's the file & folder structure of an app with a Python backend and a Vue frontend:

```
Spacefile
backend/
    requirements.txt
    main.py
frontend/
    package.json
    src/
        index.vue
```

All files needed for the Vue frontend (including `package.json`) are inside the `frontend` directory, while all files needed for the Python backend are inside `backend`.

Here is the matching `Spacefile`:

```
v: 0
micros:
  - name: frontend
    src: ./frontend
    engine: vue
    primary: true
  - name: backend
    src: ./backend
    engine: python3.9

```

> 🔑 It's recommended to put your first Micro in its own sub-directory of your project. A single Micro will work running in the root directory of your project, but this approach doesn't scale. You'll have to migrate this Micro as soon as you want to add a second Micro to your project.

## Micro Routing

Since your app can contain up to five Micros, the Space Runtime needs to know what requests to route to which Micro (if you have multiple Micros).

On Space, this is handled by having a single **Primary Micro** which receives all requests made to your app's root path `/`. The Primary Micro is defined by the `primary` field in your `Spacefile`. Each other Micro will be served on a specific path relative to your app's primary hostname, defined in the Micros’ `path` fields in your `Spacefile`:

```
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
    path: api

```

In the above example, the `api` Micro will be available at `/api` (and all sub-paths of `/api`, e.g. `/api/sub`) while all other paths including the root `/` will be received by the primary Micro, in this case, the static Micro `client`. If the path is missing, the path will fall back to the `name` field.

You can emulate Space’s routing in local development with the [`space dev` command](/docs/en/build/fundamentals/development/local-development#routing-emulation).

## Cross Micro Communication

Micros within a project are independent services, but can invoke one another to get what they need. How you can successfully invoke one Micro from another one depends on if the invoking Micro is sending the request from the browser or server side.

### From the browser

If you are trying to call a backend Micro from another Micro in the browser, you can make requests to the relative path where the Micro is served from. If the backend Micro is served on `/api`, just make a request to `/api`:

```jsx
// In the browser
fetch('/api')
```

Auth should “just work” on Space in this context. By default, a user is [already authenticated](/docs/en/build/fundamentals/the-space-runtime-authentication#the-developer-perspective) with Deta Space when logged in via the browser.  One note is that this does not work for in unauthenticated contexts, like Micros that have been made [publicly accessible](/docs/en/build/fundamentals/the-space-runtime-authentication#public-micros-and-routes).

Read more about Authentication on Space [here](/docs/en/build/fundamentals/the-space-runtime-authentication).

### Server side

If you are trying to call a backend Micro from another backend Micro, you’ll need to do two things in your code. First, you need to get your app's address to make the request (via an assigned hostname), and second, you need use an api key to authenticate your request.

Both of these items are provided in the environment of every backend Micro:

- The primary hostname is under the `DETA_SPACE_APP_HOSTNAME` environment variable.
- The api key is under the `DETA_API_KEY` environment variable. This should be added as a header to your http request under `X-API-Key`.

Here's how you'd make a request to a second Micro (on the path `/second-micro`) within a Space app, using Python:

```python
import os

origin = f"https://{os.getenv('DETA_SPACE_APP_HOSTNAME')}"
api_key = os.getenv("DETA_API_KEY")
headers = {"x-api-key": api_key}

res = requests.get("/second-micro", headers=headers)
```

> ⚠️ Be careful with your API Key. If you expose it, you risk compromising your Space app.

You can read more about the other environment variables available to your Micros [here](/docs/en/build/fundamentals/the-space-runtime/configuration#pre-set-variables).

## Technical Specifications

1. Every Micro you use gets its own sandboxed Linux VM.
2. Each Micro has a key and secret keys set in the environment, these are specific to your Micro and not the Deta system. Make sure to not share them to keep your own data safe.
3. A Micro has an execution timeout of 20s. 
4. 512 MB of RAM is provisioned for *each* execution.
5. Read-only file system. **Only `/tmp` can be written to**. It has a 512 MB storage limit.
6. Invocations have an execution processes/threads limit of 1024.
7. HTTP Payload size limit is 5.5 MB.

## Important Notes for Micros

1. Micros automatically respond to your incoming requests and go to sleep when there's nothing to do. You do not have to manage their lifecycle manually.
2. You (and only you) have access to the VM, which means there's no SSH access.
3. You are supposed to see the VM filesystem, it's not a security vulnerability.
4. We don't believe that Micros will work well with RDMBS like PostgreSQL and MySQL unless you use a pool manager.
5. Micros only support read-only SQLite, which you could deploy with your code.
6. The total upload size of your source code and assets for a single Micro is limited to 250 MB.
7. Dependencies (pip, npm, etc) also can't exceed a combined size of 250MB.
8. For unknown reasons, Google and Firebase packages for Python do not install successfully on Micros.
9. Currently, all requests received by Micros do not contain the client IP addresses. This makes most rate-limiting logic and other IP-dependant logic not work on Micros. But there is a workaround if you are using Cloudflare (link).
10. Websockets and long-running processes do not work on Micros. (examples: socket.io or Discord bots won't work).
11. Features like [Background Tasks](https://www.starlette.io/background/) and [Startup/Shutdown Events](https://www.starlette.io/events/) will currently not work as expected on Micros.