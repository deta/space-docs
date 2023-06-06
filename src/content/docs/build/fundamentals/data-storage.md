---
title: Data Storage
layout: "@layouts/DocsPageLayout.astro"
---

![data-headline](/docs-assets/use/collections-headline.png)

## Collections

In addition to running compute provided Micros, every Deta Space app is connected to a **Collection**, which offers persistent data storage.

Collections offer two services:

- **Deta Base**: a simple and powerful NoSQL database.
- **Deta Drive:** simple file storage.

All the data stored with a Collection is 'sandboxed' and belongs to the end user of the app. As mentioned in the Authentication section, you can just code your app and store data as if there were only a single user, without thinking about authentication or data separation.

### Deta Base

To store data, Space apps can use **Deta Base**, a fully-managed, fast, and secure NoSQL database. Each app can create and use as many Bases as it needs.

/* tab */

**Node.js**

```jsx
import { Deta } from 'deta';

const deta = Deta();

// spin up a database by giving it a name and writing to it
const db = deta.Base("simple_db");

// store objects
await db.put({name: "alex", age: 77}, "my-key")

// retrieve objects
const item = await db.get("my-key"); // retrieving item with key "my-key"

// fetch objects with complex queries
const { items: myFirstSet } = await db.fetch({"age?gt": 30});
```

/* tab */

**Python**

Base can be accessed using the [Deta Base SDK](/docs/en/build/reference/sdk/base) or the [Base HTTP API](/docs/en/build/reference/http-api/base).

Read the full technical reference for Base [here](/docs/en/build/reference/base).

### Deta Drive

To store files, Space apps can use **Deta Drive**, a fully-managed, secure and scalable file storage service. Each app can create and use as many Drives as it needs.

/* tab * /

**Node.js**

```jsx
// this also works
import { Deta } from "deta";

// Initialize with a Project Key
const deta = Deta();

// You can create as many as you want by naming them
const files = deta.Drive("text-files");

// dump data as a string or Uint8Array or Buffer under a name
await drive.put('hello.txt', {data: "Hello world"});

// get a file by name
const buf = await drive.get("hello.txt");

```

Drive can be accessed using the [Drive SDK](/docs/en/build/reference/sdk/drive) or the [Drive HTTP API](/docs/en/build/reference/http-api/drive).

Read the full technical reference for Deta Drive [here](/docs/en/build/reference/drive).

## Data Keys

Authentication between any client reading or writing data to Base and Drive in a Collection happens via a **Data Key**. Data Keys can be generated for any Builder Project or any Collection — including Collections disconnected from any individual app or Project (”Headless Collections”).

Space automatically manages keys for Space apps and for local development with `space dev`, so there is no need to manually generate them. But you can, if you want to interact with your data outside the context of a single Space app or are using a Headless Collection.

/* tab / caret */

**Generating a Data Key for a Builder Project**

From your Builder Project, navigate to the **Develop** tab and the **Data** sub-tab. Click **Manage Data Keys***, then **Create New Data Key** and finally enter a name for your Data Key. You will be shown your new Data Key.

<div style="display:flex; justify-content: center;"><img style="border-radius: 5px; width: 90%;max-width:500px;" src="/docs-assets/build/data-storage-1.png"/> </div>


/* tab / caret */

**Generating a Data Key for an Installed App**

From your Canvas, click your app’s context menu, click **Settings**, and then navigate to the **Keys** tab. Click **Create New Data Key** and finally enter a name for your Data Key. You will be shown your new Data Key. If your app is a Builder Instance, this menu is just another view for all the keys in your Builder Project.

<div style="display:flex; justify-content: center;"><img style="border-radius: 5px; width: 90%;max-width:500px;" src="/docs-assets/build/data-storage-2.png"/> </div>

/* tab / caret */

**Generating a Data Key for a Headless Collection**

Open the Collections app from the Canvas and open the individual Collection you want to generate a Data Key for. Click **Collection Settings** in the top right corner, then click **Create New Data Key**, and finally enter a name for your Data Key.

