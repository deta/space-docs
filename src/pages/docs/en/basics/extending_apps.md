---
title: Extending installed apps
section: Advanced
position: 8
layout: "@docs"
---

Space allows developers to extend their apps and write custom integrations in two main ways.

### API Keys

`API Keys` provide you with programmatic access to an installed app's HTTP APIs. Provided a developer has enabled API Keys, you can generate them from the "API Keys" tab in your "Settings" of the installed app.

The keys need to be provided under the `X-Space-App-Key` (case insensitive) header when making HTTP requests to the app.

Follow the specific documentation provided by the developer of the app on how to these APIs.


### Data Keys

`Data Keys` provide you direct access to data created by your installed Space apps. They allow you to read and manipulate your Space apps' data, and can be used to build custom integrations without explicit options (such as API Keys) from the app developer.

However, manipulating the data can result in breaking your app so use the keys with caution.

To generate Data Keys, go to the "Data Keys" tab in your "Settings" for your installed apps.

To use a Data Key, you can provide the key when initializing your `Deta` instance if you are using our official Deta SDKs.

An example in python:

```py
from deta import Deta

deta = Deta('your_data_key_here')
```

You need to create two different instances of `Deta` if you are connecting with two different apps.
Do not overwrite your `DETA_PROJECT_KEY` environment variable with this key, especially if you are building an integration from within a Space app.

If you are not using a Deta SDK, pass this key using the `X-API-Key` header with the [Base HTTP API](/docs/en/reference/base/HTTP#auth) or [Drive HTTP API](/docs/en/reference/drive/HTTP#auth). You need two separate HTTP clients if you want to connect to the data of two different apps.
