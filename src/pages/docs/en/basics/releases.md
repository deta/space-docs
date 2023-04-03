---
title: Launching your app
section: Basics
position: 7
layout: "@docs"
---

On the personal cloud, apps are not *deployed* to be made available for others to be used, instead they are *released*. Once you create a "release" of your app, other people can install their own self-contained copy of your app in their own personal cloud.

Each release can either be *unlisted*, where only people with the link can install it, or *listed*, which makes a release available for anyone to discover and install with [Deta Discovery](/discovery). More on Discovery [below](/docs/en/basics/releases#discovery--app-pages).

## Creating releases

After you have [pushed changes](/docs/en/basics/revisions) to Space, you can turn a revision into an installable release.


### Releasing from the GUI

You can create a release for your project using [Builder](/docs/en/basics/projects#projects-in-builder).

Simply go to the "Develop" tab and click the "Create Release" button. The next page will let you select the [revision](/docs/en/basics/revisions) you would like to release and offer a version tag (this will be auto-generated if you leave it blank). After clicking next, you will be able to choose if your release should be `listed` on [Discovery](/discovery) or not and can optionally provide some [notes](#release-notes) for the release.

Once you are ready, click "Launch to Space". Then watch your app take off! Your app is now installable on Deta Space to anyone with the release url, which is provided on the following page.

### Releasing from the CLI

You can create a release using the [Space CLI](/docs/en/basics/cli). Simply use the following command:

```bash
space release
```

Pass the `--listed` argument to enable listing on [Discovery](/docs/en/basics/releases#discovery--app-pages).

Pass the `--notes` argument to add notes about the release (changes, features, etc). [More info below](#release-notes).

Then watch your app take off! Your app is now installable on Deta Space to anyone with the release url.

> You can provide specific options to your release (which revision to use, version tags, listed/unlisted) using specific options. See the cli reference for [`space release`](/docs/en/reference/cli#deta-release).

## Discovery & App Pages

Each release of your app is available for installation using [Discovery](/discovery) - Space's app marketplace.

![Screenshot of Discovery](/docs_assets/discovery.png)

There are two ways your app will be available on Discovery:

- **Unlisted**: If your app is *unlisted*, only people who have the link to your release will be able to view its page and install the app. This is the default behaviour when creating a release via the CLI or the UI.

- **Listed**: If your app is *listed*, it will be shown publicly on Discovery where other users can easily find and install it. To enable listing use the `--listed` argument in the CLI (`space release --listed`) or select "List on Discovery" when creating a release using Builder.

In both cases, your app will be available on its own page on Discovery.

Not only does your app's Discovery page allow users to install your app, it also gives you the opportunity to explain what your app does, how it is unique, and its features.

You can customize an app's Discovery page using a `Discovery.md` file, which gives you  a full Markdown description and options to specify things like an app title & tagline and links to a Git repository & homepage. More info on how to use the `Discovery.md` file to customize your app's Discovery page can be found in the [Discovery.md Reference](/docs/en/reference/discovery).

## App Updates

When you publish your app by creating a release, Deta creates an installable version of your app. If you update your app afterwards, you need to publish a new release. Anyone who has installed older versions of your app can update their instance to the latest release (they could also install a new instance). When updating an app, the data will be kept across the update.

> ⚠️ Important note: updates only work when the data your app stores are compatible with the new app version. In the future we will have data migrations to help with this. If a new release is not compatible with old versions, you need to create a separate app for it to prevent breaking installed apps.

Users of your app will be shown an update notification if you publish a **listed** release newer than the one they have installed. **Unlisted** releases will not be made available as updates.

## Release Notes

To notify your users of changes made with a new release you can add "Release Notes" to a release. These notes support the Markdown syntax with the [same limitations as the Discovery.md file](/docs/en/reference/discovery#supported-syntax).

Release notes will be shown to users of your app, before they install the release as an update and can be viewed on the app's Discovery page under "What's new?".

### Adding notes from the CLI

To add notes to a release you can use the `--notes` argument with the Space CLI:

```bash
space release --notes
```

It will prompt you to enter your release notes before creating the release. You can also provide a string to `--notes` directly to skip the prompt:

```bash
space release --notes="Fixed bug xyz"
```

### Adding notes from the GUI

During the publishing flow in Builder, you will be shown the option to add release notes as the second step.
