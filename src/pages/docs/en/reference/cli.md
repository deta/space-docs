---
title: CLI
section: Reference
position: 0
layout: "@docs"
---

The CLI is a critical tool when building apps for Space. You can use it to create new projects, push changes, create releases and much more.

Take a look at the [Setting up the CLI](/docs/en/basics/cli) guide on how to install and setup the Space CLI.

Below is a reference of commands the Space CLI offers.

## `space help`

Shows the help page

## `space login`

You can use `space login` to login to Space. The CLI will prompt you for an access token which it will use for future executions. Refer to the [Setting up the CLI](/docs/en/basics/cli#authentication) section for more details.

```bash
space login
```

## `space new`

You can use `space new` to create new projects.

Optional args:

- `-n, --name` string: name of the project
- `-d, --dir` string: where is the project (default “./”)
- `-b, -—blank` bool: use this flag to create a blank project and ignore all the prompts

```bash
space new
```

## `space dev`

You can use `space dev` to start a local development server for your project. The cli will start one process for each of your micros, then expose a single enpoints for your space app.

Optional args:

- `-d, --dir`  string: src of project to dev (default “./”)
- `-i, --id`   string: id of the project
- `-H, --host` string: host to run dev server on (default “localhost”)
- `-p, --port` string: port to run dev server on (default “3000”)
- `-o, --open` bool: open dev server in browser after starting

## `space dev up`

You can use `space dev up` to start a single micro for local development.

Optional args:

- `-d, --dir`  string: src of project to dev (default “./”)
- `-i, --id`   string: id of the project
- `-p, --port` string: port to run dev server on (default “3000”)
- `-o, --open` bool: open dev server in browser after starting

## `space dev proxy`

You can use `space proxy` to start a reverse proxy for your micros. The micros will be automatically discovered and proxied to.

Optional args:

- `-d, --dir`  string: src of project to dev (default “./”)
- `-i, --id`   string: id of the project
- `-H, --host` string: host to run dev server on (default “localhost”)
- `-p, --port` string: port to run dev server on (default “3000”)
- `-o, --open` bool: open dev server in browser after starting

## `space dev trigger`

You can use `space trigger` to manually trigger action. Make sure that the corresponding micro is running before triggering the action.

Optional args:

- `-d, --dir`  string: src of project to dev (default “./”)
- `-i, --id`   string: id of the project

## `space push`

You can use `space push` to push your changes to Space and create a new revision. Space will automatically update your Builder instance with the new revision.

Optional args:

- `-d, --dir`   string: src of project to push (default "./")
- `-i, --id`    string: project id of project to push
- `-t, --tag`   string: tag to identify this push
- `-o, --open`  boolean: open builder instance/project in browser after push
- `--skip-logs` boolean: skip following logs after push

```bash
space push
```

If you don't want to follow the logs of the build and update, pass the `--skip-logs` argument which will exit the process as soon as the build is started instead of waiting for it to finish.

Tip: you can use the [`.spaceignore` file](/docs/en/basics/revisions#ignoring-files-and-directories) to exclude certain files and directories from being uploaded during push.

## `space release`

You can use `space release` to create new releases out of revisions.

Optional args:

- `-d, --dir` string: src of project to release (default "./")
- `-c, --confirm` boolean: confirm all prompts and release latest revision
- `-i, --id` string: project id of an existing project
- `-r, --rid` string: revision id for release
- `-l, --listed` boolean: enable listing on Discovery
- `-n, --notes` provide release notes via interactive prompt
- `--notes="<RELEASE_NOTES>"`: provide release notes directly
- `-v, --version` string: version for the release

```bash
space release
```

## `space link`

You can use `space link` to link a directory with a existing project.

Optional args:

- `-d, --dir` string: src of project to link (default "./")
- `-i, --id` string: project id of project to link

```bash
space link
```

## `space exec`

You can use `space exec` to run a command in the context of your project. The project key will be automatically injected into the environment.

Required args:

- `-p, --project`   string: id of the project

## `space open`

You can use `space open` to open your local project in the Builder UI on [deta.space](https://deta.space).

Optional args:

- `-d, --dir` string: directory of project to open (default "./")
- `-i, --id` string: project id of project to open

```bash
space open
```

## `space validate`

You can use `space validate` to validate your [Spacefile](/docs/en/reference/spacefile/) and check for errors.

Optional args:

- `-d, --dir` string: src of project to validate (default "./")

```bash
space validate
```
