---
title: Accessing Client IP Address
section: Guides
position: 0
layout: "@docs"
---

You might want to collect some information about the clients accessing your app, like their IP address, which can be useful for analytics or security purposes. However, you might have noticed that when you directly try to access the IP address in your app, you receive `127.0.0.1` or an undefined response due to technical limitations.

Fortunately, there is a workaround that you can use to access the client's IP address. This is by using the [`CF-Connecting-IP` header](https://developers.cloudflare.com/fundamentals/get-started/reference/http-request-headers/#cf-connecting-ip), which is available when using [Cloudflare](https://www.cloudflare.com/) as the DNS provider for your [custom domain](/docs/en/basics/micros#custom-domains) with Cloudflare Proxy enabled. Cloudflare is a content delivery network (CDN) that acts as an intermediary between your website and your visitors, improving the speed and security of your site.

Once you've added your domain to Cloudflare, follow these steps:

1. Open [Canvas](https://deta.space/), click on the three dots (...) at the bottom right of your app's icon and select **Configuration** (or **Settings** if your app has been released) to open your app's settings

2. Click **Add Custom Domain** (in the Domains tab for released apps) and enter your domain name (e.g. `app-name.example.com`)

3. Go to the DNS settings in your [Cloudflare Dashboard](https://dash.cloudflare.com/) and add the required records. Make sure that **Cloudflare Proxy** is enabled when adding the A record.

![Cloudflare Proxy](/docs_assets/guides/accessing-client-ip-address/cloudflare-proxy.png)

> Make sure to change your SSL/TLS encryption mode to **Full** in the [Cloudflare Dashboard](https://dash.cloudflare.com/) before doing this to avoid any unexpected issues

4. Verify that your domain has been added. Now, you can use the `CF-Connecting-IP` header to determine your client's IP address when your app is accessed via the custom domain.

Here's an example of how to access the header in ExpressJS:

```js
app.get("/endpoint", (req, res) => {
  const ipAddress = req.get("CF-Connecting-IP");
  res.send(`Your IP address is ${ipAddress}`);
})
```

It's important to be note that the `CF-Connecting-IP` header can be spoofed, so you should always use additional security measures in conjunction with it.