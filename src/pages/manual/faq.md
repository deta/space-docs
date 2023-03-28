---
title: FAQ
position: 2
layout: "@docs"
---

## I forgot my password

If you forgot your password or want to change it, go to [deta.space/forgot_password](https://deta.space/forgot_password) and enter your username. We will send an email containing a reset link to the email address associated with your account.

## How can I build my own app on Space?

If you want to build your own apps on Space, checkout our [developer documentation](/docs) on more information about building for Space.


If your question is not listed here, checkout our [help page](/manual/help) on how to get in touch with us.


## Can I Host a Discord Bot?

Yes, you can, but there are some limitation. Discord bots on Discord can only use interactions, such as slash commands, buttons, context menus, modals, etc.

#### Technical Limitations

Libraries like disocrd.py use websockets to continuously connect discord. However, due to Deta being a serverless platform, requests/connections can remain active for only up to 20 seconds this includes the previously mentioned interactions (If this limit is exceeded, a timeout error will be returned). The time limit can be extended by storing the necessary information (an example of this system can be found in the discohook library).

#### Recommended Libraries
- [Discohook](https://github.com/jnsougata/discohook)
- [Discord Interactions Js](https://github.com/discord/discord-interactions-js)