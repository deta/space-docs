---
title: Comparing Auth
position: 3
layout: "@docs"
---

Deta Space offers a more comprehensive authentication system compared to Deta Cloud, granting developers more control, and powering the experience behind **build for yourself and see it run anywhere**.

In this guide, we will explore the differences between the auth systems of Deta Space and Deta Cloud. 

We will also walk you through how to configure Space auth to meet the specific needs of your app.

## Authentication in Deta Cloud

In Deta Cloud, all Micros are publicly accessible by default, meaning every endpoint on your server is open for anyone to access.

To secure your app, you have to manually activate authentication with the command `deta auth enable`. After that, you can generate and use API keys for secure access to your micro from non-browser clients.

## Space - Authentication by Default

Deta Space takes a different approach by securing all apps with authentication by default. Only the user who owns an app instance can access the app,when they are authenticated on Space. If an attempt is made to access these applications from outside this context, the requestor will be redirected to the login page.

When building a Space app, auth comes for free: you don't need to write any additional code. All you need to do is assume you're **building for yourself, as the only user**. Nonetheless, as a developer, you have the option to enable fine-grained access control using `public_routes` or `api_keys` in [Spacefile](https://deta.space/docs/en/reference/spacefile#whats-the-spacefile). This approach ensures that the app remains secure while allowing for controlled access.

> ℹ️ The [Spacefile](https://deta.space/docs/en/reference/spacefile#whats-the-spacefile) is a file that tells Deta Space how to run your app. it includes configuratios for things like auth.

Let’s go through an example of a Space Developer, let's call her Daniela, building a Space App called **Ping Pong**.

The below code represents **Ping Pong** as a simple Node.js Express server.

```jsx
import express from 'express';
const app = express()

app.get('/', (req, res) => {
  res.send('Hello world using Express.')
})

app.get('/ping', (req, res) => {
	res.send('pong')
})

const port = parseInt(process.env.PORT) || 8080
app.listen(port, () => {
  console.log(`Running on port ${port}`)
})
```

The Spacefile for **Ping Pong** is given below:

```yaml
# Spacefile Docs: https://go.deta.dev/docs/spacefile/v0
v: 0
app_name: "SpaceAuth"
micros:
  - name: express
    src: ./src/express
    engine: nodejs16
    run: node index.js 
    primary: true
```

After deploying **Ping Pong** to Space using the `space push` command, Daniela could make it optionally available to other users on Space, so they can install their own copy.

For each copy of **Ping Pong**, the `/` and `/ping` routes will only be accessible to the user who owns that specific copy. And they've got to be logged in to Deta Space. If they're not, they'll be directed to the login page. And if the wrong person logs in and tries to access a copy of **Ping Pong**, they will be given an `Unauthorized` response, as it isn't their app to access.

Nonetheless, what if the **Ping Pong** developer wants to enable more fine-grained access to the public, or to non-browser clients? Let’s take a look at two methods: **Public Routes** and **API Keys**.

### Public Routes

If Daniela wants to make parts of **Ping Pong** (or the entire app) publicly accessible, she could do so on Deta Space using **Public Routes**. This feature provides fine-grained control over what’s public while still maintaining the security of an app for things that should be kept private.

Daniela can use the Spacefile to specify which routes within a Micro should be publicly accessible without the need for authentication. This way, Daniela can make specific routes public while still keeping sensitive routes secure. 

Here's the updated Spacefile from the previous example, now including Daniela's `public_routes` preset:

```yaml
# Spacefile Docs: https://go.deta.dev/docs/spacefile/v0
v: 0
app_name: "SpaceAuth"
micros:
  - name: express
    src: ./src/express
    engine: nodejs16
    run: node index.js
    primary: true
    public_routes:
      - "/ping"
```

After deploying with the updated Spacefile using `space push`, the `/ping` route on the Express server will be publicly accessible, while the root endpoint `/` will remain private and protected by authentication. 

> ⚠️ When `public_routes` are specified, they will always take precedence over enabled `api_keys` preset.

To learn more about public routes (including the use of powerful options like wildcards `*`), you can refer to the related information available [here](/docs/en/basics/micros#public-routes).

### API Keys

API keys allow Daniela to give authorized users access to private routes within a Micro of **Ping Pong**. By generating unique API keys, users can include them as an `X-Space-App-Key` header in their requests, granting them access to the specified routes.

To enable API keys, Daniela needs to enable the `api_keys` preset in the Spacefile for the relevant Micros.

To see how the `api_keys` preset works, Dabiela will need to enable it for the Express Micro in the previous example using the `presets` field:

```yaml
# Spacefile Docs: https://go.deta.dev/docs/spacefile/v0
v: 0
app_name: "SpaceAuth"
micros:
	- name: express
    src: ./src/express
    engine: nodejs16
    run: node index.js
    primary: true
    public_routes:
      - "/ping"
    presets:
      api_keys: true
```

After deploying the app with API keys enabled with `space push`, Daniela could generate and use API keys in her Builder Instance with a few simple steps:

1. Go to the Space canvas and click on the option (...) on the app instance
2. Click on Configuration.
3. Click on Create new API key.
4. Generate the key and copy it.

> ⚠️ It's important to note that the API key will only be shown once, so make sure to store it in a secure place. To use the API key, include it in the X-Space-App-Key HTTP header when making API requests.

Before adding API keys, both endpoints of the Express Micro would only resolve for requests made by the user of the app on Deta Space. However, with the `api_keys` preset enabled, a request made to the Express Server that includes the `X-Space-App-Key` HTTP header will resolve successfully, regardless of where it originates from.

> 💡 As a developer, it's important to clearly communicate the availability of API keys to app users and provide comprehensive documentation on which endpoints of the app support API key authentication. This helps ensure the security of your app while also providing convenient access.

To learn more about API keys, you can refer to the related information available [here](/docs/en/basics/micros#api-keys).

That’s it! You now know how Deta Space authentication works and how to configure it using the Spacefile.

Share with us what you have built, connect with the Deta team, seek answers to your questions, and hang out on our [community Discord](https://discord.com/invite/deta-827546555200438332) with fellow **Detonians!** We would love to have you.

Happy hacking!