---
title: Builder
layout: "@layouts/DocsPageLayout.astro"
---

![builder-headline](/docs-assets/build/builder-headline.png)

Builder is a System App that comes pre-installed in your Space. As a developer, you use it to create, develop, test, run, and publish your apps with Deta Space.

## Builder Projects

To get started building an app, you first need to create a [Project](/docs/en/build/fundamentals/development/projects) in Builder, using [the Space CLI](/docs/en/build/fundamentals/space-cli). As a developer, a Project lets you manage the full life cycle of a single app: it’s where you’ll build your app, test if it works on Space, and finally release it to the public.

Once you have a Project, you can start developing your app locally with support from the Space CLI. Your Projects have access to persistent [data storage](/docs/en/build/fundamentals/data-storage) with Deta Base and Deta Drive. The data you store is usable across the development life cycle, and can be viewed and managed in Builder.

Once your app is running locally, you can “push” it to Space which will create a new [Revision](/docs/en/build/fundamentals/development/pushing#revisions). A Revision represents a package of your entire app at a single point in time and includes everything that is needed to run your app on Space.

## The Builder Instance

![builder-instance](/docs-assets/build/builder-instance-headline.png)

After you push your app to Space, it will automatically install your Revision to your Project’s [Builder Instance](/docs/en/build/fundamentals/development/local-development). A Builder Instance is a fully functional copy of your app running in your own Space. This instance is accessible from your [Builder Project](/docs/en/build/fundamentals/development/local-development#from-builder) and also on your [Canvas](/docs/en/build/fundamentals/development/local-development#from-the-canvas), with the rest of your apps.

The Builder Instance is meant for you and is like any other Space app, feature-wise. But as a developer you can push code to it from any of your Revisions, and it shares data with your local development setup. You can use your Builder Instance for [development and testing](/docs/en/build/fundamentals/development/local-development#for-testing), or [in production](/docs/en/build/fundamentals/development/builder-instance#in-production) — it’s up to you.


## Publishing Your App

![releasing-headline](/docs-assets/publish/releasing-headline.png)

Once you have tested and refined your app, you can [Publish](/docs/en/publish/intro) a revision from Builder to the world, through a [Release](/docs/en/publish/releasing#releases). You can share a Release with just about anyone in the world who has an internet connection, to use in their own Space. Because of the personal cloud model, Deta Space can shorten the distance between “working cloud app” and “global cloud app” to a single command, or a few clicks.