---
title: The User Interface
layout: "@layouts/DocsPageLayout.astro"
---

Your Space's user interface uses two primary components that you'll interact with the most: **Horizon** and **Teletype**.

# Horizon

After you signup for Space and complete onboarding, you will see something like this:

![ui-canvas](/docs_assets/use/ui-horizon.webp)

This is a **Horizon**. A Horizon is like your desktop, but for your Space. The individual items that you see on a Horizon are **Cards**. You can create Cards that do a number of things.

To create a Card, simply draw a rectangle on your Horizon and select a Card type from the Card creation menu.

![ui-1](/docs_assets/use/ui-card-creation.webp)

## Cards

There are a variety of Card types you can place on a Horizon.

### Text

Text Cards let you tax quick notes on a Horizon. You can use simple Markdown formatting to create a rich text.

### Embeds

Embed cards let you embed external content from the internet straight to a Horizon. Try pasting a YouTube video or Google sheets link.

### Custom

Custom Cards let you code your own Card using HTML, CSS, and JavaScript. You can use the Deta Browser SDK with Deta Base and Deta Drive to store data from a Custom Card.

The data is accessible from the Collections app under the `horizon://home` Collection.

You can also use the *Create an App with AI* option to create a Custom Card using natural language.

### Installed Apps

You can pin personal apps installed from Deta Discovery straight to your Horizon.

### Builder Projects & Instances

If you have developer mode enabled, you can also pin personal apps you are building to the Horizon.

### Link

You can embed links on a Horizon with the Link Card.

If you click on a Tile, it will open that app or project. You can also reorganize all the Tiles on your Horizon by dragging and dropping any Tile.

![ui-1](/docs_assets/use/ui-1.png)

### System

Space itself also provides a few **System Cards**, which include:

- [Discovery](/docs/en/use/space-apps/discovery): Where you find and install Space apps
- [Docs](/docs/en/): A link to the docs, to read about Space
- [Collections](/docs/en/use/your-data/collections): Where you manage your data
- [Builder](/docs/en/build/fundamentals/development/builder): Where you build Space applications (available for developers)

# Teletype

You also may have noticed the little bar at the bottom of your Horizon. This is **Teletype**.

![ui-teletype](/docs_assets/use/ui-teletype.png)

Teletype will follow you around Space, helping you navigate and interact with individual apps and Space itself. You can navigate Teletype using your keyboard or your mouse. If you are somewhere in Space and aren't sure what to do, opening Teletype is often a great first step.

## Teletype Actions

Just starting to type, or clicking Teletype, will expand it with a list of **Actions** available to you. Actions help you do something in Space via Teletype.

<div style="display:flex; justify-content: center;"><img style="border-radius: 5px; width: 90%; max-width:500px;" src="/docs_assets/use/ui-3.png"/> </div>

Available Actions are context specific and will change, depending on where you are in your Space. You can execute individual Actions within Teletype by double clicking, or hitting enter, which will do something.

Some actions, like **Go to Docs**, are just links outside of your Space to things like the Docs (where we are at).

Other actions, like **Settings**, will open up a Space context menu for you to interact with.

<div style="display:flex; justify-content: center;"><img style="border-radius: 5px; width: 90%; max-width:500px;" src="/docs_assets/use/ui-4.png"/> </div>

More advanced Actions, like **Search Installed Apps**, will allow you to quickly do something without leaving Teletype itself.

<div style="display:flex; justify-content: center;"><img style="border-radius: 5px; width: 90%; max-width:500px;" src="/docs_assets/use/ui-5.png"/> </div>

For every Action that is highlighted, Teletype will hint at what you can do in the bottom right corner. The options hinted are both clickable and accessible via a keyboard shortcut. In the above case, **Enter** will open the highlighted app, while **Command + X** will display a list of extra actions the highlighted app offers.

<div style="display:flex; justify-content: center;"><img style="border-radius: 5px; width: 90%; max-width:300px;" src="/docs_assets/use/ui-6.png"/> </div>