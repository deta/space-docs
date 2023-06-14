---
title: Collections
layout: "@layouts/DocsPageLayout.astro"
---

![collections-headline](/docs_assets/use/collections-headline.png)

Deta Space offers persistent data storage through **Collections**. An individual Collection is a group of related data.

Every app in your Space has its own Collection — [App Collections](#app-collections). You can also create and use Collections that aren’t associated directly with any app — [Headless Collections](#headless-collections). Collections can store structured text using [Deta Base](#deta-base) and files with [Deta Drive](#deta-drive).

Like Space apps themselves, the data in Collections is yours — it comes with the benefits of end user ownership. Collections feature their own [graphical user interfaces](/docs/en/use/your-data/guis) to navigate and manage your data. You can read and write data to your Collections through these user interfaces, but you can also use the [Deta SDK](/docs/en/build/reference/sdk/about) & [HTTP APIs](/docs/en/build/reference/http-api/about) with [Data Keys](#data-keys).

## App Collections

Every app gets its own Collection for storing app specific data in Deta Base or Deta Drive, collectively "App Collections". App Collections are used by apps when storing and reading persistent data, with authorization automatically managed by Space. Nothing is required on your part, except using the app.

## Headless Collections

Collections created independent of any app are Headless Collections. These can be useful for all sorts of reasons, usually if you want to use the data outside of a context on Deta Space ([e.g. on Streamlit Cloud](https://docs.streamlit.io/knowledge-base/tutorials/databases/deta-base)). Headless Collections can be created and managed using the Collections App.

### The Collections App

Headless Collections can be created and managed through the Collections App, which is accessible from your Canvas.

<div style="display:flex; justify-content: center;"><img style="border-radius: 5px; width: 90%; max-width: 250px;" src="/docs_assets/use/collections-app.png"/></div>

To create a Headless Collection, open the Collections app from your Canvas and then click **+ New Collection**. Finally, give your Collection a name to create it.

![collections-1](/docs_assets/use/collections-1.png)

## Deta Base

Deta Base a fully-managed, fast, and secure NoSQL database. Each Collection can contain as many Bases as it needs. Individual Bases are created when they are written to; storing any data in a Base will create one, if it doesn’t already exist.

Bases in a Collection can be viewed and managed through [Base UI](/docs/en/use/your-data/guis#base-ui). You can also read and write data to any Base in a Collection through the [Base SDK](/docs/en/build/reference/sdk/base) or [Base HTTP API](/docs/en/build/reference/http-api/base).

## Deta Drive

Deta Drive is a fully-managed, secure and scalable file storage service. Each Collection can contain as many Drives as it needs. Individual Drives are created when they are written to; storing data in a Drive will create one, if it doesn’t exist yet.

Drives in a Collection can be viewed and managed through [Drive UI](/docs/en/use/your-data/guis#drive-ui). You can also read and write data to any Base in a Collection through the [Drive SDK](/docs/en/build/reference/sdk/drive) or [Drive HTTP API](/docs/en/build/reference/http-api/drive).

## Data Keys

Authorization to Collections happens via **Data Keys**. You can create Data Keys for any Collection. These keys are passed into the SDK or HTTP APIs to authorize reading or writing data. Be careful with your Data Keys — a compromised Data Key compromises a Collection’s data.

Read more about how to use Data Keys in the Developer Documentation with the [Deta SDK](/docs/en/build/reference/sdk/about) or [HTTP API](/docs/en/build/reference/http-api/about).

> 🗒️ Autorization to Collections is automatically managed inside of Space apps and when using the graphical user interfaces for Collection data. You don’t need a Data Key.

### Data Keys for App Collections

To manage Data Keys for an app's Collection, open the app’s Settings from its context menu.

<div style="display:flex; justify-content: center;"><img style="border-radius: 5px; width: 90%; max-width: 250px;" src="/docs_assets/use/collections-2.png"/></div>

Navigate to the **Keys** tab. If you have any Data Keys, they should be shown.

##### Creation

To create a Data Key for an app's Collection, click the **Create new data key** button and give your new key a name.

<div style="display:flex; justify-content: center;"><img style="border-radius: 5px; width: 90%; max-width: 500px;" src="/docs_assets/use/collections-3.png"/></div>

Upon creation, the Data Key is displayed once, so store it somewhere safely.

<div style="display:flex; justify-content: center;"><img style="border-radius: 5px; width: 90%; max-width: 500px;" src="/docs_assets/use/collections-4.png"/></div>

##### Deletion

Click the trash icon next to the Data Key you want to delete. Upon confirming, the Data Key you delete is no longer valid.

### Data Keys for a Headless Collection

To manage Data Keys for a Headless Collection, open a Collection from the Collections App. Click **Collection Settings** in the top corner.

![collections-5](/docs_assets/use/collections-5.png)

If you have any Data Keys for your Collection, they should be shown.

##### Creation

To create a Data Key, click the **Create new data key** button and give your new key a name.

<div style="display:flex; justify-content: center;"><img style="border-radius: 5px; width: 90%; max-width: 500px;" src="/docs_assets/use/collections-6.png"/></div>

Upon creation, the Data Key is displayed once, so store it somewhere safely.

<div style="display:flex; justify-content: center;"><img style="border-radius: 5px; width: 90%; max-width: 500px;" src="/docs_assets/use/collections-7.png"/></div>

##### Deletion

Click the trash icon next to the Data Key you want to delete. Upon confirming, the Data Key you delete is no longer valid.

## Graphical User Interfaces

Collections feature graphical user interfaces for viewing and managing Collection data in a Base or Drive.

Read more about the Space GUIs for data [here](/docs/en/use/your-data/guis).