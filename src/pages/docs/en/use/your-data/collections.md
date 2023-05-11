---
title: Collections
position: 1
layout: "@docs"
---

# Collections

IMAGE

Deta Space offers persistent data storage through **Collections**. An individual Collection is a group of related data — every app in your Space has its own Collection, but you can also create and use Collections that aren’t associated directly with any app (”Headless Collections”). Collections can store text using Deta Base and files with Deta Drive. 

Like Space apps themselves, the data in Collections is yours — it comes with the benefits of end user ownership. Collections feature their own graphical user interfaces to navigate and manage your data. You can read and write data to your Collections through these user interfaces, but you can also use the Deta SDK & HTTP APIs. 

## Deta Base

IMAGE

Deta Base a fully-managed, fast, and secure NoSQL database. Each Collection can contain as many Bases as it needs. Individual Bases are created when they are written to, i.e. storing any data in a Base will create one, if it doesn’t already exist.

Bases in a Collection can be viewed and managed through Base UI. You can also read and write data to any Base in a Collection through the Deta SDK or HTTP APIs.

## Deta Drive

IMAGE

Deta Drive is a fully-managed, secure and scalable file storage service. Each Collection can contain as many Drives as it needs. Individual Drives are created when they are written to, i.e. storing data in a Drive will create one, if it doesn’t exist yet.

Bases in a Collection can be viewed and managed through Drive UI. You can also read and write data to any Base in a Collection through the Deta SDK or HTTP APIs.

## App Collections

Every app gets its own Collection for storing app specific data in Deta Base or Deta Drive — App Collections. App Collections are normally used by the app itself when storing and reading persistent data, with authorization automatically managed by Space. They can also be accessed through the graphical user interfaces for data, SDKs, and HTTP APIs.

App Collections are normally created by the app itself, which stores and reads data from the Collection. Nothing is required on your part, except using the app.

Read more about managing Data Keys for an App Collection and accessing the GUIs for Data.

## Headless Collections

Collections created independent of any app are Headless Collections. These can be useful for all sorts of reasons, usually if you want to use the data [outside of a context on Deta Space (e.g. on Streamlit Cloud](https://docs.streamlit.io/knowledge-base/tutorials/databases/deta-base)). Headless Collections can be created and managed using the Collections App.

To create a Headless Collection, open the Collections app from your Canvas and then click **********************************+ New Collection.********************************** Finally, give your Collection a name to create it.

![Screen Shot 2023-04-26 at 22.08.46.png](Data%20Storage%2069689dbcc4b74fd9a788c2b7c83c53ba/Screen_Shot_2023-04-26_at_22.08.46.png)

Read more about creating a Data Key for a Headless Collection and about the GUIs for Data.

## Data Keys

Manual authorization to Collections happens via ******************Data Keys******************. You can create Data Keys for any Collection. These keys are passed into the SDK or HTTP APIs to authorize reading or writing data. Be careful with your Data Keys — a compromised Data Key compromises a Collection’s data.

Read more about how to use Data Keys in the Developer Documentation with the Deta SDK or HTTP API.

<aside>
🗒️ Autorization to Collections is managed inside of Space apps and when using the graphical user interfaces for Collection data. You don’t need a Data Key.

</aside>

### Data Keys for an App Collection

To manage Data Keys for App Collections, open the app’s Settings from its context menu.

![Screen Shot 2023-04-30 at 23.35.09.png](Collections%209788183462f94503ae3a574353d908dc/Screen_Shot_2023-04-30_at_23.35.09.png)

Navigate to the ********Keys******** tab. If you have any Data Keys, they should be shown. 

**************************************Creating a Data Key**************************************

To create a Data Key, click the **Create new data key** button and give your new key a name.

![Screen Shot 2023-04-30 at 23.38.38.png](Collections%209788183462f94503ae3a574353d908dc/Screen_Shot_2023-04-30_at_23.38.38.png)

![Screen Shot 2023-04-30 at 23.37.01.png](Collections%209788183462f94503ae3a574353d908dc/Screen_Shot_2023-04-30_at_23.37.01.png)

Upon creation, the Data Key is displayed once, so store it somewhere safely.

**************Deleting a Data Key**************

Click the trash icon next to the Data Key you want to delete. Upon confirming, the Data Key you delete is no longer valid.

### Data Keys for a Headless Collection

To manage Data Keys for a Headless Collection, open a Collection from the Collections App. Click ****************************************Collection Settings**************************************** in the top corner. 

![Screen Shot 2023-04-30 at 23.43.07.png](Collections%209788183462f94503ae3a574353d908dc/Screen_Shot_2023-04-30_at_23.43.07.png)

If you have any Data Keys for your Collection, they should be shown. To create a Data Key, click the **Create new data key** button and give your new key a name. Upon creation, the Data Key is displayed once, so store it somewhere safely.

![Screen Shot 2023-04-30 at 23.43.41.png](Collections%209788183462f94503ae3a574353d908dc/Screen_Shot_2023-04-30_at_23.43.41.png)

![Screen Shot 2023-04-30 at 23.45.41.png](Collections%209788183462f94503ae3a574353d908dc/Screen_Shot_2023-04-30_at_23.45.41.png)

**************Deleting a Data Key**************

Click the trash icon next to the Data Key you want to delete. Upon confirming, the Data Key you delete is no longer valid.

## Graphical User Interfaces for Data

Collections feature graphical user interfaces for viewing and managing Collection data in a Base or Drive. Read more about the graphical user interfaces — Base UI and Drive UI.