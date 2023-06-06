---
title: Deta HTTP API
layout: "@layouts/DocsPageLayout.astro"
---

The Deta HTTP API let's you to store and retrieve data from your Deta Base or Deta Drive in a [Collection](/docs/en/use/your-data/collections), directly over HTTP. 

Deta provides HTTP APIs for [Base](./base) and [Drive](./drive).

## Authentication

A [Data Key](/docs/en/use/your-data/collections#data-keys) _must_ to be provided in the request **headers** as a value for the `X-API-Key` key for authentication. This is how we authorize your requests.

Example `'X-API-Key: a0abcyxz_aSecretValue'`.

> Data Keys were called Project Keys in earlier versions of Deta.