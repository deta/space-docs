---
title: Releasing your app
position: 2
layout: "@docs"
---

# Releasing Your App

After you push your local changes to Space using the Space CLI, you can turn your Revision into an installable Release by publishing your app.

There are two ways to publish your app:

1. Through the Space CLI
2. Through the Builder UI

## Releasing from the CLI

To publish your app using the Space CLI you can create a new Unlisted Release using the following command:

```
space release
```

If it is your first Release for a given Project, you will be asked to confirm that you want to create a Release. It is recommended you add a [`Discovery.md`](/docs/en/publish/discovery-md) file locally before releasing. If you haven’t added one, you will also be asked to specify an app name and description. Read more about the Discovery.md file [here](/docs/en/publish/discovery-md).

The CLI will ask you to select which [revision](/docs/en/build/fundamentals/development/pushing#revisions) you want to release. By default, it will use the latest one. After confirming, watch your app take off — it is now installable on Deta Space to anyone with the release url 🎉

If you want to publish your app as a [Listed Release](/docs/en/publish/intro#releases) on Deta Discovery you can use the `--listed` flag:

```yaml
space release --listed
```

### Release Notes and Options

For subsequent releases you can use the `--notes` argument to specify release notes that explain changes, like new features or bug fixes, that come with the release. These are shown to users when they update their app, as well on your app’s Discovery page under the **What’s New** section.

You can provide specific options when you release using the CLI (which Revision to use, version tags, whether it’s listed or unlisted). Refer to the [CLI reference](/docs/en/build/reference/cli) for more info.

## Releasing from the Builder UI**

You can create a Release for your Project using [Builder](/docs/en/build/fundamentals/development/projects#projects-in-builder). From your Builder Project, go to the “Publish” tab and click the “New Release” button. 

![releasing-1](/public/docs-assets/publish/releasing-1.png)

The page will give you a number of options. There is a toggle which controls whether the Release should be a `listed` on Discovery, while there is a drop down for you to select the Revision to use. There is also an input field that will let you create a version tag (a version tag is auto-generated if you leave it blank). 

There are three tabs that offer more options to customize your **Release**.

### Release Notes

![releasing-2](/public/docs-assets/publish/releasing-2.png)

You can enter release notes, which are shown to everyone who installed an earlier copy of the app before they update. They are also be displayed in the **What’s New** section of your app’s Discovery page. Basic markdown syntax is supported (images and html are not supported).

![releasing-3](/public/docs-assets/publish/releasing-3.png)

### App Info

![releasing-4](/public/docs-assets/publish/releasing-4.png)

You can edit the meta data of your app which will be shown on your app’s Discovery page. There are a number of available fields (all optional): name, description, homepage, Git repo, and theme color. 

| Parameter | Discovery.md Field |
| --- | --- |
| App Name | app_name |
| App Description | tagline |
| Homepage | homepage |
| Git Repository | git |
| Theme Color | theme |

These fields mostly map to fields in the Frontmatter section of the Discovery.md file.

### Discovery Page

![releasing-5](/public/docs-assets/publish/releasing-5.png)

This section lets you compose and preview the main content section of your Discovery page using a simplified Markdown (images, HTML and H1 tags are not supported). You can use it to describe what your app does in more detail, what makes it unique, and highlight its features and functionality. The ideal description is a concise, informative paragraph followed by a short list of main features.

The description has a limit of `4250` characters and is equivalent to the main content section of the Discovery.md file.

Once you are ready, click “**Launch to Space**” and watch your app take off — it is now installable on Deta Space 🎉