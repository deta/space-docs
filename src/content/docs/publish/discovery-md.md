---
title: Discovery.md File
layout: "@layouts/DocsPageLayout.astro"
---

There are a few things you can do to prepare your app for publishing. The most important is create a `Discovery.md` file, which allows you to customize the presentation of your app on [Deta Discovery](/docs/en/use/space-apps/discovery), Space's library of personal cloud software. You can think of the `Discovery.md` file as your app's `README` for Deta Space.

The `Discovery.md` file is a Markdown file that includes two sections:

- [Frontmatter](#frontmatter): where you can specify metadata about your app
- [Markdown Content](#markdown-content): where you explain what your app does and why it exists.

![discovery-1](/docs_assets/publish/discovery-md-1.png)

# File Structure

The `Discovery.md` file is uploaded during `space release` as part of a **Release**. You can also specify the `Discovery.md` data via a UI when you create a Release from the Builder UI.

Here is an example `Discovery.md` file:

```
---
title: "Space: The Personal Cloud"
tagline: "Your own personal computer in the cloud: private, secure & always online."
theme_color: "#f26daa"
git: "<https://github.com/deta/deta>"
homepage: "<https://deta.space>"
---

Your apps, your data. Your *personal cloud computer*.

Space comes with fully managed servers, security and data, supercharging your creative possibilities on the internet.
```

## Frontmatter

The first section between the two lines of 3 dashes (`---`) is the **Frontmatter** section which contains meta data about your app.

> If you are publishing your app to Deta Discovery as a `listed` release, the `app_name` and `tagline` fields are required (along with a Markdown description). Every other field is optional.

Here are all the options supported in the Frontmatter by `Discovery.md`:

### `app_name`

Use `app_name` to specify a name for your app. This name will be used wherever your app is displayed e.g. the Canvas, Teletype and Discovery. If it is not provided, `app_name` will fallback to your project's name. The name can has a maximum of 12 characters.

Here's an example:

```
app_name: "Deta Space"
```

### `title`

Use `title` to give your app a friendly and descriptive name on Discovery. This is different from the app name used once the app is installed. You can change that using the [`app_name`](/docs/en/build/reference/spacefile#app_name) option in the `Spacefile`. The `title` will only be used on Discovery.

Choose a simple and memorable title and try to stand out. Avoid names that use generic terms or are too similar to existing app names.

The `title` needs to start with your app's name and can only have a maximum of `45` characters. We recommend the `title` follows the following format: `App Name: Short Description`.

Here's an example:

```
title: "Space: The Personal Cloud"
```

### `tagline`

Use the `tagline` to provide a short description of your app, with a maximum of `69` characters. This will be shown across Discovery on both the app's page, and in featured sections or search.

Your app's `tagline` is intended to summarize your app in a concise phrase. Avoid generic descriptions and instead highlight features or typical uses of your app.

Here's an example:

```
tagline: "Your own personal computer in the cloud: private, secure & always online."
```

### `media`

Use the `media` field to provide screenshots and videos that show off your app. For screenshots, provide a path relative to the root of your app (& `Discovery.md` file). For videos, you can provide a YouTube or Loom link.

Here's an example:

```
media:
    - "screenshots/galaxy.png"
    - "screenshots/spectrum.webp"
    - "https://www.youtube.com/watch?v=i5wsXLmWhCM"
```

Media requirements:
- There is a limit of 5 media, with 1 video per app
- Screenshots must be a minimum of `1280 x 800` pixels with an aspect ratio of 16:10
- Screenshots must be a `JPEG`, `PNG`, or `WEBP` file type
- A maximum of 3 MB per screenshot is enforced

Media will be displayed on the Discovery page in the order they are given in the Frontmatter.

### `theme_color`

Use `theme_color` to style the color of your app's Discovery page. `theme_color` supports hex color values.

```
theme_color: "#f26daa"
```

### `git`

Use `git` to link to your app's Git repository, where users can view its source and contribute to your app. You can provide any valid Git URL including a link to a GitHub or GitLab repository.

```
git: "<https://github.com/deta/deta>"
```

### `homepage`

Use `homepage` to link to a URL related to your app. This could be your app's marketing page or a documentation website.

```
homepage: "<https://deta.space>"
```

### `open_code`

Use `open_code` if you want the source code you push to Deta to be downloadable as a `zip` archive from your app's Discovery page. This allows users to review the source code of your app, increasing trust. 

Here's an example:
```
open_code: true
```

If you do not want your source code shared, do not use this field.

### `ported_from`

Use `ported_from` if you your app is based on someone else's open source work that you modified to make compatible with Space. You can recognize the original source by linking to the Git repository.

Here's an example:
```
ported_from: "https://github.com/methodofaction/Method-Draw"
```

## Markdown Content

The main section in the `Discovery.md` file is the Markdown Content section. It will be displayed on your app's Discovery page similar to a README file.

You can use this section to describe what your app does in more detail, what makes it unique, and highlight its features and functionality. The ideal description is a concise, informative paragraph followed by a short list of main features.

The Markdown description has a limit of `4250` characters.

Here's an example:

```
Your apps, your data. Your *personal cloud computer*.

Use Deta Space to discover and explore a world of software. Or to build something fresh and share it with the world.

Space supports you by taking care of the dirty work, including:
- fully managed servers
- fully managed data
- fully managed security

Supercharge your dreams and explore what's next.
```

### Technical Restrictions

The `Discovery.md` file currently does not support the full Markdown spec. You cannot use the following:

- Images (in the future we will add support for app screenshots)
- HTML
- h1 (`#`) headings (they will be converted to h2)