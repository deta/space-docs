---
title: Dealing with data
section: Basics
position: 4
layout: "@docs"
---


## How to store data

In addition to the compute provided Micros, each Deta Space app has its own database and file storage services. All the data stored with a Space app is 'sandboxed' within an application instance. By default, this storage is not shared across users and it's also not shared between a single user's app instances (interoperability between apps is planned).

As a result, you can just code your app as if it was only for a single user, without thinking about authentication or data separation.

### Deta Base

To store data, Space apps can use [Deta Base](/docs/en/reference/base/about),  a fully-managed, fast, and secure NoSQL database. Each app can create and use as many Bases as it needs. Base can be accessed using the [Deta Base SDK](/docs/en/reference/base/sdk) or the [Base HTTP API](/docs/en/reference/base/HTTP).

Take a look the the [Base Reference](/docs/en/reference/base/about) on how to use it.

### Deta Drive

To store files, Space apps can use [Deta Drive](/docs/en/reference/drive/about), a fully-managed, secure and scalable file storage service for Deta. Each app can create and use as many Drives as it needs. Drive can be accessed using the [Drive SDK](/docs/en/reference/drive/sdk) or the [Drive HTTP API](/docs/en/reference/base/HTTP).

Take a look the the [Drive Reference](/docs/en/reference/drive/about) on how to use it.

## Developing with Base and Drive

During development, you can share data between your local environment and your [project](/docs/en/basics/projects) in Space.

There is two ways to setup the Deta SDK to access the Bases & Drives of your project:

### Automatic setup

The Space CLI can automatically connect your local development environment with your Space project using the `space dev` command. It will generate a data key on the fly, start your Micro using a command you specify in the `Spacefile` and inject the data key into the process the Micro:

```yaml
v: 0
	micros:
	  - name: app
	    src: ./app
	    engine: nodejs16
	    primary: true
	    run: "node index.js"
	    dev: "nodemon index.js"
```

The specified command should start your program or server in development mode. Follow the instructions of the framework you are using. Learn more about developing a Space app locally in our [guide](/docs/en/basics/local).

If your program is started using the `space dev` command, the Base & Drive SDKs should work out of the box without further setup.
If you want to want to run a single command against your Base or Drive, you can wrap it inside a `space exec` call:

```bash
space exec --project <project-id> -- node feed-database.js
```

### Manual setup

If the automatic set up does not work for your use-case, you can manually set up your local development environment by generating a data key from the "Data" tab on the "Develop" page, inside your Builder project.

If you are using an official Deta SDK, add this as an environment variable inside your dev environment:

```bash
DETA_PROJECT_KEY=<put_your_project_key_here>
```

The Deta SDKs will detect this key to access your development Bases and Drives.

If you are not using a Deta SDK, pass this Project Key using the `X-API-Key` header with the [Base HTTP API](/docs/en/reference/base/HTTP#auth) or [Drive HTTP API](/docs/en/reference/drive/HTTP#auth).

## Viewing data

Base and Drive both come with a UI where you can easily see, add, update and delete files and data. This UI is available inside Builder in the "Develop" tab under "Project Resources" and also through your Builder instance on your Canvas (click the `...` and then `View Data`).

For detailed guides, see the specific documentation for [Base UI](/docs/en/reference/base/base_ui) and [Drive UI](/docs/en/reference/drive/drive_ui).
