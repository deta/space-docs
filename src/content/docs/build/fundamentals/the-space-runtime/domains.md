---
title: Domains
position: 6
layout: "@layouts/DocsPageLayout.astro"
---

A domain name is the address of a website or service on the internet — it’s what you type into your browser to navigate the web. Every space app you install (or build) gets its own unique **Default Domain** name. You can also add **Custom Domains** that you own to every app.

## Default Domains

As soon as you install an app, Space will assign it a unique **Default Domain**. This domain is a *subdomain* under `[deta.app](http://deta.app)`. A *subdomain* is kind of like a number on a street, used to locate an address at a granular level. In our case, if `deta.app` is the street, the full address of your app will be `<subdomain>.deta.app`.

The actual `subdomain` your app will get is based on an alias given to the app by its developer, plus a random suffix: `<alias>-<suffix>`. For instance, if the alias of the app you install is `parallel-futures`, your copy may be assigned something like: `parallel-futures-h78bhas.deta.app`.

To view an app’s Default Domain, click the menu (`...`) from the App’s Tile on your Canvas and open Settings. Then navigate to the Domains tab. You’ll see the Default Domain at the top, labeled with “Default Domain”.

![Screen Shot 2023-04-07 at 11.55.10.png](Domains%20d9deecfadb5648d19b30ff118c0dc8cf/Screen_Shot_2023-04-07_at_11.55.10.png)

The Default Domain given to every app will remain as an active address on the internet from the point you install an app until the point you delete it.

## **Custom Domains**

You can also assign a **Custom Domain** name ****you own to any app you’ve installed. For example, if you own `deta.pizza` you can use it to address one of your apps. Custom Domains will work alongside the Default Domain assigned to your app; an app will have two valid addresses). If you don’t have your own domain, you can buy one from a domain name registrar such as [Cloudflare](https://www.cloudflare.com/products/registrar/), [Porkbun](https://porkbun.com/), or [Namecheap](https://www.namecheap.com/).

To add a Custom Domain to an app you’ve installed, click the `...` from the App’s Tile on your Canvas to open the Settings menu. Then switch to the “Domains” tab and click “Add Domain”.

Enter your domain name in the input field, for example `[deta.pizza](http://deta.pizza)`. You will be shown two DNS records to add to your Domain via your DNS provider (most likely the registrar you bought your domain from). The DNS records allow you to link your domain to your Space app.

![https://deta.space/docs_assets/custom_domains/custom-domain-pending.png](https://deta.space/docs_assets/custom_domains/custom-domain-pending.png)

The two DNS records include both an A record and a TXT record.  The A record links the domain you own to your Space app, while the TXT record is for Space to verify that it’s you setting up the domain. If you are not sure how to add these records to your domain, consult your DNS provider’s documentation or one of the guides linked below.

We will periodically check if your domain has the records setup. Once we detect that it does, we will start serving your app from it.  It may take up to 24 hours for your domain to go live. Once it does, you will see a green “Domain Verified & Active” indicator under your Custom Domain in the Domains tab.

![Screen Shot 2023-04-07 at 12.36.17.png](Domains%20d9deecfadb5648d19b30ff118c0dc8cf/Screen_Shot_2023-04-07_at_12.36.17.png)

Custom domains should work with every DNS provider, as well as with Cloudflare’s Caching or CDN features out of the box.

### **Troubleshooting**

If you are experiencing issues:

- Check if your top level domain is supported ([here is a list of unsupported TLDs](https://help.zerossl.com/hc/en-us/articles/360060119833-Restricted-Countries)).
- Make sure you have added the right DNS records in your DNS settings.
- Check if there is a CAA record set up for your domain. If yes, make sure you have set up the necessary CAA record.
- If you have a CAA record set up for your domain (check your DNS settings or use a tool to check your CAA records), add a record so that we can issue certificates for your domain. If your domain were `[deta.pizza](http://deta.pizza)`, you’d need to add the CAA record `deta.pizza. 3600 IN CAA 0 issue "sectigo.com"`. This record allows us to issue certificates for `deta.pizza` and all subdomains of `deta.pizza`. Replace `deta.pizza` in the example with your domain.

If you run into other issues or if your domain is still not active after more than 24 hours, please reach out to us via [Discord](https://go.deta.dev/discord).

[Adding a Custom Domain with Cloudflare](Domains%20d9deecfadb5648d19b30ff118c0dc8cf/Adding%20a%20Custom%20Domain%20with%20Cloudflare%20d395a4081c8648b095848ea76acdd112.md)

[Adding a Custom Domain with Namecheap](Domains%20d9deecfadb5648d19b30ff118c0dc8cf/Adding%20a%20Custom%20Domain%20with%20Namecheap%20e4419f2e524e49e5bfa1aa00214030b8.md)

[Adding a Custom Domain with Porkbun](Domains%20d9deecfadb5648d19b30ff118c0dc8cf/Adding%20a%20Custom%20Domain%20with%20Porkbun%20fb47243151df44db9ebda728f4c1b05d.md)