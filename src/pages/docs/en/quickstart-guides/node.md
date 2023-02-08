---
title: Run a Node App
section: Quickstart Guides
position: 4
layout: "@docs"
---

To run Node.js on a Space Micro **it is recommended to use Node v16** since it works with Space out of the box. You only need to make sure that your Micro listens on the port specified in the environment variable `PORT`.

Here's the Spacefile needed to get a basic Node.js app running on Space:

```yaml
v: 0
micros:
  - name: node-micro
    src: src/node
    engine: nodejs16
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

If your Node Micro has a build step (e.g. because you are using TypeScript) use a config similar to the following:

```yaml
v: 0
micros:
  - name: node-micro
    src: src/node
    engine: nodejs16
    commands:
      - npm run build
    include:
      - build
    run: "node build/index.js"
```

- `commands` specifies which commands to run during build, in our case our NPM script `build`
- `include` specifies which directory to include in the final app package, everything else will be ignored. In our case we set it to the directory of our build output
- `run` specifies the command to start your Micro. In our case running the `index.js` file in our `build` directory using `node`

> Node v14 is not fully supported, please contact the team if you want to use Node v14 Micros.
