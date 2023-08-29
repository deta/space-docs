---
title: FAQ
layout: "@layouts/DocsPageLayout.astro"
---

### Why is an `Unauthorized` error thrown when I try to access my app?

By default all apps are private. You can make the entire app or parts of it public by adding the `public_routes` field to the Spacefile. Read more [in the docs](/docs/en/build/fundamentals/the-space-runtime/micros).

### Do Micros support websockets?

Because Micros are serverless compute instances with a 20 seconds maximum lifespan per request, they do not support websockets.

### My Micro timed out, what should I do?

A timeout error means your code took longer than 20 seconds to handle to a request. You can try to speed up your code by optimizing it or rework it so it doesn't need a constant connection.

### Do Micros support Python 3.11?

Supported Python versions in Micros are determined by which versions are available on AWS Lambdas. When a new Python version is added to AWS Lambdas, it will be available shortly in Micros as well. You can check the current supported versions [here](https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html).

### Why am I encountering HTTP error 413 Entity Too Large ?

HTTP error 413 (Entity Too Large) occurs when the request body surpasses our platform's maximum payload limit of 5 MB. To ensure efficient processing and prevent system overload, we recommend reviewing and reducing the size of your data. Splitting large data into smaller chunks can help you stay within the payload limit and maintain optimal performance.

### Why am I encountering HTTP error 502 Bad Gateway ?

HTTP error 502 (Bad Gateway) typically occurs due to code issues or syntax errors that prevent the Micro from starting. Additionally, serving a file larger than 5 MB or adding a row to a Base that exceeds 400 KB can also cause this error. To resolve this issue, we recommend reviewing your code and ensuring that it is free of errors. If you are still encountering this error, please contact us on [Discord](https://go.deta.dev/discord).

### What are the limits of a Micro?

Our Micro service is designed with specific resource limits to maintain efficient performance. Each request has a maximum lifespan of 20 seconds and is allocated a maximum of 512 MB of memory. Additionally, the payload size for a request is limited to 5 MB, while the package dependency size must not exceed 250 MB. It is important to note that exceeding any of these limits will result in the termination of the request.

### Can I host a bot on Space?

Yes! Webhook-based bots that respond to HTTP requests can be easily deployed on Space. However, bots that require persistent connections with services or APIs would be unable to function properly on Deta Space micros due to the timeout limit of 20 seconds, which would terminate any process running on the micro after 20 seconds.

We recommend using the following libraries for hosting bots on Space:

- [Discohook](https://github.com/jnsougata/discohook) (Discord)
- [grammY](https://grammy.dev/) (Telegram)
- [aiogram](https://github.com/aiogram/aiogram) (Telegram)

### What are the limits of Deta Base?

Bases do not have a limit on the number of rows they can store, but each row is limited to 400 KB in size. Numbers are limited to 16 digits for both integers and floating-points. Although our platform offers unlimited storage, it is primarily designed to cater to small to medium-sized projects.

### What are the limits of Deta Drive?

Drives currently have a global limit of 10 GB per account.

### My domain verification is pending, what should I do?

Domains can take up to 24 hours to be verified. If it takes longer than that, make sure you have followed the steps mentioned [here](/docs/en/use/space-apps/domains) correctly. If you still face issues, please contact us on [Discord](https://go.deta.dev/discord).
