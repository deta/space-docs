---
title: Run a Static App
section: Quickstart Guides
position: 0
layout: "@docs"
---

> If this is your first Space app take a look at the [getting started guide](/docs/en/introduction/first-app).

Static micros work out of the box with most frontend frameworks like React, Vue, and Svelte. Just set the right `engine` value in your [Space Spacefile](/docs/en/reference/spacefile/) and you are good to go:

```yaml
v: 0
micros:
  - name: frontend
    src: src/frontend-app
    engine: svelte # or react/vue
```

The following frameworks are supported configuration-free using `engine`:

- `react`
- `svelte`
- `vue`

For other frameworks the configuration is minimal.

Set the engine to `static` and specify the directory to serve with `serve`. If your framework has a build step, include your build command with the `commands` field:

```yaml
v: 0
micros:
  - name: frontend
    src: src/frontend-app
    engine: static
    dev: npm run dev
    commands:
      - npm run build
    serve: dist
```
