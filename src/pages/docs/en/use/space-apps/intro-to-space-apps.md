---
title: Intro to Space Apps
position: 1
layout: "@docs"
---

## What are Space apps?

IMAGE

Space apps are web applications. You likely already use many web applications — some examples are ChatGPT, Figma, and Google Docs. When you use these web applications, you interact with computers on the internet controlled by the companies that provide these apps.

Space apps are different. They still give you all the powers of the internet, but they’re personal. The “cloud computer” that they run on is controlled by you.

## That’s pretty abstract. What are they really?

IMAGE OF ARCHITECTURE (like below but for conceptual. Space app, with collection, domain, api keys, data keys etc)

![intro-1](/public/docs-assets/use/intro-1.png)

A Space app is a “package” of runnable code connected to a reservoir of data. The code runs and the data lives in your Space, isolated from all other users who may use the same Space app.

An individual Space app has a unique Built-In Domain, but you can also add your own Custom Domain. By default, access to the app through these domains is private and exclusive to you. However, Space apps can open their doors to the world. You can host a public website, or APIs accessible through keys. Moreover, Space apps can execute tasks at predetermined times, known as Scheduled Actions.

On Space, your data is yours, which enables greater versatility compared to traditional web apps. You can explore and edit it using the built-in user interfaces for data: **Base UI** and **Drive UI**. Extend and interact with it programmatically using **Data Keys** alongside the **Deta SDKs** or **HTTP APIs**. Or export it if you want to use it elsewhere, or eject from Space at any time. 

## What can Space apps do?

IMAGE OF DISCOVERY, LOTS OF APPS

There are already many Space applications that do all sorts of things. There’s a personal bookmark manager, [called WebCrate](https://deta.space/discovery/@maxs1/webcrate). There’s an alternative to ChatGPT that stores your conversations in your personal cloud, [called Golem](https://deta.space/discovery/@henrycunh/golem). And a solution where you can receive, store and manage events from around the web, [called PingBack](https://deta.space/discovery/@maximilianheidenreich/pingback). There’s a [box for all kinds of personal files.](https://deta.space/discovery/@gyrooo/filebox) [A drawing application](https://deta.space/discovery/@deta/method-draw). [A personal CMS](https://deta.space/discovery/@sampoder/berowra-coy). [And a whole lot more](https://deta.space/discovery). These are all built by an active and growing developer community creating new apps every day. 

## What else can they do?

IMAGE OF INTEROP

There is also something that Space apps have, that traditional web apps don’t. They reside in one location where they can easily interact, integrating in ways that would otherwise be difficult, or outright impossible. 

There are Space apps that are already scratching the surface of these possibilities today. You can [use a personal search enginer, Surfer](https://deta.space/discovery/@sofa/surfer-uwm), to search the web for images within a photo app, [called Black Hole](https://deta.space/discovery/@mikhailsdv/black_hole-3kf). Symmetrically, you can save images from Surfer to Black Hole. You can create websites from your [Minima notes](https://deta.space/discovery/@maxs1/minima) in an app [called Port](https://deta.space/discovery/@maxs1/spaceport). And we think these examples are just the beginning of what’s to come for Space apps interacting.

## How do I find Space apps?

IMAGE OF DISCOVERY LOGO

[You can find and install Space apps on Discovery](https://deta.space/discovery), Deta’s public library of personal cloud software.

Read more about Discovery here.

## I’m a developer, how can I build on Space?

IMAGE OF BUILDER

On Space, developers are first class citizens. All apps are extendable and their data is programmable, even if their source code isn’t open. If you have an idea for something that doesn’t exist yet, you can build it.

Read more about developing for Space in the Build Manual.