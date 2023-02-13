---
title: Migrate Bases & Drives
position: 1
layout: "@docs"
---


> 💡 This guide is designed specifically for those who have prior experience with Deta Cloud. It provides instructions on how to import Bases and Drives from a Deta Cloud Project to Deta Space. **If you're looking to simply learn about Deta Space, it's recommended to read the [new documentation](https://deta.space/docs).**


## Deta Collections

Deta Collections is a new product on Deta Space for *data*. Collections let you store structured data in a Deta Base, or files in a Deta Drive. 

### Collections and Cloud Projects

Collections are very similar to *Projects* - the top level abstraction in Deta Cloud. Deta Cloud Projects contain Bases, Drives, and Micros. The key difference between Collections in Deta Space and Projects in Deta Cloud is that Collections don't include Micros.

With Collections, you can still store data straight to a Collection over HTTP, or you can use the [Deta Base](https://deta.space/docs/en/reference/base/sdk) or [Deta Drive](https://deta.space/docs/en/reference/drive/sdk) SDKs - all you have to do is pass the Collection's **Data Key** to authenticate against a Collection (this key was called a **Project Key** on Deta Cloud).

## Importing Projects into Collections

We've created a tool that allows you to import a Deta Cloud Project straight into Deta Collections on Space in a few clicks.

What this means concretely:
- All of your data from your Deta Cloud Project will move into a Collection
- Your data will remain continuously available
- Your **Project Keys** from Deta Cloud will continue to work as **Data Keys**
- Your Micros will remain usable through the [Cloud Legacy App]() until May 1
- Your data will not be deleted when Cloud is sunset on May 1

We strongly encourage you to move your data into Collections, as Deta Cloud Projects will not be supported after May 1, 2023 (unmigrated Project resources will get removed).

Sound good? Let's migrate a Deta Cloud Project into a Collection.

## 4 Steps to import a Collection

#### 1. Click on the Deta Collections app from your Space Canvas

![Canvas](/migration_assets/migrate_to_collections/collections-0.webp)

#### 2. Create your first Collection

![Create First Collection](/migration_assets/migrate_to_collections/collections-1.webp)

This is a necessary step to getting started with Collections, but the Collection you create isn't related to the Collection you'll be importing from a Project in Deta Cloud. You'll need to give your Collection a name. Then click **"Go Back"** in the top left corner. 

This will launch the Collections home page, where you can import a Project from Deta Cloud.

> ⚠️ **Don't give your first Collection the name of a Cloud Project you're planning to import. If you do, you'll be forced to change the name of your Cloud Project when you import it.**


#### 3. Click the import Cloud Project button

![Import](/migration_assets/migrate_to_collections/collections-2.webp)

#### 4. Select the project to import

![Selector](/migration_assets/migrate_to_collections/collections-3.webp)


That's it - after you hit the "Import Project" button, your Collection will be imported from Cloud and you can start using it. 

Read about [Collections in the Manual](https://deta.space/manual/features/collections) for more on opening and using your Bases and Drives.

> 💡 The [User Manual](https://deta.space/manual) is a guide for using Space, and is different from the [Developer Documentation](https://deta.space/docs), which serves as a guide for building for Space.


### Project Micros

After you import a Collection into Space from a Cloud Project, your Micros will remain with the Cloud Project.

You can continute to view them through the [Cloud Legacy App](), and update them through the [Deta CLI](https://docs.deta.sh/docs/cli/commands).

Nonetheless, we encourage you to [migrate your Micros](/migration/guides/migrate-a-micro) into Space well before May 1 to ensure they keep operating.


### During the Migration Period

> ⚠️ During the Migration Period (February 14, 2023 - May 1, 2023), a Collection imported from Deta Cloud will live as both a Collection on Deta Space and as a Project in the [Legacy Cloud]() - even though they won't show up in the Legacy Cloud App's dashboard.

This has a few consequences you should be aware of.

First, if you are reading or writing to Bases or Drives via any **Project Key** in a Deta Cloud Project that has been imported, is that it will be read / written to the imported Collection. 

This includes Micros that talking to Bases and Drives in the same project via the key stored in their environment (if you instantiated the Deta object in the Deta SDK without passing a **Project Key** - i.e. `Deta()` - this is you).

Second, all **Project Keys** in the Cloud Project will be listed as **Data Keys** in the Deta Collection and vice-versa.

