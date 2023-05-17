---
title: Working with Projects
position: 2
layout: "@docs"
---


## What’s a Project?

When building apps for Space, the first thing you start with is a **Project**. A Project is where you build, test, and release apps it to the public. Projects in Space live inside [Builder](/docs/en/build/fundamentals/development/builder), a system application in every developer’s Space for building and managing other Space apps.

##  Creating a Project

> 💡 For a complete beginners guide checkout our “New App” page.

You can create new a new Project using the [Space CLI](/docs/en/build/fundamentals/space-cli). To create a new Builder Project with the Space CLI, open a new terminal, navigate into a new directory (or the directory of app you want to push to Space) and run the `space new`  command:

```
space new
```

Enter a name for your Project when prompted. The Space CLI should try to detect code in your local directory, written in any language or framework compatible with the [Space Runtime](/docs/en/build/fundamentals/the-space-runtime/about) via [Deta Micros](/docs/en/build/fundamentals/the-space-runtime/micros). 

> Deta Micros are lightweight serverless compute units inside your app which can be exposed to the world over HTTP.

If found, you can see a bootstrapped configuration generated by the CLI. Here’s an example config for a simple Python app:

```bash
Micro found in "./src"
L engine: python3.9

? Do you want to setup "fast-api-starter" with this configuration? (Y/n)
```

Confirm the generated configuration, if it's correct for your application. The CLI should create a new Project in Builder and generate a [`Spacefile`](/docs/en/build/fundamentals/the-space-runtime/about#the-spacefile) in your local directory. 

This `Spacefile` contains the configuration of your app, used by Deta Space to understand what your app looks like and how to run it. If the bootstrapped configuration failed, you can create your own configuration and [add individual Micros](/docs/en/build/fundamentals/the-space-runtime/micros#adding-micros-via-the-spacefile) using the `Spacefile`.

Additionally, the CLI should create a hidden `.space` directory locally — this contains information about your Project, linking your local directory to Builder. This directory should not be included in your version control and was automatically added to your `.gitignore`.

> Builder doesn’t keep track of your source code, we recommend you use Git as a version control system.
> 

### Project Linking

Your local development environment is connected to Builder via the hidden `.space` directory, which contains a unique identifier: a *Project ID*. When you run `space new`, the Space CLI will automatically connect the local directory via this *Project ID* with a newly created Project in Builder. 

You can also connect any local directory to any existing Builder Project via this **Project ID** and the `space link` CLI command. To do so, navigate to the directory you want to link and enter the command:

```
space link
```

`space link` prompts you to enter a *Project ID.* Entering it links the directory with your Project in Builder via the local `.space` sub-directory. You can get your **Project ID** under the your Project’s “Develop” tab in Builder.

IMAGE OF WHERE TO GET PROJECT ID

## Managing Projects in Builder

Now that you’ve created or linked a project, you can view and manage it inside the Builder app, which can be found on your Canvas in Space.

![builder-1](/public/docs-assets/build/builder-1.png)

Builder will list all your projects, and you can click on any of them to enter their management view.

![projects-1](/public/docs-assets/build/projects-1.png)

Each Project in Builder consists of 3 main pages:

**Overview**: where you see important information about your Project, like its latest Release and recent events.

IMAGE OF OVERVIEW

**Develop**: where you to manage your project’s development. 

The “Overview” sub-tab is where you can access your [Builder Instance](/docs/en/build/fundamentals/development/builder-instance), and see it’s [Logs](/docs/en/build/fundamentals/debugging#runtime-logs). 

IMAGE OF OVERVIEW SUB TAB

The “Data” sub-tab is where you access your Project’s data, which you can view, edit and manage via the [Data GUIs](/docs/en/use/your-data/guis), and [Data Keys](/docs/en/build/fundamentals/data-storage#data-keys).

IMAGE OF THE DATA SUB TAB

The  “Configuration” sub-tab is where you can manage your Builder Instance’s configuration — both **environment variables**, that you can define in your `Spacefile`, and **Custom Domains**.

IMAGE OF THE CONFIG SUB TAB

**Publish**: where you create and manage Releases of your app

IMAGE OF THE PUBLISH TAB