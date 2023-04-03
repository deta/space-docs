---
title: Creating an App Icon
section: Basics
position: 6
layout: "@docs"
---
![Preview](/docs_assets/app_icon/icon.png)

## Make your app look good with a few tricks


The app icon is a crucial aspect for any Space App, as it influences its discoverability and overall perception. As the first visual element users encounter when browsing the Discovery Page, it can make or break a user's decision to download the app.

## Best Practices

Creating an effective app icon requires careful consideration of its display format, as it will be presented as a rectangle with a prominent rounded corner in the top-left (7x the size of a typical corner radius). To ensure optimal appearance, the icon should be designed as a full-bleed square image. Space applies a mask that seamlessly adapts the icon's corners to match the overall aesthetic.

An engaging and striking app icon can be achieved by incorporating a background of solid color or gradient with ample space around the centre. The centre should prominently feature the app's logo, which can be in 3D for added visual appeal. It is generally recommended to avoid using text in the icon, as it can make the icon appear cluttered and difficult to read.

The guidelines also include a safe zone where the logo should be placed to ensure it is always visible and not obscured by any elements like the top-left corner radius, app options menu in the bottom-right, or updates/notifications in the top-right.

![Safe Zone](/docs_assets/app_icon/guidelines.png)

This is the preferred and optimal size (512x512px). The centre place is where the logo should be, (196x196px).

![Size](/docs_assets/app_icon/size.png)

It is essential to avoid mimicking UI elements from your app in the design of your icon. Graphical images are usually preferred over photos as they tend to be more visually appealing and distinctive. Additionally, replicating first-party apps such as the Builder Icon is strictly prohibited, as it can cause confusion and may result in the removal of your app from the Discovery Page.

When selecting colors for the icon, it is important to ensure consistency with the overall design of the app to create a cohesive visual experience. Utilizing the same color scheme in both the icon and the app can aid users in easily identifying and remembering the app.

A well-chosen app name is short and memorable. This not only makes it easy for users to recall the app, but also ensures the name is clearly visible. A safe limit for text in the name is 10 characters, as longer names may be truncated depending on the letter width. Therefore, it is essential to keep the name concise.

We created an [Icon Tester](https://www.figma.com/community/file/1206563671424898764) for you to use in Figma. Use it to check if your icon is following the guidelines.

Here's a quick demo of how it works:
![Demo](/docs_assets/app_icon/demo.gif)

In order to enhance the Discovery App page, it is reccomened to extract the dominant color from the app icon and apply it as the theme color. This can be achieved by adding the following code snippet to the HTML document:

```html
<meta name="theme-color" content="#4285f4" />
```

This meta tag sets the browser theme color for the app, which is used by some browsers to customise the appearance of the browser UI elements, such as the address bar and the task switcher.