<div style="display:flex; justify-content: center;"><img style="border-radius: 5px; width: 90%;max-width:500px;" src="/docs-assets/build/data-storage-3.png"/> </div>

You will be shown your new Data Key.

<div style="display:flex; justify-content: center;"><img style="border-radius: 5px; width: 90%;max-width:500px;" src="/docs-assets/build/data-storage-4.png"/> </div>


## Developing with Base and Drive

During development, you can share data between your local environment and your Builder Project in Space. You can use the Deta SDK or HTTP API to talk with Base and Drive in your  Project.

/* tab / caret */

**Using the SDK**

```jsx

const { Deta } = require('deta'); // import Deta

// Initialize with no key
const deta = Deta();

// This how to connect to or create a database.
const db = deta.Base('simple_db');

// store objects
await db.put({name: "alex", age: 77})
```

/* tab / caret */

**Using the HTTP API**

```jsx
const fetch = require('node-fetch');

// pull the environment variable DETA_PROJECT_KEY for authentication
const dataKey = process.env.DETA_PROJECT_KEY;

// Replace these placeholders with your own values
const projectId = dataKey.split('_')[0];
const baseName = 'your_base_name';

const url = `https://database.deta.sh/v1/${projectId}/${baseName}/items`;

const headers = {
  'X-API-Key': dataKey,
  'Content-Type': 'application/json',
};

fetch(url, { headers })
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }
  })
```


Space offers a way to automatically manage **Data Keys** for you with `space dev`, while you can also do it yourself manually.

### Automatic key management

The Space CLI can automatically connect your local development environment with your Space Base & Drive using the [`space dev`](/docs/en/build/fundamentals/development/local-development) command. `space dev` will automatically inject a Data Key into your environment, which the SDK will pick up. If you are using the HTTP API, you can pull this Data Key from the injected environment variable `DETA_PROJECT_KEY`.


### Manual setup

If the automatic set up does not work for your use-case, you can manually set up your local development environment by generating a Data Key in your Builder Project (see the Data Keys section).

Add this as an environment variable inside your dev environment:

```bash
DETA_PROJECT_KEY=<put_your_data_key_here>
```

The Deta SDKs will detect this key to access your development Bases and Drives.

> We call these keys “Data Keys”, but the SDKs still refer to them as “project keys” for backwards compatibility reasons. Both of them are the same keys.
>

If you are not using a Deta SDK, pass this Data ey using the `X-API-Key` header with the [Base HTTP API](/docs/en/build/reference/http-api/base#auth) or [Drive HTTP API](/docs/en/build/reference/http-api/drive#auth).

## Headless Collections

You can also use Base or Drive to store data in a Collection, without creating a Space app. This is referred to as a **Headless Collection**. You can programmatically interact with data in a Headless Collection via the Deta SDKs and HTTP APIs. This can be useful for all sorts of reasons, for example see this tutorial for storing data in a [Deta Base from Streamlit Cloud](https://docs.streamlit.io/knowledge-base/tutorials/databases/deta-base).

To create a Collection, open the Collections app from your Canvas and then click **+ New Collection.** Finally, give your Collection a name to create it.

<div style="display:flex; justify-content: center;"><img style="border-radius: 5px; width: 90%;max-width:500px;" src="/docs-assets/use/collections-1.png"/> </div>

In this case, you will have to generate a Data Key for authentication, which you can do from the Collection Settings.


## Data GUIs

Base and Drive both come with UIs where you can easily view and edit files and data. These UIs are available inside your Builder Project under the "Develop" tab and "Data" sub-tab. They are also accessible from your Canvas for every app (click the `...` and then `View Data`).

<div style="display:flex; justify-content: center;"><img style="border-radius: 5px; width: 90%;max-width:500px;" src="/docs-assets/build/data-storage-5.png"/> </div>

For detailed guides on using these UIs, see the documentation for [Base UI](/docs/en/use/your-data/guis#base-ui) and [Drive UI](/docs/en/use/your-data/guis#drive-ui).