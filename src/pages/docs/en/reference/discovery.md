---
title: Discovery.md
section: Reference
position: 2
layout: "@docs"
---

## What's the Discovery.md file?

The `Discovery.md` file allows you to customize the presentation of your Space app on [Discovery](/discovery) - Space's app marketplace.

Write Markdown inside the `Discovery.md` file to explain what your app does, what makes it unique, and its features & functionality. You can think of it as your app's `README` for Deta Space. 

In addition to the Markdown description, the `Discovery.md` file supports a Frontmatter section where you can specify metadata like your app's title, its tagline, a theme color and links to a Git repository & an app's website.

Here is an example `Discovery.md` file:

```md
---
title: "Space: The Personal Cloud"
tagline: "Your own personal computer in the cloud: private, secure & always online."
theme_color: "#f26daa"
git: "https://github.com/deta/deta"
homepage: "https://deta.space"
---

Your apps, your data. Your *personal cloud computer*. 

Space comes with:

- Fully managed servers
- Fully managed security
- Fully managed data
- Fully managed payments
```

You can see that the metadata is separate from the Markdown content by two lines of 3 dashes (`---`). What's between the sets of dashes (`---`) is the Frontmatter section.

> The `Discovery.md` file is different from the [Spacefile](/docs/en/reference/spacefile). The `Discovery.md` file _only_ affects how your app appears on Deta Discovery. It is meant for marketing purposes, whereas the `Spacefile` is used for technical purposes: it tells Space how to run your app and what it looks like once it's installed.

The `Discovery.md` file is uploaded during `space push` and is part of a [revision](/docs/en/basics/revisions#whats-a-revision). When you create a release out of a revision the revision's `Discovery.md` file will be used.

## Options

There are no required options in the `Discovery.md` section, you can pick and choose what to use. We recommend that your app has at least a title and a short Markdown description explaining what it does.

**Note:** To change your app's name or icon you need to modify its [Spacefile](/docs/en/reference/spacefile) since these are used by Space for technical purposes, not just its marketing on Discovery.

Here are all the options supported by `Discovery.md`:

### `title`

Use `title` to give your app a friendly and descriptive name on Discovery.

This is different from the app name used once the app is installed. You can change that using the [`app_name`](/docs/en/reference/spacefile#app_name) option in the [Spacefile](/docs/en/reference/spacefile). The `title` will only be used on Discovery.

Choose a simple and memorable title and try to stand out. Avoid names that use generic terms or are too similar to existing app names.

The `title` needs to start with your app's name and can only have a maximum of `45` characters. We recommend the `title` follows the following format: `App Name: Short Description`.

Here's an example:

```yaml
title: "Space: The Personal Cloud"
```

### `tagline`

Use the `tagline` to provide a short description of your app. This will be shown across Discovery on both the app's page and in featured sections or search.

Your app’s `tagline` is intended to summarize your app in a concise phrase. Avoid generic descriptions and instead highlight features or typical uses of your app.

The `tagline` can be a maximum of `69` characters.

Here's an example:

```yaml
tagline: "Your own personal computer in the cloud: private, secure & always online."
```

### `theme_color`

Use `theme_color` to style the color of your app's Discovery page to match your app.

`theme_color` only supports hex color values.

```yaml
theme_color: "#f26daa"
```

### `git`

Use `git` to link to your app's Git repository, so users can view its source and can contribute to your app.

You can provide any valid Git URL including a link to a GitHub or GitLab repository.

```yaml
git: "https://github.com/deta/deta"
```

### `homepage`

Use `homepage` to link to an abitrary URL related to your app. This could be your app's marketing page or a documentation website for example.

```yaml
homepage: "https://deta.space"
```

## Markdown content

The main section in the `Discovery.md` file is the Markdown content. It will be displayed on your app's Discovery page similar to a README.

You can use it to describe what your app does in more detail, what makes it unique and/or highlight its features and functionality. The ideal description is a concise, informative paragraph followed by a short list of main features.

The Markdown description has a limit of `4250` characters.

Here's an example:

```md
Your apps, your data. Your *personal cloud computer*. 

Space comes with:

- Fully managed servers
- Fully managed security
- Fully managed data
- Fully managed payments
```

### Supported Syntax

The `Discovery.md` file currently does not support the full Markdown spec. You cannot use the following:

- Images (in the future we will add support for app screenshots)
- HTML
- h1 (`#`) headings (they will be converted to h2)
