---
title: Run a Next App
section: Quickstart Guides
draft: true
position: 0
layout: "@docs"
---

If this is your first time building an app for Space, make sure to read the [Personal Cloud Intro](/docs/en/introduction/personal-cloud) first and take a brief look at the [Anatomy of a Space app](/docs/en/introduction/app-anatomy) to understand how Space differs from other platforms and what it has to offer.

In this guide we'll learn how to launch a Next application on Deta Space.

## The application

For this guide we will use a simple "Hello World" Next app. 

TODO: show how to create a sample next app and how to run it locally

## Install the Deta CLI and login

Now we are ready to launch our app to Space which means we will need the Deta CLI. If you've already installed it, just carry on. If not, checkout our [installation guide](/docs/en/basics/cli).

## Create a Builder Project

We can create a new project inside our local directory with the `deta new` command:

```bash
deta new 
```

The CLI will ask you for your project’s name and will try to detect which framework or language you are using based on your source code. It will show you the configuration it detected for your app and prompt you to confirm it. In our case it correctly indentified our Next app.

After confirming it will create a new project with Builder and generate a `space.yml` file in your local directory:

```yaml
v: 0
micros:
  - name: app
    src: ./src
    engine: next
```

This file contains the configuration of your app which is used by Space to understand what your app looks like and how to run it.

As you can see above it added a single [Micro](/docs/en/basics/micros#whats-a-micro) to our project.

## Configuring our Micro

You can find more information about the properties of `space.yml` file in the [Spacefile Reference](/docs/en/reference/spacefile).

TODO: show how to configure this micro

## Pushing to Space

Now that we have created our project we can push our local changes to Space.

We will once again use the CLI to do this:

```yaml
deta push
```

This will package and upload all the necessary files and create a new [revision](/docs/en/basics/revisions#whats-a-revision). A revision is a complete package of your app at a single point in time. New revisions are created with each push. You can view this new revision by opening your project inside Builder. It will be shown on the "Develop" tab.

## Creating a release

The last step is to create a [release](/docs/en/basics/releases) out of our revision. A release makes your app installable to others.

TODO: use the CLI instead of builder

To do this head to the “Publish” tab in Builder and click “Create new release”.

There you can select a revision (choose the latest one in our case) and enter a version/tag. Since this is our first release we will call it `v1.0`. On the next page you can add a short description and listing text to this release. This will be shown on the [Discovery]() page before users will install your app. Once you are happy with everything hit “Release” and watch your app take off! 

You can share the release link with anyone you want and they will be able to install your app inside their Space.

Welcome to the Detaverse! 🚀