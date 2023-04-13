---
title: First steps
section: Learn
position: 0
layout: "@docs"
---

curl --location --request POST "https://pingback-3-d8880960.deta.app/api/v1/events" 
	--header "X-API-Key: 957c8b73-cd36-4193-9c15-732265ebd063"
	--header "Content-Type: application/json"
	--data-raw '{
    "project": "default",
    "channel": "default",
    "name": "test.event",
    "title": "Hello from cURL",
    "description": "Welcome to PingBack",
    "icon": "🚀"
}'

Deta is building a new personal computer on the internet, or a "personal cloud", called Deta Space. 

If you're a software developer, Space wants to make it dramatically easier to build and share web applications with the world.

If you're a user, Space wants to bring the freedom of personal computing to your life on the internet. 


## What's a personal cloud and why should I care?

You probably already use web applications that harness the power of the internet, like Google Docs, Figma, or ChatGPT. These apps reach your device via "cloud computers" controlled by the providers of these apps. The personal cloud also supports web applications, but they are fundamentally different. On a personal cloud, when you use an app or store data, the "internet computer" that makes it happen is controlled by you. 

Beyond end-user control, this difference has a few consequences:
- If you're a developer, you won't touch cloud infrastructure as you share what you build with the world.
- The personal cloud can do things that are impossible with traditional computers.

If you're curious, you can read in more detail:
- [What's a personal cloud?](/docs/en/introduction/personal-cloud)
- [Why the personal cloud?](/docs/en/learn/why-personal-cloud)

## What about Deta Space?

Deta Space is Deta's personal cloud. 

With Space, you can build apps for yourself, using languages and frameworks you know and love. Space also supports a growing catalogue of personal cloud software for you to discover and use. If you've built something you want to share, you can publish it to others around the world.

Find out more below:
- [Building for Space](/docs/en/basics/cli)
- Using with Space (coming soon)
- [Publishing with Space](/docs/en/basics/releases)


