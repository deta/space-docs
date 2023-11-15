---
title: Logs
layout: "@layouts/DocsPageLayout.astro"
---

> 💡 This is a fairly technical feature of Deta Space. If you are not a software developer, you may not get much use out of it.

Your application may log things to the Space system, like unexpected errors you run into as you use your app. You can learn more about what's going on behind the scenes by viewing your app's logs.


<div style="display:flex; justify-content: center;"><img style="border-radius: 5px; width: 90%; max-width:300px;" src="/docs_assets/use/logs-1.png"/></div>

Open your app's context menu from the Horizon and click **View Logs** to open the Logs. If there are any logs, you will see them displayed in the **Runtime Logs** section. Individual logs are expandable by clicking on the `>` on the left side.

<div style="display:flex; justify-content: center;"><img style="border-radius: 5px; width: 90%; max-width:500px;" src="/docs_assets/use/logs-2.png"/></div>

You can filter the logs by individual [Micros](/docs/en/build/fundamentals/the-space-runtime/micros), which are individual “units of compute” the app developer has used to build the app. Clicking the **Refresh** button will pull the latest logs from Space.

In the future, you will be able to share the logs directly with the app developer.