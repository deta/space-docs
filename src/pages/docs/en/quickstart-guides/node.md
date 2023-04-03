---
title: Run a Node.js App
section: Quickstart Guides
position: 4
layout: "@docs"
---

To run a Node.js app on a Space Micro, **it is recommended to use Node.js v16** since it works with Space out of the box.

> ⚠️ Make sure that your Micro is configured to listen on the port number specified in the environment variable `PORT`.

Here's the Spacefile needed to get a basic Node.js app running on Space:

```yaml
v: 0
micros:
  - name: node-micro
    src: src/node
    engine: nodejs16
    dev: nodemon index.js
    run: "node index.js"
```

index.js

```js
const express = require('express')
const app = express()

const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello from Space!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
```

> ℹ️ We use [`nodemon`](https://www.npmjs.com/package/nodemon) to watch for changes in our code and restart the server automatically. You can use any other tool you like.

If your Node Micro has a build step (e.g. because you are using TypeScript) use a config similar to the following:

```yaml
v: 0
micros:
  - name: node-micro
    src: src/node
    engine: nodejs16
    dev: "npm run dev"
    commands:
      - npm run build
    include:
      - build
    run: "node build/index.js"
```

- `commands` specifies which commands to run during build, in our case our NPM script `build`
- `include` specifies which directory to include in the final app package, everything else will be ignored. In our case we set it to the directory of our build output
- `dev` specifies the command to start your Micro in development mode. In our case running the `dev` script in our `package.json`
- `run` specifies the command to start your Micro. In our case running the `index.js` file in our `build` directory using `node`

> ℹ️ Support for Node.js v18 is coming soon.
