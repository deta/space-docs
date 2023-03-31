---
title: CLI
section: Reference
position: 0
layout: "@docs"
---

The CLI is a critical tool when building apps for Space. You can use it to create new projects, push changes, create releases and much more.

Take a look at the [Setting up the CLI](/docs/en/basics/cli) guide on how to install and setup the Space CLI.

Below is a reference of commands the Space CLI offers.

<!-- everything below is auto-generated, do not manually edit it -->

## space

Deta Space CLI

### Synopsis

Deta Space command line interface for managing Deta Space projects.

Complete documentation available at https://deta.space/docs

```
space [flags]
```

### Options

```
  -h, --help   help for space
```

## space dev

Spin up a local development environment for your Space project

### Synopsis

Spin up a local development environment for your Space project.

The cli will start one process for each of your micros, then expose a single enpoint for your Space app.

```
space dev [flags]
```

### Options

```
  -d, --dir string    directory of the project (default ".")
  -h, --help          help for dev
  -H, --host string   host to run the proxy on (default "localhost")
  -i, --id string     project id
      --open          open the app in the browser
  -p, --port int      port to run the proxy on (default 4200)
```

## space dev help

Help about any command

### Synopsis

Help provides help for any command in the application.
Simply type dev help [path to command] for full details.

```
space dev help [command] [flags]
```

### Options

```
  -h, --help   help for help
```

## space dev proxy

Start a reverse proxy for your micros

### Synopsis

Start a reverse proxy for your micros

The micros will be automatically discovered and proxied to.

```
space dev proxy [flags]
```

### Options

```
  -d, --dir string    directory of the project (default ".")
  -h, --help          help for proxy
  -H, --host string   host to run the proxy on (default "localhost")
      --open          open the app in the browser
  -p, --port int      port to run the proxy on (default 4200)
```

## space dev trigger

Trigger a micro action

### Synopsis

Manually trigger an action.
Make sure that the corresponding micro is running before triggering the action.

```
space dev trigger <action> [flags]
```

### Options

```
  -d, --dir string   project directory (default ".")
  -h, --help         help for trigger
```

## space dev up

Start a single micro for local development

```
space dev up <micro> [flags]
```

### Options

```
  -d, --dir string   directory of the project (default ".")
  -h, --help         help for up
  -i, --id string    project id
      --open         open the app in the browser
  -p, --port int     port to run the micro on
```

## space exec

Run a command in the context of your project

### Synopsis

Run a command in the context of your project.

The data key will be automatically injected into the command's environment.

```
space exec [flags]
```

### Options

```
  -h, --help             help for exec
      --project string   id of project to exec the command in
```

## space help

Help about any command

### Synopsis

Help provides help for any command in the application.
Simply type space help [path to command] for full details.

```
space help [command] [flags]
```

### Options

```
  -h, --help   help for help
```

## space link

Link a local directory with an existing project

```
space link [flags]
```

### Options

```
  -d, --dir string   src of project to link (default "./")
  -h, --help         help for link
  -i, --id string    project id of project to link
```

## space login

Login to space

```
space login [flags]
```

### Options

```
  -h, --help         help for login
  -t, --with-token   Read token from standard input
```

## space new

Create new project

```
space new [flags]
```

### Options

```
  -b, --blank         create blank project
  -d, --dir string    src of project to release (default "./")
  -h, --help          help for new
  -n, --name string   project name
```

## space open

Open your local project in the Builder UI

```
space open [flags]
```

### Options

```
  -d, --dir string   src of project to open (default "./")
  -h, --help         help for open
  -i, --id string    project id of project to open
```

## space push

Push your changes to Space and create a new revision.

### Synopsis

Push your changes to Space and create a new revision.

Space will automatically update your Builder instance with the new revision.

If you don't want to follow the logs of the build and update, pass the --skip-logs argument which will exit the process as soon as the build is started instead of waiting for it to finish.

Tip: Use the .spaceignore file to exclude certain files and directories from being uploaded during push.


```
space push [flags]
```

### Options

```
  -d, --dir string   src of project to push (default "./")
  -h, --help         help for push
  -i, --id string    project id of project to push
      --open         open builder instance/project in browser after push
      --skip-logs    skip following logs after push
  -t, --tag string   tag to identify this push
```

## space release

Create a new release from a revision

```
space release [flags]
```

### Options

```
  -d, --dir string       src of project to release (default "./")
  -h, --help             help for release
  -i, --id string        project id of an existing project
      --latest           release latest revision
      --listed           listed on discovery
  -n, --notes string     release notes
      --rid string       revision id for release
  -v, --version string   version for the release
```

## space validate

Validate your Spacefile and check for errors

```
space validate [flags]
```

### Options

```
  -d, --dir string   src of project to validate (default "./")
  -h, --help         help for validate
```

## space version

Space CLI version

```
space version [flags]
```

### Options

```
  -h, --help   help for version
```

## space version help

Help about any command

### Synopsis

Help provides help for any command in the application.
Simply type version help [path to command] for full details.

```
space version help [command] [flags]
```

### Options

```
  -h, --help   help for help
```

## space version upgrade

Upgrade Space CLI version

```
space version upgrade [flags]
```

### Examples

```

1. space version upgrade
Upgrade Space CLI to latest version.
2. space version upgrade --version v0.0.2
Upgrade Space CLI to version 'v0.0.2'.
```

### Options

```
  -h, --help             help for upgrade
  -v, --version string   version number
```


