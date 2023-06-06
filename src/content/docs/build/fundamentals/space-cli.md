---
title: The Space CLI
layout: "@layouts/DocsPageLayout.astro"
---

The Space CLI is a command line interface you can use to build apps for Deta Space from a development environment. This page provides instructions for installing and configuring the Space CLI into your development environment.

## Installation


/* tab */

**MacOS**

To install the Space CLI on MacOS, open a Terminal session and enter:

```bash
curl -fsSL https://get.deta.dev/space-cli.sh | sh
```

/* tab */

**Windows**

To install the Space CLI on Windows, open PowerShell and enter:

```
iwr https://deta.space/assets/space-cli.ps1 -useb | iex
```

/* tab */

**Linux**

To install the Space CLI on Linux, open a Terminal and enter:

```bash
curl -fsSL https://deta.space/assets/space-cli.sh | sh
```

This will download the binary which contains the CLI code. It will try to export the `space` command to your path, making the `space` command globally usable on your machine. If it does not succeed, follow the directions output by the install script to export `space` to your path.

## Authentication

Once you have successfully installed the Space CLI, you’ll need to log in to Deta Space.

From a terminal type:

```
space login
```

This command will ask for an ‘access token’ to authenticate your CLI.

```
? Enter access token >
```

To get an access token, enter your [Space dashboard](https://deta.space/), open the Teletype (command bar) and click ‘Settings’:

<div style="display:flex; justify-content: center;"><img style="border-radius: 5px; width: 90%;max-width:400px;" src="/docs-assets/build/cli-1.png"/> </div>

This will open the Settings modal, where you can click ‘Generate Token’ to generate an access token:

<div style="display:flex; justify-content: center;"><img style="border-radius: 5px; width: 90%; max-width:500px;" src="/docs-assets/build/cli-2.png"/> </div>

Copy the resulting token:

<div style="display:flex; justify-content: center;"><img style="border-radius: 5px; width: 90%; max-width:500px;" src="/docs-assets/build/cli-3.png"/> </div>

You can paste this back into your CLI prompt. After you hit enter, you should be greeted by a success message.

```
👍 Login Successful!
```

Upon a successful log-in, you are ready to start building Space apps.

## CLI Reference

Run `space help` to get a overview of the available commands or refer to the [Reference section](/docs/en/build/reference/cli) for a complete list of CLI commands and options.

## Local Development

See the [developing locally](/docs/en/build/fundamentals/development/local-development) page for more information on how to develop your app locally with `space dev`.