---
title: Discovery.md File
position: 3
layout: "@docs"
---

# The Discovery.md File

There are a few things you can do to prepare your app for publishing. The most important is create a [`Discovery.md`](http://Discovery.md) file, which allows you to customize the presentation of your app on **Deta Discovery**, Space’s library of personal cloud software. You can think of the `Discovery.md` file as your app's `README` for Deta Space.

The `Discovery.md` file is a Markdown file that includes two sections:

- Frontmatter: where you can specify metadata about your app
- Markdown Content: where you explain what your app does and why it exists.

![Screen Shot 2023-04-27 at 10.17.58.png](The%20Discovery%20md%20File%20439b777e047a47b18e4375041a8a4512/Screen_Shot_2023-04-27_at_10.17.58.png)

# File Structure

The `Discovery.md` file is uploaded during `space release` as part of a **************Release**************. You can also specify the `Discovery.md` data via a UI when you create a Release from the Builder UI.

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

The first section between the two lines of 3 dashes (`---`) is the **************Frontmatter************** section which contains meta data about your app.  

**There are no required fields in the Frontmatter section, every supported parameter is optional**. We recommend that your app has at least a title and a short Markdown description explaining what it does. Here are all the options supported in the Frontmatter by `[Discovery.md](http://Discovery.md)`:

### `app_name`

Use `app_name` to specify a name for your app. This name will be used wherever your app is displayed e.g. the Canvas, Teletype and Discovery. If it is not provided, `app_name` will fallback to your project’s name. The name can has a maximum of 12 characters. 

Here's an example:

```
app_name: "Deta Space"
```

### `title`

Use `title` to give your app a friendly and descriptive name on Discovery. This is different from the app name used once the app is installed. You can change that using the `[app_name](https://www.notion.so/docs/en/reference/spacefile#app_name)` option in the [Spacefile](https://www.notion.so/docs/en/reference/spacefile). The `title` will only be used on Discovery.

Choose a simple and memorable title and try to stand out. Avoid names that use generic terms or are too similar to existing app names.

The `title` needs to start with your app's name and can only have a maximum of `45` characters. We recommend the `title` follows the following format: `App Name: Short Description`.

Here's an example:

```
title: "Space: The Personal Cloud"
```

### `tagline`

Use the `tagline` to provide a short description of your app, with a maximum of `69` characters. This will be shown across Discovery on both the app's page, and in featured sections or search.

Your app’s `tagline` is intended to summarize your app in a concise phrase. Avoid generic descriptions and instead highlight features or typical uses of your app. 

Here's an example:

```
tagline: "Your own personal computer in the cloud: private, secure & always online."
```

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