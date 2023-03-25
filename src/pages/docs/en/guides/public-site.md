---
title: Running a Public Site
section: Guides
position: 2
layout: "@docs"
---

Although Space is optimized for running single-user full-stack apps, you can also use it to host public static websites. This is useful if you want to host a personal website or a landing page for your app.

## Making a Micro public

Every app on Space can contain up to 5 [Micros](/docs/en/basics/micros#whats-a-micro), and you could change the visibility of each Micro individually. To make a Micro public, you need to set the `public` flag to `true` in the Micro's [`Spacefile`](/docs/en/reference/spacefile).

Example:

```yaml
micros:
  - name: frontend
    src: .
    engine: svelte
    primary: true
    public: true
```

Only the Micro with the `primary` flag set to `true` will be served on the root domain. The other Micros will be served on their respective paths under the root domain. For example if a Micro is named `api` (or has the `path` property set to `api`), it will be served on `https://app-name.deta.app/api`.


> __Note:__ `public: true` is just a shorthand for `public_routes: ["/*"]`. We recommend using [`public_routes`](/docs/en/reference/spacefile#public_routes) instead if you need more customization

## Connecting a custom domain

You are able set up a custom domain by clicking on the three dots (__…__) at the bottom right of your app's icon and selecting **Settings** to open your app's settings. Then, switch to the **Domains** tab and click **Add Custom Domain** and follow the instructions.

Note that for now you can only set one domain per app and the root of that domain will be connected to the primary Micro. The other micros will resolve to their respective paths under the root domain.

> We're working on greatly improving the custom domain experience in the future. We will also allow the customization of subdomains (e.g. `customtext.deta.dev`). Stay tuned!