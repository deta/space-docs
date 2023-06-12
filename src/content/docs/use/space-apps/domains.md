---
title: Domains
layout: "@layouts/DocsPageLayout.astro"
---

A domain name is the address of a website or service on the internet — it’s what you type into your browser to navigate the web. Every space app you install (or build) gets its own unique **Built In Domain** name. You can also add **Custom Domains** that you own to every app.

## Built In Domains

As soon as you install an app, Space will assign it a unique **Built In Domain**. This domain is a *subdomain* under [`deta.app`](http://deta.app). A *subdomain* is kind of like a number on a street, used to locate an address at a granular level. In our case, if `deta.app` is the street, the full address of your app will be `<subdomain>.deta.app`.

The actual `subdomain` your app will get is based on an alias given to the app by its developer, plus a random suffix: `<alias>-<suffix>`. For instance, if the alias of the app you install is `parallel-futures`, your copy may be assigned something like: `parallel-futures-h78bhas.deta.app`.

To view an app’s Built In Domain, click the menu (`...`) from the App’s Tile on your Canvas and open Settings. Then navigate to the Domains tab. You’ll see the Built In Domain at the top, labeled with “Built In Domain”.

<div style="display:flex; justify-content: center;"><img style="border-radius: 5px; width: 90%; max-width:500px;" src="/docs_assets/use/domains-1.png"/></div>

The Built In Domain given to every app will remain as an active address on the internet from the point you install an app until the point you delete it.

## Custom Domains

You can also assign a **Custom Domain** name you own to any app you’ve installed. For example, if you own `deta.pizza` you can use it to address one of your apps. Custom Domains will work alongside the Default Domain assigned to your app; an app will have two valid addresses). If you don’t have your own domain, you can buy one from a domain name registrar such as [Cloudflare](https://www.cloudflare.com/products/registrar/), [Porkbun](https://porkbun.com/), or [Namecheap](https://www.namecheap.com/).

To add a Custom Domain to an app you’ve installed, click the `...` from the App’s Tile on your Canvas to open the Settings menu. Then switch to the “Domains” tab and click “Add Domain”.

<div style="display:flex; justify-content: center;"><img style="border-radius: 5px; width: 90%; max-width:500px;" src="/docs_assets/use/domains-2.png"/></div>

Enter your domain name in the input field, for example [`deta.pizza`](http://deta.pizza). You will be shown two DNS records to add to your Domain via your DNS provider (most likely the registrar you bought your domain from). The DNS records allow you to link your domain to your Space app.

<div style="display:flex; justify-content: center;"><img style="border-radius: 5px; width: 90%; max-width:500px;" src="/docs_assets/use/domains-3.png"/></div>

The two DNS records include both an A record and a TXT record.  The A record links the domain you own to your Space app, while the TXT record is for Space to verify that it’s you setting up the domain. If you are not sure how to add these records to your domain, consult your DNS provider’s documentation or one of the guides linked below.

We will periodically check if your domain has the records setup. Once we detect that it does, we will start serving your app from it.  It may take up to 24 hours for your domain to go live. Once it does, you will see a green “Domain Verified & Active” indicator under your Custom Domain in the Domains tab.

<div style="display:flex; justify-content: center;"><img style="border-radius: 5px; width: 90%; max-width:500px;" src="/docs_assets/use/domains-4.png"/></div>

Custom domains should work with every DNS provider, as well as with Cloudflare’s Caching or CDN features out of the box.

> Custom Domains support most domains ([here is a list of unsupported TLDs](https://help.zerossl.com/hc/en-us/articles/360060119833-Restricted-Countries)).

### **Troubleshooting**

If you are experiencing issues:

- Check if your top level domain is supported ([here is a list of unsupported TLDs](https://help.zerossl.com/hc/en-us/articles/360060119833-Restricted-Countries)).
- Make sure you have added the right DNS records in your DNS settings.
- Check if there is a CAA record set up for your domain. If yes, make sure you have set up the necessary CAA record.
- If you have a CAA record set up for your domain (check your DNS settings or use a tool to check your CAA records), add a record so that we can issue certificates for your domain.

> On the last point, if your domain were [`deta.pizza`](http://deta.pizza), you’d need to add the CAA record `deta.pizza. 3600 IN CAA 0 issue "sectigo.com"`. This record allows us to issue certificates for `deta.pizza` and all subdomains of `deta.pizza`. Replace `deta.pizza` in the example with your domain.

If you run into other issues or if your domain is still not active after more than 24 hours, please reach out to us via [Discord](https://go.deta.dev/discord).