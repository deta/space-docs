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

## `space push`

You can use `space push` to push your changes to Space and create a new revision.

Optional args:

- `-d, --dir` string: src of project to push (default "./")
- `-i, --id` string: project id of project to push
- `-t, --tag` string: tag to identify this push

```bash
space push
```

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

## `space validate`

You can use `space validate` to validate your [Spacefile](/docs/en/reference/spacefile/) and check for errors.

Optional args:

- `-d, --dir` string: src of project to validate (default "./")

```bash
space validate
```
