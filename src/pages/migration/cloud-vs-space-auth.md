---
title: Cloud vs Space Auth
position: 3
layout: "@docs"
---

Deta Space offers a more comprehensive authentication system compared to Deta Cloud, granting developers more control.

In this guide, we will explore the differences between the authentication systems of Deta Space and Deta Cloud. We will also walk you through how to configure Space authentication to meet the specific needs of your app. Whether you’re making the transition from Deta Cloud or seeking to configure the authentication for your Space app, this guide will provide you with all the information you need.

> ⚠️ **Deta Cloud support will end on May 1, 2023.**
>

## Authentication in Deta Cloud

In Deta Cloud, all Micros are publicly accessible by default, meaning every endpoint on your server is open for anyone to access.

To secure your app, you have to manually activate authentication with the command `deta auth enable`. After that, you can generate and use API keys for secure access to your micro from non-browser clients.

## Space - Authentication by Default

Deta Space takes a different approach by securing all apps with authentication by default. If an attempt is made to access these applications from outside the Space account, the user will be redirected to the login page, indicating that authentication is required to access the endpoints.

This feature comes included with Space and there is no need to write any additional code for authentication. The default authentication enhances the security of the apps deployed on Space by restricting access to only authorized users and protecting against unauthorized access and potential security threats. However, as a developer, you have the option to enable fine-grained access control using `public_routes` or `api_keys` in [Spacefile](https://deta.space/docs/en/reference/spacefile#whats-the-spacefile). This approach ensures that the app remains secure while allowing for controlled access.

Let’s go through an example.

## Auth on Deta Space

The following code represents a simple Node.js Express server running on Data Space:

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

The Spacefile for this app is given below:

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

After deploying this to Space using the `space push` command, you can access the endpoints while being logged into your Space account in the browser. If you try to access the endpoints from outside your Space account, you will be redirected to the login page, as Space’s authentication system is protecting this app.


To learn more about deploying your Apps and APIs to Space, you can refer to this [guide](/migration/deploy-app-or-api).


What if we want to enable more fine-grained access to other clients or the public? Let’s take a look at two methods: **Public Routes** and **API Keys**.

## Public Routes

If you want to make parts of your app or the entire app publicly accessible, you can do so on Deta Space using **Public Routes**. This feature provides fine-grained control over what’s public while still maintaining the security of your app for things that should be kept private.

You can use the Spacefile to specify which routes within your micro should be publicly accessible without the need for authentication. This way, you can make specific routes public while still keeping sensitive routes secure. To do so, simply specify the desired routes in the `public_routes` option in the Spacefile for the relevant micro. This allows you to make specific routes publicly accessible while still maintaining the security of sensitive routes in your app.

Here's the updated Spacefile from the previous example, now including the `public_routes` preset:

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

To learn more about public routes, you can refer to the related information available [here](/docs/en/basics/micros#public-routes).

## API Keys

API keys allow you to give authorized users access to private routes within a Micro in your app. By generating unique API keys, users can include them as an `X-Space-App-Key` header in their requests, granting them access to the specified routes.

To enable API keys, enable the `api_keys` preset in the Spacefile for the relevant Micros in your app. This way, you can control access to private routes within your app and ensure that only authorized users have access.

To see how the `api_keys` preset works, let's enable it for the Express micro in the previous example using the `presets` field:

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

After deploying the app with API keys enabled with `space push`, you can generate and use API keys with your Builder instance with a few simple steps:

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