---
title: Dealing with data
section: Basics
position: 3
layout: "@docs"
---


## How to store data

In addition to the compute provided Micros, each Deta Space app has its own database and file store services. All the data stored with a Space app is 'sandboxed' within an application instance. By default, this storage not shared across users and it's also not shared between a single user's app instances (interoperability between apps is a planned).

As a result, you can just code your app as if it was only for a single user, without thinking about authentication or data separation.

### Deta Base

To store data, Space apps can use [Deta Base](),  a fully-managed, fast, and secure NoSQL database. Each app can create and use as many Bases as it needs. Base can be accessed using the [Deta Base SDK](/docs/en/reference/base/sdk) or the [Base HTTP API](/docs/en/reference/base/HTTP).

Take a look the the [Base Reference]() on how to use it.

### Drive

To store files, Space apps can use [Deta Drive](), a fully-managed, secure and scalable file storage service for Deta. Each app can create and use as many Drives as it needs. Drive can be accessed using the [Drive SDK](/docs/en/reference/drive/sdk) or the [Drive HTTP API](/docs/en/reference/drive/HTTP).

Take a look the the [Drive Reference]() on how to use it.

## Developing with Base and Drive

During development, you can share data between your local environment and your [project](/docs/en/basics/projects) in Space.

To do so, you need to manually connect your development environment to a project's Bases and Drives by using a "project key".

A project key gives access to Bases and Drives within a project, and can be generated from the "Develop" tab inside your Builder project.

If you are using an official Deta SDK, add this as an environment variable inside your dev environment:

```bash
DETA_PROJECT_KEY=<put_your_project_key_here>
```

The Deta SDKs will detect this key to access your development Bases and Drives.

If you are not using a Deta SDK, pass this Project Key using the `X-API-Key` header with the [Base HTTP API](/docs/en/reference/base/HTTP#auth) or [Drive HTTP API](/docs/en/reference/drive/HTTP#auth).

## Viewing data

Base and Drive both come with a UI where you can easily see, add, update and delete files and data. This UI is available inside Builder in the "Develop" tab under "Project Resources" and also through your Builder instance on your Canvas (click the `...` and then `View Data`).

For detailed guides, see the specific documentation for [Base UI](/docs/en/reference/base/base_ui) and [Drive UI](/docs/en/reference/drive/drive_ui).