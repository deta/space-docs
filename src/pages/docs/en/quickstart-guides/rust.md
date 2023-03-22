---
title: Run a Rust App
section: Quickstart Guides
position: 7
layout: "@docs"
---

Space supports Rust Micros, but it requires a bit more configuration.

- `engine` needs to be set to `custom`
- `commands` needs to include commands that build a binary and you must install and use `cross` for it to work
- `include` should be set to the binary file that is built as a result of running `commands`
- `dev` should be the command to start the program in development mode
- `run` should be the command to run the binary

Here is an example:

```yaml
v: 0
micros:
  - name: custom-rust-app
    src: ./src/custom/rust-app
    dev: cargo run
    engine: custom
    commands:
      - cargo install cross
      - cross build --target x86_64-unknown-linux-gnu --release
    run: ./rust-app
    include:
      - target/x86_64-unknown-linux-gnu/release/rust-app
```
