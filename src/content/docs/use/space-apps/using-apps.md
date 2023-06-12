---
title: Using Space Apps
layout: "@layouts/DocsPageLayout.astro"
---

Once you’ve installed a Space app from Deta Discovery, you should see it on your Canvas. This is your own personal copy of the app.

![using-apps-1](/docs_assets/use/using-apps-1.png)

Clicking on the app will open it in a new tab.

![using-apps-2](/docs_assets/use/using-apps-2.png)

You can start using the copy of the app as you would any other app, following the instructions it provides.

A few notes:

- your copy of the app will live on its own [Built-In Domain](/docs/en/use/space-apps/domains#built-in-domain), which is unique from every other copy of the app being used.
- all the data your app stores to your Space is in your hands — check out the [Collections page](/docs/en/use/your-data/collections) for more.

## Private and Public Routes

By default, apps on Space are private. This means you have to be logged in to access the app, or certain features it offers.

But some apps have **routes** that are public (or the entire app is public). A route is a unique string of characters on your app’s domain, starting with the first `/`. For example, for the domain `https://parallel-futures-h78bhas.deta.app/start`, the route is `/start`.

Apps themselves should indicate if a given view is public and shareable within the app.

![using-apps-3](/docs_assets/use/using-apps-3.png)

But if they don’t, and if you aren’t sure if something you are looking at is shareable, you can always open it in an incognito tab. If something is not meant to be shared, it will ask you to log in. This means it’s only for you.

![using-apps-4](/docs_assets/use/using-apps-4.png)

## Updates

Developers of Space apps may periodically create and release new features. When this happens, for apps you installed, you will get a notification that an update is available.

<div style="display:flex; justify-content: center;"><img style="border-radius: 5px; width: 90%; max-width:300px;" src="/docs_assets/use/using-apps-5.png"/></div>

Clicking the notification will show you an update menu for the app, including release notes the developer provides, which describe what’s new.

![using-apps-6](/docs_assets/use/using-apps-6.png)

To install the update, click the **Install App Update** button. As a user, updates are opt in — you’re free to stay with the current version of your app. In the future, you’ll be able to roll your app back to previous versions.

## API Keys


> 💡 This is fairly technical feature, especially useful if you are also a developer.

API Keys authorize access to private routes of your app outside of the context of you logging in to your app in the browser. This can be useful for a number of purposes, for example:

- If you want to give one Space app access to functionalities of another Space app.
- If you want to access functionalities of a Space app from outside of Space — like another server somewhere or a script on your personal computer.

API Keys have to be explicitly enabled by the developer of an app to be used.

### Generating API Keys

You can generate API Keys from your [App's Settings](/docs/en/use/space-apps/settings#generating-keys).

### Using API Keys

To use an API Key, make an HTTP request to the route of your Space app you want to access with the following header:

```
"X-Space-App-Key": <api_key_here>
```

If the developer has enabled API Keys for the individual [Micro](/docs/en/build/fundamentals/the-space-runtime/micros) serving the route you are trying to access, you should get a response from the app. If not, you will get a `401 Unauthorized` response from Deta Space.