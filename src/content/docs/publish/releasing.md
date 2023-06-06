---
title: Releasing your app
layout: "@layouts/DocsPageLayout.astro"
---

After you push your local changes to your [Builder Instance](/docs/en/build/fundamentals/development/builder-instance) using the Space CLI, you can turn your [revision](/docs/en/build/fundamentals/development/pushing#revisions) into an installable **release** by publishing your app.

There are two ways to publish your app:
1. Through the [Space CLI](#releasing-from-the-cli)
2. Through the [Builder UI](#releasing-from-the-builder-ui)


## Releases

To publish an app to Discovery, you need to create a **release**. A release is a copy others can use to install a personal copy of your app, in their Space. When they do so, they’ll be provisioned their own isolated resources to run the app.

Deta Space offers two types of releases:

1. **Unlisted Releases**
2. **Listed Releases**

An **unlisted release**  is only accessible via a link Deta gives you when you release your app.  Anyone you share the link with will be able to install this Release, but this link is not publicly discoverable.

A **listed release** is publicly discoverable from Deta Discovery’s homepage. Anyone who enters Discovery can find and install a listed application.

## Releasing from the CLI

To publish your app using the Space CLI, navigate to your local project. You can create a new Unlisted Release using the following command:

```bash
space release
```

If it is your first release for a given project, you will be asked to confirm that you want to create a release. The CLI will ask you to select which [revision](/docs/en/build/fundamentals/development/pushing#revisions) you want to release. By default, it will use the latest one. After confirming, watch your app take off — it is now installable on Deta Space to anyone with the release url 🎉

If you want to publish your app as a listed release on Deta Discovery you can use the `--listed` flag:

```bash
space release --listed
```


> It is recommended you add a [`Discovery.md`](/docs/en/publish/discovery-md) file locally before releasing. If you haven’t added one, you will also be asked to specify an app name and description.

### Release Notes and Options

For subsequent releases you can use the `--notes` argument to specify release notes that explain changes, like new features or bug fixes, that come with the release. These are shown to users when they update their app, as well on your app’s Discovery page under the **What’s New** section.

You can provide specific options when you release using the CLI (which [revision](/docs/en/build/fundamentals/development/pushing#revisions) to use, version tags, whether it’s listed or unlisted). Refer to the [CLI reference](/docs/en/build/reference/cli) for more info.

## Releasing from the Builder UI

You can create a release for your Project using [Builder](/docs/en/build/fundamentals/development/projects#projects-in-builder). From your Builder Project, go to the **Publish** tab and click the **New Release** button.

![releasing-1](/docs-assets/publish/releasing-1.png)

The page will give you a number of options. There is a toggle which controls whether the release should be a `listed` on Discovery, while there is a drop down for you to select the [revision](/docs/en/build/fundamentals/development/pushing#revisions) to use. There is also an input field that will let you create a version tag (a version tag is auto-generated if you leave it blank).

There are three tabs that offer more options to customize your **release**.

### Release Notes

You can enter release notes describing what's new, when you release your app. Basic markdown syntax is supported (images and html are not supported).

<div style="display:flex; justify-content: center;"><img style="border-radius: 5px; width: 90%; max-width:600px;" src="/docs-assets/publish/releasing-3.png"/></div>

The release notes are shown to everyone who installed an earlier copy of the app before they update it. They are also be displayed in the **What’s New** section of your app’s Discovery page.

<div style="display:flex; justify-content: center;"><img style="border-radius: 5px; width: 90%; max-width:600px;" src="/docs-assets/publish/releasing-2.png"/></div>

### App Info

![releasing-4](/docs-assets/publish/releasing-4.png)

You can edit the meta data of your app which will be shown on your app’s Discovery page. There are a number of available fields (all optional): name, description, homepage, Git repo, and theme color.

These fields mostly map to fields in the [Frontmatter section of the Discovery.md](/docs/en/publish/discovery-md#frontmatter) file.

| Parameter | Discovery.md Field |
| --- | --- |
| App Name | app_name |
| App Description | tagline |
| Homepage | homepage |
| Git Repository | git |
| Theme Color | theme |



### Discovery Page

![releasing-5](/docs-assets/publish/releasing-5.png)

This section lets you compose and preview the main content section of your Discovery page using a simplified Markdown (images, HTML and H1 tags are not supported). You can use it to describe what your app does in more detail, what makes it unique, and highlight its features and functionality. The ideal description is a concise, informative paragraph followed by a short list of main features.

The description has a limit of `4250` characters and is equivalent to the [main content section of the Discovery.md file](/docs/en/publish/discovery-md#markdown-content).

Once you are ready, click “**Launch to Space**” and watch your app take off — it is now installable on Deta Space 🎉

## Updates

A second core concept to publishing is **Updates**. If you add new features to your app after publishing it, you can publish a new release. Every user who installed the app will get a notification to update it to the latest release. Updates are opt-in by the user.

<div style="display:flex; justify-content: center;"><img style="border-radius: 5px; width: 50%; max-width:300px;" src="/docs-assets/publish/intro-1.png"/></div>

Currently, updates are only available for listed releases, but they are planned for unlisted releases.