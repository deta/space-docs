---
title: Pushing
layout: "@layouts/DocsPageLayout.astro"
---

If you have yet not setup or run your app locally checkout the [New App Guide](/docs/en/build/new-apps), [Working with Projects](/docs/en/build/fundamentals/development/projects), and [Local Development](/docs/en/build/fundamentals/development/local-development) pages.

Once you are satisfied with your app in your development environment, you can run it in on the internet by “pushing” it to Deta Space. Use the Space CLI command `space push` to do so:

```
space push
```

The `space push` command validates that your `Spacefile` is correct, then packages and uploads all the necessary files to Space’s Build Pipeline.

> You will receive a stream of logs to your local terminal during the whole process, to keep you informed and help debug any issues. You can use an optional flag if you would not like to receive the stream of logs: `space push --skip-logs`.

## The Space Build Pipeline

The Space Build Pipeline is an isolated cloud environment that takes your source code and packages it into a runnable app for Deta Space. It runs on Linux — you can pass specific commands for the Build Pipeline to run before packaging individual [Micros](/docs/en/build/fundamentals/the-space-runtime/micros), [via the `commands` parameter in your `Spacefile`](/docs/en/build/reference/spacefile#commands). Each build is allocated X MB of RAM.

## Revisions

Once the build pipeline completes, it will result in a **Revision** being created. A revision is an installable and runnable package of your app. Revisions are immutable, and you can have multiple revisions for a single project. After your new revision is created, it will be automatically installed to your project’s [Builder Instance](/docs/en/build/fundamentals/development/builder-instance). You can use revisions in the Builder Instance to test and use your app on Space. But revisions of your app can also be [published to the world](/docs/en/publish/intro).

> You can use `space push --open` if you would like to push and directly open your Builder Instance in the browser after your new revision has been installed to it.

## Viewing Builder Events

You can get an overview of events in the your app’s pipeline — Builds, Revisions, and Releases — from your Project’s “**Overview**” tab in Builder in the **Events** console. Clicking a specific event type will filter for that event.

Events are color coded:
- green indicates a successful event
- yellow indicates in an in progress event
- red indicates a failed event

![pushing-1](/docs_assets/build/pushing-1.png)

After you push to Space, you can test and use your app with your [Builder Instance](/docs/en/build/fundamentals/development/builder-instance).