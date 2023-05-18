---
title: Authentication
position: 4
layout: "@docs"
---

## Private by Default

IMAGE 

On Space, apps are private by default. This experience is powered by the personal cloud model.  Traditional internet applications have multiple users sharing cloud resources — like a  a server and a database — with authentication code mediating the two. On the personal cloud, each user gets their own independent instance of an app — including servers, databases and filestores. Read more about the personal cloud here.

If you are building an app that needs some or all parts to be public, like a website, you can use [Public Routes](/docs/en/build/fundamentals/the-space-runtime/authentication#public-micros-and-routes) to make specific routes or entire Micros public. If you need to access a protected app outside of the browser you can use [API Keys](/docs/en/build/fundamentals/the-space-runtime/authentication#api-keys) for authorization. If you want to let others use your entire app, you can [publish it](/docs/en/publish/intro).

### The User Perspective

As a user, you’re the only person who can access your apps, which are all available on [unique, personal, urls](/docs/en/use/space-apps/domains). They all sit behind Deta Auth, meaning you need to be authenticated to use them. If you’re using them through a browser, that means logging in. 

Your apps may also store data to your personal cloud. This data is also meant for you — it’s not accessible to the application developer, nor is it shared with other users of the same app.

### The Developer Perspective

As a developer, authentication should “just work”. You don’t have to think much about  different users or their data separation. Your (lack of) code will reflect this — you can build assuming that you’re the only (already authenticated) user. On top of this, you get numerous extras for free, like built in API keys, SSL and custom domains for your app.  Finally, although privacy is the default, you can easily build apps that have public facing features or data, like a website. 

## Public Micros and Routes

If you want to turn off Deta Auth for parts of your app, making these parts publicly available, you can either make [an entire Micro](/docs/en/build/fundamentals/the-space-runtime/micros) public, or specify which routes of your app should be public. This is how you would, for example, host a public website or a blog on Deta Space.

### Public Micros

To make an entire Micro public, use the `public` keyword under the desired Micro in your app’s `Spacefile`:

```yaml
micros:
  - name: backend
    src: backend
    engine: python3.9
    public: true
		path: api
```

This will make every route that the given Micro serves public, in the above example every route on your app that starts with `/api`.

### Public Routes

You can also control turn off auth at an individual route level for any Micro with the `public_routes` keyword in your app’s `Spacefile`:

```yaml
micros:
  - name: backend
    src: backend
    engine: python3.9
    public_routes:
      - "/test" # exact match
      - "/public/*" # wildcards
      - "/api/*/docs" # wildcards can be placed anywhere
```

With `public_routes` you can either match a route exactly, or use a wildcard (`*`) to match anything after it. The paths specified are *relative* to a given Micro's root. This means you do not need to specify a Micro's own path as part of its own `public_routes`. 

For example, if `/api` is served by a secondary (backend) Micro, and you want to make the route `/api/public` public, then you only need to specify `/public` as a public route for this Micro:

```yaml
micros:
  - name: frontend
    src: frontend
    engine: static
    primary: true

  - name: backend
    src: backend
    path: api
    engine: python3.9
    public_routes:
    - "/public" # This Micro is served under `/api` so if we want to make `/api/public` available to the outside we only need to specify `/public`
```

Requests made to your Micro matching any of the routes defined in `public_routes` will bypass Space's authentication entirely.

## API Keys

You can also access to Micros programmatically or through non-browser clients (e.g. using other servers, shell scripts, or REST clients) with **API Keys**. To enable **API Keys** as a valid form of authorization for any Micro, use the `api_keys` preset for your Micro in your app’s `Spacefile`:

```
micros:
  - name: api
    src: ./api/
    engine: python3.9
    presets:
      api_keys: true

```

If enabled, users of your app can generate **API Keys** in their app’s Settings and use them to authorize requests made to otherwise private routes of a Micro. Generated keys need to be provided in the HTTP header `X-Space-App-Key` and only work with Micros that have the preset `api_keys` enabled. Public routes have a higher preference than API keys, if there are public routes specified, these will always be public.

> Note: If you enable API keys you should show clearly in the app that API Keys can be used and ideally have clear documentation on which endpoints of your app work with API Key authorization.
> 

Read more about [API Keys in the User Manual](/docs/en/use/space-apps/using-apps#api-keys).