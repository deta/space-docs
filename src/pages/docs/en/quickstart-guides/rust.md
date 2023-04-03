---
title: Run a Rust App
section: Quickstart Guides
position: 7
layout: "@docs"
---

Space supports Rust Micros using using `engine: custom` in your Spacefile. You can use any Rust framework, like Axum. It's important to note that your app has to run on port `8080`. Feel free to use the `PORT` environment variable to automatically set the port.

A repository with a working example can be found [here](https://github.com/abdelhai/rusti)

## Step 1: Create a Space project
Make sure you have the [Space CLI installed and set up](/docs/en/basics/cli). Then, in the root directory of your Rust project, run the following to create a Space project and an empty [`Spacefile`](/docs/en/reference/spacefile):

```sh
space new
```

## Step 2: Configure your Spacefile

Configuring your project for Rust requires two steps. First, replace the contents of the `Spacefile` with the following:

```yaml
# Spacefile Docs: https://go.deta.dev/docs/spacefile/v0
v: 0
micros:
  - name: main
    src: .
    engine: custom
    dev: cargo run
    commands:
      - cargo build --release
    run: ./nameofyourbinary
    include:
      - target/release/nameofyourbinary
```

Make sure to replace `nameofyourbinary` with the name of your binary. Feel free to adjust the `commands` and `run` to your needs.

> __Explanation of the Spacefile:__
> - We are using the `custom` engine, which allows us to run any command we want
> - We are building the Rust app using `cargo build --release`
> - We are running the binary that was created in the previous step
> - We are including the binary in the final image (using `include`)
> - We are setting `src: .` as the current directory is the root of the Rust project
> - We are specifying a command to run during development using `dev`

Second,  create a `.spaceignore` file in the root of your project and add the following:

```
.git
target
```

## Step 3: Run it on Space

Now you can run your Rust app on Space:

```sh
space push
```

This will build your Rust app and push it to Space. You can now access your app at the URL provided by the CLI.
The build process will take a few minutes, as it has to build the Rust app from scratch.

`space push` is the same command you would also use to update your app.

Done! ✨
