---
title: 'The New Deta Space'
date: '25 Jan 2023'
layout: '@blogs'
description: "We have merged old and new Space into one."
---

<div style="display: flex; justify-content: center;">
<img src="/blog_assets/230125-newspace.webp" style="max-width: 736px; margin: auto;"/>
</div>
<br />

We are excited to announce that we have been working hard on a new and improved version of [Deta Space](https://deta.space). We have completely rebuilt Space from the ground up with a new user interface and infrastructure that will serve as the foundation for the future of Deta and Space. Our goal is to have only one platform, so we can focus on making Space the best possible platform it can be without having to maintain and support multiple different products.

We want to give a huge shoutout to all of you who supported and gave feedback during Space's initial phase. Your trust in us has been invaluable and it helped us shape and improve the platform.



## What Is Changing

You get a completely redesigned UI and [the ability to build apps for yourself and others on Space](https://deta.space/docs/en/introduction/start).

As we merged the old version of Space with the new version, we migrated the apps on Discovery and they will continue to run on the new Space. Your data will not be lost, and you can login with your Deta account on [deta.space](https://deta.space) to find what was migrated to the new Space automatically. While the new UI may take a little getting used to, we are confident that you will feel right at home.

For those who need to access something that was not migrated (some apps not listed on Discovery for example), the old interface will continue to be available at [old.deta.space](https://old.deta.space) **until February 13th, 2023**.

### Improving the Reliability & Security of Your Space Apps

Due to reliability issues and to improve the security of your Space apps, *we changed the way we issue domains for Space apps.*

Under the old system, a Space app was available under `alias.username.deta.app`. This means if you share a link to your Space app, it will expose your Deta username. For some users this may be ok, but we want the default on Space to be as secure and private as possible. We also had to generate one SSL certificate per user, and we've been having reliability issues on this front.

*Going forward, to fix these issues, all Space apps have new a domain in the following format:* `alias-random.deta.app`. Each app gets its own random suffix, which will make it much harder to guess an app's domain. We are also moved from double subdomains to single subdomains. This makes issuing SSL certificates easier and further improves security, as all a user's apps get their own `site`.

**The old domains for every app will continue working exactly the same until February 13th, 2023. After that, we will no longer support old domains. If you are using the old domain in a another client (e.g. browser extension), please update to the new domain before this date, to avoid any issues.**

You can see both the old and new domains for any Space app by clicking the `...` and then `Settings` from an app's card on your Space's Canvas:

<div style="display: flex; justify-content: center;"/>
<img src="/blog_assets/230125-old-domains.webp" style="max-width: 600px; margin: auto;"/>
</div>
<br />

## Moving Forward

This merge is just the first step towards our bigger goal of combining [Deta Cloud](https://deta.sh) - our developer platform - with Space, into one computing platform. We wrote about why we're building Space [here](https://deta.space/motivation/), but will be sharing more details about the merge next week.

In the meantime, developers from the Deta community have already been building awesome apps on the new Space and we encourage you to check out [Deta Discovery](/discovery) to see what they've built. The list of apps is growing rapidly and you can expect more useful and interesting apps to be available soon.

We have lots of exciting and innovative ideas for Space that we'll be working on once the big merge is done, so stay tuned!

Thank you for your support and we look forward to your feedback. If you have any questions or comments about the merge, please reach out to us at [team@deta.space](mailto:team@deta.space) or on [Discord](https://go.deta.dev/discord).
