---
title: FAQ
section: Other
position: 0
layout: "@docs"
---

## Can I host a bot on Space?

Yes! Webhook-based bots that respond to HTTP requests can be easily deployed on Space. However, bots that require persistent connections with services or APIs would be unable to function properly on Deta Space micros due to the timeout limit of 20 seconds, which would terminate any process running on the micro after 20 seconds.

#### Recommended Libraries
- [Discohook](https://github.com/jnsougata/discohook) (Discord)
- [grammY](https://grammy.dev/) (Telegram)