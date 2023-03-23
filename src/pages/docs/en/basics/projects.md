---
title: Working with projects
section: Basics
position: 1
layout: "@docs"
---

## What's a project?

When building apps for Space, the first thing you will start with is a Space 'project'. A project allows you to start building an app, experiment with different Space features, test if your app works in the Space environment and finally release it to the public so others can start using it.

## Projects in Builder

Projects in Space live inside Builder, an app which can be found on your Canvas. Builder is your toolbox for building an app on Deta Space. It allows you to create new projects and manage them over time.

Each Project in Builder consists of 3 main pages:

- **Overview**: the overview page lets you see important information about your projects like its latest release and recent events

- **Develop**: the develop page allows you to configure and develop your project. Here you have access to your project resources like the development data as well as information about your Builder instance.

- **Publish**: the publish page allows you to create and manage releases of your app

## Creating a Project

You can create new projects using the [Deta Space CLI](/docs/en/basics/cli), which will guide you through the process.

Use the `space new` command to create a new project with the Space CLI:

```sh
space new
```

The CLI allows you to choose from a variety of templates to bootstrap your project or it can automatically set up the right project configuration based on what you have locally.

You will be prompted to enter a name for your project. Next, the CLI will try to detect any existing applications in your local directories. If found, the CLI will show a generated config for those applications.

Once you confirm the generated config, the CLI will create a new project in Builder and generate a [Spacefile](/docs/en/reference/spacefile) file in your local directory. The `Spacefile` contains the configuration of your app, used by Deta Space to understand what your app looks like and how to run it.

Additionally, the CLI created a hidden `.space` directory -- this contains information about the project, linking it to your Builder project. This directory should not be included in your version control and was automatically added to your `.gitignore`.

After you've created a project, you can view it inside the [Builder](/docs/en/basics/projects#projects-in-builder) app, which can be found on your Canvas in Space.

> Builder doesn't keep track of your source code, we recommend you use Git as a version control system.

## Project linking

Your local development environment is connected to Builder via a hidden `.space` directory, which contains a unique identifier: a project ID.

If you first run `space new` in a directory, the Space CLI will automatically connect the local directory via this ID with your newly created project in Builder.

If you ever need to connect an unlinked local directory to a project in Builder, you can use `space link` to link your current directory to the existing project:

```bash
space link
```

The CLI will prompt you to enter your project's ID and will then link your directory with the project on Space. This project ID is accessible in Builder in your project's "Develop" tab.
