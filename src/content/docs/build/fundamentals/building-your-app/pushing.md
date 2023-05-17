---
title: Pushing to Space
position: 4
layout: "@layouts/DocsPageLayout.astro"
---

If you have not setup or run your app locally yet checkout the New App Guide, Working with Projects, and Local Development pages.

Once you are satisfied with your app’s code in your development environment, you can run it in on the internet by “pushing” it to Deta Space.

Use the Space CLI command `space push` to do so:

```
space push
```

The `space push` command validates that your `Spacefile` is correct, then package and upload all the necessary files to Space’s Build Pipeline. You will receive a stream of logs to your local terminal during the whole process, to keep you informed and help debug any issues. You can use an optional flag if you would not like to receive the stream of logs: `space push --skip-logs`.

## The Space Build Pipeline

The Space Build Pipeline is an isolated cloud environment that takes your source code and packages it into a runnable app for Deta Space. It runs on X Linux and you can pass specific commands for the Build Pipeline to run before packaging individual Micros, [via the `commands` parameter in your `Spacefile`](https://deta.space/docs/en/reference/spacefile#commands). Each build is allocated X GB of RAM.

Once the build pipeline completes, it will result in a **Revision** being created. A Revision is an installable and runnable package of your app — it includes everything that is needed to run your app on Space. After your new Revision is created, it will be automatically installed on your Project’s Builder Instance.

You can use `space push --open` if you would like to push and directly open your Builder Instance in the browser after your new Revision has been installed to it.

## Viewing Builder Events

You can get an overview of events in the your app’s pipeline — Builds, Revisions, and Releases — from your Project’s “**Overview**” tab in Builder in the **Events** console. Clicking a specific event type will filter for that event.

Events are color coded:

- green indicates a successful event
- yellow indicates in an in progress event
- red indicates a failed event

![Screen Shot 2023-04-26 at 14.14.02.png](Pushing%20to%20Space%20695a21c330ad4c6a85494bb71f85e030/Screen_Shot_2023-04-26_at_14.14.02.png)

After you push to Space, you can test and use your app with your Builder Instance.