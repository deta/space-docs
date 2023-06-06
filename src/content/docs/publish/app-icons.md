---
title: App Icons
layout: "@layouts/DocsPageLayout.astro"
---

![icons-headline](/docs-assets/publish/icons-headline.png)

Every app on Space includes an icon, presented as a rectangle with a rounded corner in the top-left (7x the size of a typical corner radius). You can also specify your own icon file for any app, if you do not, a randomly generated gradient will be created.

We recommend creating your own icon: it is a crucial aspect of any Space App. As the first visual element users encounter when browsing the Discovery Page, it can make or break a user’s decision to install the app. It also makes your app identifiable as users navigate their apps in the Canvas and through Teletype.

## Icon Specifications

The app icon is not just for marketing purposes in Deta Discovery, but it shows up with your app in Deta Space. So it’s a part of your app’s package in a **Revision** and needs to be specified in your app’s `Spacefile`:

```yaml
v: 0
icon: ./icon.png
```

The `icon` parameter points to a path in your source code relative to the root of your project. It needs to be in the same directory, or a subdirectory, of your `Spacefile`.

The icon must be a `PNG` or `WebP` file that’s exactly 512x512 pixels. It will uploaded during `space push` and included in your Revision.

## Best Practices

### General Guidelines

An engaging app icon can be achieved by incorporating a background of solid color or gradient with ample space around the center. The center should prominently feature the app’s logo, which can be in 3D for added visual appeal. It is generally recommended to avoid using text, mimicking UI elements from your app, or using photos. Graphical Images are suggested .

When selecting colors for the icon, it is recommended to ensure consistency with the overall design of your app to create a cohesive visual experience. Use a unified color scheme to help users easily identify the app.

With regards to your app’s name, it’s suggested to keep it short and memorable. This makes makes your app recognizable in the eyes of users, and ensures the name is clearly visible. A safe limit for text in the name is 10 characters.

Replicating any Deta specific names or designs, such as the Builder Icon, is strictly prohibited. This will cause confusion and will result in the removal of your app from Discovery.

### Technical Guidelines

To ensure optimal appearance, the icon should be designed as a full-bleed square image. Space applies a mask on top of an icon that adapts the icon’s corners to match the overall aesthetic of the system.

We recommend keeping the logo in a safe zone to ensure it is always visible and not obscured by any system elements: the top-left corner radius, the app options menu in the bottom-right, or notifications in the top-right.

<div style="display:flex; justify-content: center;"><img style="border-radius: 5px; width: 70%; max-width:500px;" src="/docs-assets/publish/icons-1.png"/></div>

This size of an icon is 512x512px. The safe zone where the logo should be is suggested at half the width and height of the icon — 196x196px.

<div style="display:flex; justify-content: center;"><img style="border-radius: 5px; width: 40%; max-width:300px;" src="/docs-assets/publish/icons-2.png"/></div>


In order to unify the Discovery page, your app, and the icon, it is recommended to extract the dominant color from the app icon and apply it as the theme color in your app and its Discovery page.

For your app, this can be achieved by adding the following code snippet to your index HTML document:

```
<meta name="theme-color" content="#4285f4" />
```

This tag sets the browser theme color for the app, which is used by some browsers to customize the appearance of the browser UI elements, such as the address bar and the task switcher.

You can set the theme of your [Discovery.md](/docs/en/publish/discovery-md) file with the same hex value.

### Icon Tester

We created an [Icon Tester](https://www.figma.com/community/file/1206563671424898764) for you to use in Figma. Use it to check if your icon is following the guidelines. Here’s a quick demo of how it works:

<div style="display:flex; justify-content: center;"><img style="border-radius: 5px; width: 90%; max-width:600px;" src="/docs-assets/publish/icons-3.gif"/></div>