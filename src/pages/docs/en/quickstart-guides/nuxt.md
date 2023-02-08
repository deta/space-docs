---
title: Run a Nuxt App
section: Quickstart Guides
position: 2
layout: "@docs"
---

> If this is your first Space app take a look at the [getting started guide](/docs/en/introduction/first-app).

If you don't have an existing Nuxt app already you can create a new one by following the offical [Nuxt instructions](https://v3.nuxtjs.org/getting-started/installation#new-project). Only Nuxt 3 is supported out of the box.

By default Nuxt will automatically output a standalone server which Space can run without additional configuration.

Once you've got a Nuxt 3 app locally paired with a [Space Project](/docs/en/basics/projects/), just modify your [Space Spacefile](/docs/en/reference/spacefile/) file before [pushing changes](/docs/en/basics/revisions/) to Space.

Space Spacefile configuration for Nuxt 3:

```yaml
v: 0
micros:
  - name: nuxt
    src: ./src/fullstack/nuxt
    engine: nuxt
```