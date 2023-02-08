---
title: Run a Next App
section: Quickstart Guides
position: 1
layout: "@docs"
---

> If this is your first Space app take a look at the [getting started guide](/docs/en/introduction/first-app).

If you don't have an existing Next app already you can create a new one by following the offical [Next instructions](https://nextjs.org/docs#automatic-setup).

For Space to be able to run Next it needs to be configured to ouput a standalone app. This ensures that the app is built to be served by a NodeJS server, refer to the [Next Docs](https://nextjs.org/docs/advanced-features/output-file-tracing#automatically-copying-traced-files) for more information.

Please modify `next.config.js` to set the output to `standalone`: 

```jsx
/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
}

module.exports = nextConfig
```

Once you've edited your `next.config.js` file, just modify your [Spacefile](/docs/en/reference/spacefile/) file before [pushing changes](/docs/en/basics/revisions/) to Space.

Spacefile Configuration:

```yaml
v: 0
micros:
  - name: next-app
    src: ./src/fullstack/next-app
    engine: next
```
