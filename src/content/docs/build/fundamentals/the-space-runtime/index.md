---
title: The Space Runtime
layout: "@layouts/DocsPageLayout.astro"
---

## The Runtime

Deta Space has its own runtime, the Space Runtime, that can run almost any type of app. For example, the Space Runtime supports:

- frontend sites built with frameworks like [React](https://react.dev/), [Vue](https://vuejs.org/), and [Svelte](https://svelte.dev/)
- full-stack frameworks like [Next](https://nextjs.org/), [Nuxt](https://nuxtjs.org/), or [SvelteKit](https://kit.svelte.dev/)
- backend apps built with Node.js, Python and even Go, Rust or something more custom

An individual Space app can be built by combining these different technologies, for example, a SvelteKit app with a Go API or a Next.js app with a Python API — really any combination of up to 5 different languages and frameworks. 

Learn more about building your first app in the [New Space App Guide](/docs/en/build/new-apps).

### Micros 

We call these individual parts of an app [Micros](/docs/en/build/fundamentals/the-space-runtime/micros). A Micro is a lightweight serverless compute service running inside your app that can be exposed to the world using HTTP.

Micros can run tasks in response to triggers, like schedules, via [Actions](/docs/en/build/fundamentals/the-space-runtime/actions).

The Space Runtime combines all your Micros into a single app that you can install and use via a single [domain](/docs/en/build/fundamentals/the-space-runtime/domains). The Runtime handles most of the work for you, you only need to worry about your app or the infrastructure itself.

### Authentication

A core part of the Space Runtime is a unique and fully managed approach to [Authentication](/docs/en/build/fundamentals/the-space-runtime/domains). As a developer, you don't have to think about user management, auth or data separation. Just build something for yourself. Read more [here](/docs/en/build/fundamentals/the-space-runtime/domains).

## The `Spacefile`

The Space Runtime uses a configuration file, called a `Spacefile`, to understand what Micros your app contains and how to run each one individually and in concert. The `Spacefile` must be named exactly `Spacefile` (capitalized and without an extension) and needs to be in the root directory of your project and uses a syntax similar to YAML. 

> If you’re new to YAML and want to learn more, see [Learn YAML in Y minutes](https://learnxinyminutes.com/docs/yaml/). 

Here is an example `Spacefile` for an app with a Python Micro and a Go Micro:

```yaml
v: 0
icon: ./icon.png
app_name: "My App"
micros:
  - name: python-app
    src: ./src/python
    engine: python3.9
    primary: true

  - name: custom-app
    src: ./src/custom
    engine: custom
    commands:
      - go get
      - go build main.go
    run: ./main
    include:
      - main
```

The Space CLI will automatically generate a `Spacefile` for you when you [create a new project](/docs/en/build/fundamentals/development/projects#creating-a-project) using `space new`. If will try to auto detect your Micros and use the right configuration. 


Take a look at our [Quick Starters](/docs/en/build/quick-starts/) for instructions about specific languages and the [`Spacefile` Reference](/docs/en/build/reference/spacefile) for a comprehensive list of available configuration options.



## Ignoring files and directories

To exclude certain files and directories from being uploaded during `space push`, use the `.spaceignore` file. It acts similar to a `.gitignore` file, where each line in the file specifies a pattern. All files and directories matching the patterns will be excluded from `push`.

For example, using `space push` with the following `.spaceignore` file will ignore the `test` and `docs` paths:

```
test
docs
```

The patterns from the `.spaceignore` file are combined with a list of default ignore patterns, see more below.

### Default ignore patterns

Certain directories and files are ignored by the Space CLI automatically. They do not need to be specified in the `.spaceignore` file.

List of files and directories that are ignored by default:

  ```yaml
  # space
  .space
  .spaceignore
  
  # version control
  .hg
  .git
  .gitmodules
  .gitignore
  .svn
  
  # build
  build
  dist
  
  # js frameworks
  .next
  .nuxt
  .svelte-kit
  .astro
  
  # node
  node_modules
  .npmignore
  .cache
  .yarn
  npm-debug.log*
  yarn-debug.log*
  yarn-error.log*
  lerna-debug.log*
  .pnpm-debug.log*
  
  # python
  .venv
  venv
  virtualenv
  __pycache__
  
  # rust
  target
  
  # coverage
  *.lcov
  .nyc_output
  .coverage
  .coverage.*
  
  # docker
  .dockerignore
  
  # env
  .env.local
  .env.*.local
  .env
  .envrc
  
  # ide
  .*.swp
  .vscode
  .history
  
  # system
  .DS_Store
  
  # other
  .lock-wscript
  config.gypi
  CVS
  ```
    

These patterns are always ignored, unless overwriten by a negate pattern in the `.spaceignore` file.

### Negating a pattern

You can use an optional prefix `!` to negate a pattern; any matching file excluded by a previous pattern will become included again. For example, this is useful if you want to overwrite the default ignore list.

For a `.spaceignore` file with the following content, `space push` will not ignore the `node_modules` directory:

```
!node_modules/
```