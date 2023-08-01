---
title: Intro To Space Apps
layout: "@layouts/DocsPageLayout.astro"
---

![intro-1](/docs_assets/use/space-apps-headline.png)

Space apps are web applications. You likely already use many web applications — some examples are ChatGPT, Figma, and Google Docs. When you use these web applications, you interact with computers on the internet controlled by the companies that provide these apps.

Space apps are different. They still give you all the powers of the internet, but they're personal. The “cloud computer” that they run on is controlled by you.

## That's pretty abstract. What are they really?

![app-anatomy](/docs_assets/build/app-anatomy.svg)

A Space app is a “package” of [runnable code](/docs/en/build/fundamentals/the-space-runtime) connected to a [reservoir of data](/docs/en/use/your-data/collections). The code runs and the data lives in your Space, isolated from all other users who may use the same Space app.

An individual Space app has a unique [Built-In Domain](/docs/en/use/space-apps/domains#built-in-domains), but you can also add your own [Custom Domain](/docs/en/use/space-apps/domains#custom-domains). By default, access to the app through these domains is private and exclusive to you. However, Space apps can open their doors to the world. You can host a [public website](/docs/en/build/guides/public-site), or [APIs accessible through keys](/docs/en/use/space-apps/using-apps#api-keys). Moreover, Space apps can execute tasks at predetermined times, known as [Scheduled Actions](/docs/en/use/space-apps/actions).

On Space, your data is yours, which enables greater versatility compared to traditional web apps. You can explore and edit it using the built-in user interfaces for data: [Base UI](/docs/en/use/your-data/guis#base-ui) and [Drive UI](/docs/en/use/your-data/guis#drive-ui). Extend and interact with it programmatically using [Data Keys](/docs/en/use/your-data/collections#data-keys) alongside the [Deta SDKs](/docs/en/build/reference/sdk/about) or [HTTP APIs](/docs/en/build/reference/http-api/about). Or export it if you want to use it elsewhere, or eject from Space at any time.

## What can Space apps do?

![discovery](/docs_assets/use/discovery-headline.png)

There are already many Space applications that do all sorts of things. There's a personal bookmark manager, [called WebCrate](https://deta.space/discovery/@maxs1/webcrate). There's an alternative to ChatGPT that stores your conversations in your personal cloud, [called Golem](https://deta.space/discovery/@henrycunh/golem). And a solution where you can receive, store and manage events from around the web, [called PingBack](https://deta.space/discovery/@maximilianheidenreich/pingback). 

There's a [box for all kinds of personal files](https://deta.space/discovery/@gyrooo/filebox). [A drawing application](https://deta.space/discovery/@deta/method-draw). [A personal CMS](https://deta.space/discovery/@sampoder/berowra-coy). These are just a few apps built by an active and growing developer community creating new apps on Deta Discovery every day. 

Read more about Discovery, Deta's public library of personal cloud software, [here](/docs/en/use/space-apps/discovery). Or find an app [on Discovery](https://deta.space/discovery) and make it yours today.

## What else can they do?

![discovery](/docs_assets/use/interop-headline.png)

There is also something that Space apps have, that traditional web apps don't. They reside in one location where they can easily interact, integrating in ways that would otherwise be difficult, or outright impossible.

There are Space apps that are already scratching the surface of these possibilities today. You can [use a personal search enginer, Surfer](https://deta.space/discovery/@sofa/surfer-uwm), to search the web for images within a photo app, [called Black Hole](https://deta.space/discovery/@mikhailsdv/black_hole-3kf). Symmetrically, you can save images from Surfer to Black Hole. You can create websites from your [Minima notes](https://deta.space/discovery/@maxs1/minima) in an app [called Port](https://deta.space/discovery/@maxs1/spaceport). And we think these examples are just the beginning of what's to come for Space apps interacting.

## How can I use them?

![component](/docs_assets/build/intro-components.png)

For many Space apps, you can use them just like other web applications, using your web browser. But because they're yours, you can interact with the application and data in powerful new ways. Read more [here](/docs/en/use/space-apps/using-apps).

## I'm a developer, how can I build on Space?

![builder](/docs_assets/build/builder-headline.png)

On Space, developers are first class citizens. All apps are extendable and their data is programmable, even if their source code isn't open. If you have an idea for something that doesn't exist yet, you can build it.

Read more about developing for Space in the [Builder Manual](/docs/en/build/fundamentals/development/builder).
