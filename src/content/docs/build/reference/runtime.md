---
title: The Space Runtime
layout: "@layouts/DocsPageLayout.astro"
---

## Micros

A Space app can contain up to five individual [Micros](/docs/en/build/fundamentals/the-space-runtime/micros). 

Every Micro can contain up to five [Scheduled Actions](/docs/en/build/fundamentals/the-space-runtime/actions#scheduled-actions).

### Technical Specifications for Micros

1. Every Micro you use gets its own sandboxed Linux VM.
2. Each Micro has a key and secret keys set in the environment, these are specific to your Micro and not the Deta system. Make sure to not share them to keep your own data safe.
3. A Micro has an execution timeout of 20s. 
4. 512 MB of RAM is provisioned for *each* execution.
5. Read-only file system. **Only `/tmp` can be written to**. It has a 512 MB storage limit.
6. Invocations have an execution processes/threads limit of 1024.
7. HTTP Payload size limit is 5.5 MB.

### Pre-set Variables

Micros also come pre-set with environment variables, accessible on the server side of every Micro. The following variables are available:

- `DETA_PROJECT_KEY`: a [Data Key](/docs/en/build/fundamentals/data-storage#data-keys)
- `DETA_SPACE_APP`: will be set to `“true”`
- `DETA_SPACE_APP_VERSION`: the app version
- `DETA_SPACE_APP_HOSTNAME`: will be set to the **primary** hostname
- `DETA_SPACE_APP_MICRO_NAME`: your Micro's name
- `DETA_SPACE_APP_MICRO_TYPE`: will be set to `"primary"` if primary otherwise `“normal”`
- `PORT`: the port Space will route requests to on your Micro

### Important Notes for Micros

1. Micros automatically respond to your incoming requests and go to sleep when there's nothing to do. You do not have to manage their lifecycle manually.
2. You (and only you) have access to the VM, which means there's no SSH access.
3. You are supposed to see the VM filesystem, it's not a security vulnerability.
4. We don't believe that Micros will work well with RDMBS like PostgreSQL and MySQL unless you use a pool manager.
5. Micros only support read-only SQLite, which you could deploy with your code.
6. The total upload size of your source code and assets for a single Micro is limited to 250 MB.
7. Dependencies (pip, npm, etc) also can't exceed a combined size of 250MB.
8. For unknown reasons, Google and Firebase packages for Python might not install successfully on Micros.
9. Currently, all requests received by Micros do not contain the client IP addresses. This makes most rate-limiting logic and other IP-dependant logic not work on Micros. But there is a workaround if you are using Cloudflare (link).
10. Websockets and long-running processes do not work on Micros. (examples: socket.io or Discord bots won't work).
