---
title: "Personal goes progressive"
date: "26 Oct 2023"
layout: "@blogs"
description: "Space apps are now PWAs"
---

Two weeks ago, [we launched Space OS to the world](https://deta.space/blog/space-os), with the aim of making computing on the web more personal, powerful, and fun. While much of the focus was on the Horizon, Space OS has a lot to offer beyond the Horizon itself.

## Personal web applications

One of the things the team has been working very hard on with Space OS is the cloud infrastructure to power *personal web applications*. Personal web apps are different from traditional apps you may use on the web, like Figma, Google Docs, or ChatGPT. These applications all run on infrastructure “shared” by everyone that uses it — you and I both access Google Docs via the same url: [https://docs.google.com/](https://docs.google.com/). 
<div style="display:flex;flex-direction:column;width:100%;align-items:center;background:;padding-top:;padding-bottom:;border-radius:">
    <img src="/docs_assets/learn/public-cloud.svg" alt="Public Cloud" style="max-width: 50%; border-radius: 10px;">
    <div style="max-width: 60%; white-space: pre-wrap; word-break: break-word; caret-color: rgb(55, 53, 47); font-size: 14px; line-height: 1.4; color: var(--theme-text); padding-top: 7px; padding-bottom: 7px; padding-left: 2px;">Traditional web apps</div>
</div>
<br/>

In contrast, personal web applications run on dedicated, personal infrastructure in your own personal cloud computer. 

<div style="display:flex;flex-direction:column;width:100%;align-items:center;background:;padding-top:;padding-bottom:;border-radius:">
    <img src="/docs_assets/learn/personal-cloud.svg" alt="Personal Cloud" style="max-width: 50%; border-radius: 10px;">
    <div style="max-width: 60%; white-space: pre-wrap; word-break: break-word; caret-color: rgb(55, 53, 47); font-size: 14px; line-height: 1.4; color: var(--theme-text); padding-top: 7px; padding-bottom: 7px; padding-left: 2px;">Personal web apps</div>
</div>
<br/>

You can install your own copy of personal web apps, like you did years ago on your personal computer. This copy will continue to work, even if the developer removes the app. But unlike a few decades ago, the personal computer that runs these apps lives in the cloud, so your app is always available, when and where you need it to be.

<div style="display:flex;flex-direction:column;width:100%;align-items:center;background:;padding-top:;padding-bottom:;border-radius:">
    <img src="/docs_assets/build/app-anatomy.svg" alt="Base UI Screenshot" style="max-width: 60%; border-radius: 10px;">
</div>

The infrastructure we’ve built for personal web apps covers a gamut of additional features designed to put you in the driver’s seat — each app gets its [own domain](https://deta.space/docs/en/use/space-apps/domains#built-in-domains), and you can add your own [custom domains](https://deta.space/docs/en/use/space-apps/domains#custom-domains). The data these apps store all lives in sandboxed “[Collections](https://deta.space/docs/en/use/your-data/collections)”, which you can explore via [GUIs](https://deta.space/docs/en/use/your-data/guis) and build against and extend with the [Deta SDKs](https://deta.space/docs/en/build/reference/sdk) and [HTTP API](https://deta.space/docs/en/build/reference/http-api). You can also [backup, wipe and export it all](https://deta.space/blog/post-15). 

<div style="display: flex; justify-content: center; align-items: center;">
<img src="/docs_assets/use/data-guis-7.png" alt="Old Mobile Horizon" style="max-width: 45%; border-radius: 15px; padding-right: 30px;"  />
<img src="/docs_assets/use/data-guis-12.png" alt="Old Mobile Horizon" style="max-width: 40%; border-radius: 15px;"  />
</div>

Developers around the world have already built hundreds of personal web apps for everything from bookmarking to running intelligent experiments to live streaming, which [you can install into your own personal cloud computer today](https://deta.space/discovery). 

## Going progressive

<div style="display:flex;flex-direction:column;width:100%;align-items:center;background:;padding-top:;padding-bottom:;border-radius:">
    <img src="/blog_assets/pwas-headline.gif" alt="Base UI Screenshot" style="max-width: 40%; border-radius: 10px;">
</div>


When we launched Space OS and Horizon, the only way to access your personal apps on Space was to open your browser, log in to Space, enter Horizon and open the app (or visit an app’s url directly, if you remember it). This is restrictive, requiring you to leave the context you’re in, and to go through a new one. We believe the powers of Space and Space apps should meet you closer to where you already are, wherever that may be. Internally, the team calls this “Space Everywhere”. 

Today, we are taking the first step in direction “Space Everywhere” by automatically creating installable PWAs out of all of your Space apps (if they serve html). This means you can install almost any application from Space on your desktop, tablet, or phone (if they support PWAs).
 
<div style="display:flex;flex-direction:column;width:100%;align-items:center;background:;padding-top:;padding-bottom:;border-radius:">
    <img src="/blog_assets/pwas-launcher.png" alt="Base UI Screenshot" style="max-width: 40%; border-radius: 10px;">
</div>


### Installing a PWA

**Desktop**

To install a Space app as a PWA, simply open it and click the install button and the app will install on your device. 

<div style="display: flex; justify-content: center; align-items: center;">
<img src="/blog_assets/pwas-desktop-1.png" alt="PWAs Desktop" style="max-width: 45%; border-radius: 15px; padding-right: 30px;"  />
<img src="/blog_assets/pwas-desktop-2.png" alt="PWAs Desktop Two" style="max-width: 40%; border-radius: 5px;"  />
</div>

**Mobile: Android and iOS**

While visiting a Space app from Chrome, open Chrome’s context menu and click “Install App” to add it to your Android device. On iOS in Safari, click the “share” icon next to the app’s URL and then select “Add to Home Screen”.

<div style="display: flex; justify-content: center; align-items: center;">
<img src="/blog_assets/pwas-android.png" alt="PWAs Android" style="max-width: 40%; height: 275px; border-radius: 20px; margin-right: 40px;">
<img src="/blog_assets/pwas-ios.png" alt="PWAs iOS" style="max-width: 40%; height: 275px;border-radius: 10px;">
</div>


### Offline Support

This introduction of PWAs also includes basic, read-only, offline support. If you visit a page in a Space-native PWA, and then revisit the same page when you are offline, the page will continue to work. Currently this does not include updating any data or syncing, but is planned via integration with the [Deta Browser SDK](https://deta.space/blog/post-16).

##### Engineer’s note: what’s going on under the hood

Within the [Space Runtime](https://deta.space/docs/en/build/fundamentals/the-space-runtime) of each application on Space, we now include a “client runtime” for every application that uses html. If a Space application doesn’t already ship a manifest file, we add one, enabling it to be installed as a PWA. This manifest file includes a custom generated icon for the app, its name, description and some other information. Additionally, if the app doesn’t ship with a “service worker”, we add one to allow offline support. We’ve open sourced these aspects of the runtime; you can see what’s going on [here](https://github.com/deta/client-runtime/). 

Developers can currently opt-out of auto PWA-fication of Space apps via the [`auto_pwa`](/docs/en/build/reference/spacefile#auto_pwa) field in the Spacefile.

## Towards making personal apps more powerful

We see today’s release as a starting point not only for PWAs, but also in making Space apps more powerful, and bringing these powers to you, wherever you may already be. For developers it’s a chance to build web applications that can be used across devices and interfaces. This can be in the browser, on Horizon, or within and between apps and your “Space”. 

We’re working on new interfaces in this direction, what we call “immersive interoperability”. If you’re a developer interested in building the next generation of web applications, make sure to apply for developer access and the alpha of [SpaceKit 2 here](https://formate-1-j0779127.deta.app/f/spacekit-2).