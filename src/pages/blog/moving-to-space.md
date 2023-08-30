---
title: "Get Ready for Liftoff: Cloud is Moving to Space"
date: '2 Feb 2023'
layout: '@blogs'
description: "We will be upgrading and merging Deta Cloud into Deta Space on February 14."
---

<div style="display: flex; justify-content: center;">
<img src="/blog_assets/03/01-moving-to-space.webp" style="max-width: 736px; margin: auto;"/>
</div>

Following [our motivation](https://deta.space/motivation/) for building [Deta Space](https://deta.space/) last week, we’d like to follow up with what this means for [Deta Cloud](https://deta.sh/).

***We’ll be upgrading and merging Deta Cloud into Deta Space on February 14.*** 

TL;DR:

- The upgrade includes more runtimes, a brand new UI, and a whole lot more
- Your Deta Cloud projects will continue to be accessible and run until June 1
- We will provide tools and guides to migrate your app from Cloud to Space

For the merge, we’re inviting the community to ship with us in a [***Sprint to Space:***](https://deta.space/blog_assets/sprint-to-space) a chance to get your app in front of 10s of thousands of devs, win galactic Deta goodies, and get a feature on the Deta frontpage.

Read on for more about about our plans for the merge.

## Deta Space — aka "Deta 2.0"

If you’ve come across Space before, it may seem like a radically different idea. And we think it is. But if we zoom out, another way of looking at Space is as a substantial upgrade for Deta Cloud, feature-wise.

### More Runtimes

Many of you love using Deta for the core experience of Deta Micros: a free and easy way to go from a local Python or Node.js code to a live app on a personal domain. 

Deta Space gives you the most requested Deta Cloud feature: a free and easy way to get *many more* runtimes live on an internet url. 

These include:

- Python and Node.js (*including* Node 16 with ES Modules)
- Go (Rust will be supported very soon)
- Simple static apps
- React, Vue, and Svelte
- Next.js, Nuxt, and SvelteKit

It also includes a modifiable “custom” runtime engine, which the community has used to get things like [Deno](https://github.com/MaximilianHeidenreich/SweetForms), [Crystal](https://github.com/tbdsux/space-custom-apps/tree/main/crystal-lang) and [Nim](https://github.com/tbdsux/space-custom-apps/tree/main/nim-lang) live on Space. Check out the [Space documentation to learn more](https://deta.space/docs/en/basics/micros).


### A Modern User Interface

The second most common request from our community is for a modernized User Interface. Here’s how the Deta Cloud UI looks:

<div style="display: flex; justify-content: center;">
<img src="/blog_assets/03/02-cloud-ui.webp" style="max-width: 736px; margin: auto;"/>
</div>
<br />

And here’s Space:

<div style="display: flex; justify-content: center;">
<img src="/blog_assets/03/03-space-ui.webp" style="max-width: 736px; margin: auto;"/>
</div>
<br />

With our move to Space, we are bringing a complete frontend rewrite in Svelte, with a new design system and a brand new [Base UI](https://deta.space/docs/en/reference/base/base_ui). Beyond the new look, we are bringing core UX components — *Canvas* and *Teletype* — that move Space away from a simple dashboard and make it a more friendly, interactive, and personal experience. We've got big plans for them - stay tuned.


### A Whole Lot More

As excited as we are about the new runtimes and UI, we’re even more excited about everything else Space brings to the table - we see it as a whole new model for cloud software. We’ll be talking more about it as we merge, but [check out the apps devs are already building with Space today](https://deta.space/discovery).


## Our Plan for the Merge

We’re planning to merge the two products into one on **February 14th, 2023**. We’re sprinting to get Deta Space to parity with Cloud, feature-wise, and we’ll be launching more features to Space over the next week. 

This is what is concretely planned for the merge.


### Everything on Deta Cloud will Continue to Run

The landing pages on [deta.sh](http://Deta.sh) and [web.deta.sh](http://web.Deta.sh) will redirect to pages on [deta.space](http://deta.space). But the Deta Cloud UI will still be accessible through an application in Deta Space, where you will still be able to view, update and manage all your Deta Cloud projects and resources. The only two things you won’t be able to do is create new Projects or new Micros through Deta Cloud. 

**We will continue to support Deta Cloud projects until June 1 2023, after which we will sunset them.** We are going to provide tools and guides for migrating your resources to Space.


### Deta Base and Drive: meet Collections

We are creating a product for data on Space called Deta Collections. A Collection is similar to a Cloud Project with Bases and Drives, but without Micros. We’ll provide a tool where you’ll be able to automatically move a Deta Cloud Project to a “Collection” (but your Micros will remain in the old UI). Here’s how Collections looks:

<div style="display: flex; justify-content: center;">
<img src="/blog_assets/03/04-collections.png" style="max-width: 736px; margin: auto;"/>
</div>
<br />

Watch out for the Collections announcement next week.


### Migration Guides for Micros

We’ll provide migration guides for moving Micros on Cloud to Space apps with Micros. You’ll have two and a half months to move them before the sunset on **June 1.**

## Final Words

As is usual, shoot us a note on [Discord](https://go.deta.dev/discord) if you've got any questions about the merge.

To everyone who’s been a part of this journey so far: thank you, for the inspiring apps you’ve built, for the feedback you’ve shared, and for your patience with us, as a small team doing our best. You inspire us to keep working on Deta, and we’re excited for you to keep building your dreams, alongside ours.


<div style="display: flex; justify-content: left;">
<img src="/blog_assets/03/signatures.svg" style="max-width: 336px; margin: auto;"/>
</div>
<br />