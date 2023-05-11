---
title: Using Space Apps
layout: "@docs"
---

# Using Space Apps

Once you’ve installed a Space app from Deta Discovery, you should see it on your Canvas. This is your own personal copy of the app.

![Screen Shot 2023-04-06 at 21.49.00.png](Using%20Space%20Apps%203b698d1eb2754e1e93524f043f39adef/Screen_Shot_2023-04-06_at_21.49.00.png)

Clicking on the app will open it in a new tab.

![Screen Shot 2023-04-06 at 21.50.43.png](Using%20Space%20Apps%203b698d1eb2754e1e93524f043f39adef/Screen_Shot_2023-04-06_at_21.50.43.png)

You can start using the copy of the app as you would any other app, following the instructions it provides. 

A few notes:

- your copy of the app will live on its own built-in domain, which is unique from every other copy of the app being used.
- all the data your app stores to your Space is in your hands — check out the Collections page for more.

## Private and Public Routes

By default, apps on Space are private. This means you have to be logged in to access the app, or certain features it offers. 

But some apps have ************routes************ that are public (or the entire app is public). A route is a unique string of characters on your app’s domain, starting with the first `/`. For example, for the domain `https://parallel-futures-h78bhas.deta.app/start`, the route is `/start`.

Apps themselves should indicate if a given view is public and shareable within the app.

![Screen Shot 2023-04-28 at 23.05.16.png](Using%20Space%20Apps%203b698d1eb2754e1e93524f043f39adef/Screen_Shot_2023-04-28_at_23.05.16.png)

But if they don’t, and if you aren’t sure if something you are looking at is shareable, you can always open it in an incognito tab. If something is not meant to be shared, it will ask you to log in. This means it’s only for you.

![Screen Shot 2023-04-28 at 23.06.49.png](Using%20Space%20Apps%203b698d1eb2754e1e93524f043f39adef/Screen_Shot_2023-04-28_at_23.06.49.png)

## Updates

Developers of Space apps may periodically create and release new features. When this happens, for apps you installed, you will get a notification that an update is available.

![Screen Shot 2023-04-28 at 23.44.11.png](Using%20Space%20Apps%203b698d1eb2754e1e93524f043f39adef/Screen_Shot_2023-04-28_at_23.44.11.png)

Clicking the notification will show you an update menu for the app, including release notes the developer provides, which describe what’s new. 

![Screen Shot 2023-04-28 at 23.46.06.png](Using%20Space%20Apps%203b698d1eb2754e1e93524f043f39adef/Screen_Shot_2023-04-28_at_23.46.06.png)

To install the update, click the **************************************Install App Update************************************** button. As a user, updates are opt in — you’re free to stay with the current version of your app. In the future, you’ll be able to roll your app back to previous versions.

## API Keys

<aside>
💡 This is fairly technical feature.

</aside>

API Keys authorize access to private routes of your app outside of the context of *********you********* logging in to your app in the browser. This can be useful for a number of purposes, for example:

- If you want to give one Space app access to functionalities of another Space app.
- If you want to access functionalities of a Space app from outside of Space — like another server somewhere or a script on your personal computer.

API Keys have to be explicitly enabled by the developer of an app to be used.

### Generating API Keys

Read about generating API Keys in the App Settings.

### Using API Keys

To use an API Key, make an HTTP request to the route of your Space app you want to access with the following header:

```
"X-Space-App-Key": <api_key_here>
```

If the developer has enabled API Keys for the individual **********Micro********** serving the route you are trying to access, you should get a response from the app. If not, you will get a `401 Unauthorized` response from Deta Space.