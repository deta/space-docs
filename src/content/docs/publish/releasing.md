---
title: Releasing your app
position: 2
layout: "@layouts/DocsPageLayout.astro"
---

# Releasing Your App

After you push your local changes to Space using the Space CLI, you can turn your Revision into an installable Release by publishing your app.

There are two ways to publish your app:

1. Through the Space CLI
2. Through the Builder UI

## **Releasing from the CLI**

To publish your app using the Space CLI you can create a new Unlisted Release using the following command:

```
space release
```

If it is your first Release for a given Project, you will be asked to confirm that you want to create a Release. It is recommended you add a `[Discovery.md](http://Discovery.md)` file locally before releasing. If you haven’t added one, you will also be asked to specify an app name and description. Read more about the Discovery.md file here.

The CLI will ask you to select which Revision you want to release. By default, it will use the latest one. After confirming, watch your app take off — it is now installable on Deta Space to anyone with the release url 🎉

If you want to publish your app as a Listed Release on Deta Discovery you can use the `--listed` flag:

```yaml
space release --listed
```

### Release Notes and Options

For subsequent releases you can use the `--notes` argument to specify release notes that explain changes, like new features or bug fixes, that come with the release. These are shown to users when they update their app, as well on your app’s Discovery page under the ****************What’s New**************** section.

You can provide specific options when you release using the CLI (which Revision to use, version tags, whether it’s listed or unlisted). Refer to the CLI reference for more info.

## **Releasing from the Builder UI**

You can create a Release for your Project using [Builder](https://deta.space/docs/en/basics/projects#projects-in-builder). From your Builder Project, go to the “Publish” tab and click the “New Release” button.

![Screen Shot 2023-04-27 at 14.27.54.png](Releasing%20Your%20App%2001ccf90c4e6241a29fa4c63fc2402c57/Screen_Shot_2023-04-27_at_14.27.54.png)

The page will give you a number of options. There is a toggle which controls whether the Release should be a `listed` on Discovery, while there is a drop down for you to select the Revision to use. There is also an input field that will let you create a version tag (a version tag is auto-generated if you leave it blank).

There are three tabs that offer more options to customize your **************Release**************.

### Release Notes

![Screen Shot 2023-04-27 at 14.35.02.png](Releasing%20Your%20App%2001ccf90c4e6241a29fa4c63fc2402c57/Screen_Shot_2023-04-27_at_14.35.02.png)

You can enter release notes, which are shown to everyone who installed an earlier copy of the app before they update. They are also be displayed in the **********************What’s New********************** section of your app’s Discovery page. Basic markdown syntax is supported (images and html are not supported).

![Screen Shot 2023-04-27 at 14.33.49.png](Releasing%20Your%20App%2001ccf90c4e6241a29fa4c63fc2402c57/Screen_Shot_2023-04-27_at_14.33.49.png)

### App Info

![Screen Shot 2023-04-27 at 14.36.56.png](Releasing%20Your%20App%2001ccf90c4e6241a29fa4c63fc2402c57/Screen_Shot_2023-04-27_at_14.36.56.png)

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

![Screen Shot 2023-04-27 at 14.51.48.png](Releasing%20Your%20App%2001ccf90c4e6241a29fa4c63fc2402c57/Screen_Shot_2023-04-27_at_14.51.48.png)

This section lets you compose and preview the main content section of your Discovery page using a simplified Markdown (images, HTML and H1 tags are not supported). You can use it to describe what your app does in more detail, what makes it unique, and highlight its features and functionality. The ideal description is a concise, informative paragraph followed by a short list of main features.

The description has a limit of `4250` characters and is equivalent to the main content section of the Discovery.md file.

Once you are ready, click “**Launch to Space**” and watch your app take off — it is now installable on Deta Space 🎉