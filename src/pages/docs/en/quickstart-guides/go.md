---
title: Run a Go App
section: Quickstart Guides
position: 6
layout: "@docs"
---

Space supports Go Micros, but it requires a bit more configuration.

- `engine` needs to be set to `custom`
- `commands` needs to include commands that build a binary
- `include` should be set to the binary file that is built as a result of running `commands`
- `dev` should be the command to start the program in development mode
- `run` should be the command to run the binary

Here is an example:

```yaml
v: 0
micros:
  - name: go-app
    src: ./src/go-app
    engine: custom
    dev: go run main.go
    commands:
      - go get
      - go build main.go
    run: ./main
    include:
      - main
```

- The first command `go get` installs any external packages/modules.
- The second command `go build main.go` builds the program into an executable file.
- `include` specifies which file(s) to include in the final package of the micro. In this case only our build binary file.
- Finally, `run` specifies the command that should be run to start the program. In this case, it is running the executable that was generated from the previous step.
