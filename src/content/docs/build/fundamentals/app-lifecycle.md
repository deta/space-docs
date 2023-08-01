---
title: App Life Cycle
layout: "@layouts/DocsPageLayout.astro"
---

As explained in the [Learn](/docs/en/learn) section of the documentation, apps built for a personal cloud are different from traditional web applications. As such, the steps you take to build, launch, and distribute them are different. This document will explain the **Life Cycle** of an app on Deta Space.

## Traditional Web Application Life Cycle

A traditional web application has three large stages in its life cycle — development, deployment, and operations.

### Development

When creating a new web app for an external audience, you need to first code the app. If you're updating an existing app with a new feature, you also have to code it. In either case, your code has to take many users into consideration, which means writing authentication code and thinking about data separation.

### Deployment

Once you decide to put your app or feature live, there is a lot of work you need to do to deploy it.

If it's a brand new app, you may need to:

- Create the production environment on a hosting provider and set up a server, domain, and SSL certificates.
- Configure your server, including software installation and security settings.
- Set up a production database, making sure to properly configure, secure, and scale it.

For new apps and existing apps with new features, you will need to:

- Deploy the application by transferring files and code to the server.
- Test and validate the application in the production environment.

### Operations

Once your application is live, there's more work you need to do to keep it operating smoothly. This operations work includes:

- Set up logging tools to track performance, resource usage, and errors.
- Monitor performance post-launch, and scale your setup as needed.
- Pay for this entire setup for all of your end users.

## Life Cycle of a Space App

On Deta Space, the life cycle is different. There are two stages in building and releasing any Space App — Building and Publishing.

When you build for Space, you develop locally and test in a live instance of your app on Deta Space, called a Builder Instance. You can also use your Builder Instance if you don't want to share your app with the world.

When you publish an app from Space, you application can be used by just about anyone in the world with an internet connection. But there isn't any operations work required on your part. You also don't have to pay for the resources that others consume. This is unique to how the personal cloud works.

### Building

#### Development

![local-headline](/docs_assets/build/local-development-headline.png)

In the first stage of the Space App lifecycle, local development, the key concept is a [Project](/docs/en/build/buidling-your-app/projects), where you will manage development and publishing of an app. Projects live within the Space app [Builder](/docs/en/build/development/builder), which is available on your [Canvas](/docs/en/use/interface#canvas).

Space works with your preferred development environment, supporting [common languages and frameworks](/docs/en/build/quick-starts). The [Space CLI](/docs/en/build/space-cli) manages Project specifics locally, like secure connections to [Space's data storage services: Deta Base and Deta Drive](/docs/en/build/data-storage).

Lastly, you can assume you're the only user when developing; you won't have to think about authentication or data separation. This is powered by [Space's unique authentication model](/docs/en/build/the-space-runtime/authentication).

#### Revisions and the Builder Instance

![builder-instance-headline](/docs_assets/build/builder-instance-headline.png)

Once you're happy with your app in development, push your app to Deta Space using the CLI command `space push`. The [Space Build Pipeline](/docs/en/build/fundamentals/development/pushing#the-space-build-pipeline) creates a Revision, which is a runnable package of your app compatible with the Space Runtime.

This Revision is installed on your [Builder Instance](/docs/en/build/fundamentals/development/local-development), a live version of your app in Space connected to your Project and its data. Builder Instances are a fully featured Space app, supporting everything Space offers: [Custom Domains](/docs/en/use/space-apps/domains#custom-domains), [API Keys](/docs/en/build/fundamentals/the-space-runtime/authentication#api-keys), [public/private routes](/docs/en/build/fundamentals/the-space-runtime/authentication#public-mircos-and-routes), [Scheduled Actions](/docs/en/build/fundamentals/actions) and more.

The Builder Instance lets you test your app in Space before releasing it to a broader audience. If building for personal use, this may be your app's final stage. You can use your Builder Instance, continuously developing for and updating it in an iterative loop.

To share your app globally, simply publish it.

### Publishing

![releasing-headline](/docs_assets/publish/releasing-headline.png)

If you've tested your app in your Builder Instance and want to share it with an external audience, you can [create a Release](/docs/en/use/publish/intro).

A release is a revision that anyone can install in their own personal cloud on Deta Space. What this means is that you can distribute your app to people around the world, but you don't need to think about the infrastructure necessary to run it.

If you want to share it with a limited audience, you can create an [Unlisted Release](/docs/en/use/publish/intro). Only people who you share the release link with will be able to install your app. If you want your app to be publicly discoverable, create a [Listed Release](/docs/en/use/publish/intro). You can find and install Listed Releases created by developers around the world on Deta Discovery.

### Updates

What if you want to add new features to an app others have already installed? Simply push your changes to Space and create a new Release. Users who have installed an earlier version of your app will get a notification to update to the newer Release. Updates are opt-in.
