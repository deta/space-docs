---
title: Intro to Space Apps
section: Build
position: 0
layout: "@docs"
---

A Space app is different from a normal web app. Instead of one central app that serves many users, each user on Space will get their own personal copy of an app, in their own personal cloud. This is a simple but powerful difference that removes much of the complexity in building and distributing apps on the internet. It also pushes the boundaries of what a web app is, and what it can do.

IMAGE

As a developer building apps for Space, you get a lot out of the box:

- a simple authentication model that “just works”
- support for your favorite programming languages & frameworks
- a suite of included services, from storing data to talking with AI models

With these tools, you should find it easy to build all sorts of internet experiences for yourself — from simple websites to full stack applications that tie into the latest advances in AI. Once you have, it’s even easier to publish your creation to almost anyone else in the world.

## Authentication

IMAGE EARLIER SHOULD DO THE WORK, ELSE NEW IMAGE

On Space, apps and their data are private by default. As a user, you’re the only person who can access your apps and the data they store to your Space. They’re not shared with the app developer or other users of the same app. 

As a developer, authentication is meant to “just work”. You don’t have to think much about writing auth code or separating data between users. You can build assuming that you’re the only (already authenticated) user and Deta Auth will layer extra features on top. Finally, although privacy is the default, you can easily build apps that have public facing features or data, like a website. 

[Learn more about Authentication on Space](/docs/en/build/fundamentals/the-space-runtime/authentication).

## Space’s Building Blocks

You can craft individual applications on Deta Space using different building blocks that work together. Below are the most important ones.

IMAGE OF COMPONENTS: MICROS, DATA (BASE & DRIVE) 

### Computing with Micros

The code you write for your Space app runs on [Micros](/docs/en/build/fundamentals/the-space-runtime/micros). A Micro is a lightweight compute runtime capable of running many different programming languages and frameworks. They can be executed by different triggers — like HTTP (Micros come with a default endpoint) or Scheduled Actions. 

To build a single app you can combine up to 5 different Micros — for example a static Micro for a frontend with a Python Micro for your backend. It is completely up to you and the requirements of your app.

Take a look at our [Quick Starters](/docs/en/build/quick-starts) on instructions on how to run your favorite programming language or framework. 

[Learn more about Micros](/docs/en/build/fundamentals/the-space-runtime/micros).

### Storing and Retrieving Data

You may want your app to persist data, in addition to running code. Each app on Space is connected to a [Collection](/docs/en/build/fundamentals/data-storage#collections) of data. A Collection can host structured text in a database, called [Deta Base](/docs/en/build/fundamentals/data-storage#deta-base), and files in a store, called [Deta Drive](/docs/en/build/fundamentals/data-storage#deta-drive). The data in a Collection is shared between every Micro in your app.

Base and Drive are designed to be both simple and powerful. Neither requires any setup — a database or file store comes into existence as soon as you write to one. To write to a Base or a Drive, use the SDKs we’ve built, or their HTTP APIs. As we mentioned, you don’t need to think about authentication or data separation as you build an app for others.

One final note: data doesn’t need to be connected to a specific app. You can also create and use “headless” Collections, if you want to store and use data without Micros. 

[Learn more about storing data](/docs/en/build/fundamentals/data-storage).

## **Resource Limits**

As a developer of a traditional web app, paying for and managing cloud resources that power your app is the norm. With Deta Space and the personal cloud, things are different. Because resources live with users, you don’t have to manage or pay for any resources — beyond your own. 

For a single Space app, you can use up to five Micros and an unlimited number of Bases and Drives. None of these resources require setup. Micros can be defined in your [Spacefile](/docs/en/build/reference/spacefile), while Bases and Drives can be created by your app during runtime.

[Learn more about the Space Runtime](/docs/en/build/fundamentals/the-space-runtime/about).

## Developing Your App

IMAGE 

You can use a few tools that work together to create Space apps. You build, test, and publish apps from a [Project](/docs/en/build/fundamentals/development/projects), which are created through a system application called [Builder](/docs/en/build/fundamentals/development/builder). [The Space CLI](/docs/en/build/fundamentals/space-cli) connects your development environment to your Project, while also offering tools to emulate Space locally. 

Your Project also has a [Builder Instance](/docs/en/build/fundamentals/development/local-development): a live and functional copy of your app in Deta Space. This instance gets continuously updated with changes as soon as you push them with the CLI. You can use this Builder Instance to test and refine your app, but you could also use it for yourself in production.

## Releasing Your App

IMAGE GLOBAL SCALE, 5 EDGES, ETC

On Deta Space, apps you build are one step away from almost anyone in the world with an internet connection. You can reach them by **Publishing** your app from your Project to different audiences. A published app is available for others’ to use, in their own personal clouds, across five global edge locations that Space offers.

[Learn more about releasing your app](/docs/en/publish).