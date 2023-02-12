---
title: Migrate Bases & Drives
position: 1
layout: "@docs"
---

## Deta Collections

Collections is a product on Space for *data*. Collections let you store structured data in a Deta Base, or files in a Deta Drive. You can store this data straight to a Collection over HTTP, or you can use the [Deta Base](https://deta.space/docs/en/reference/base/sdk) or [Deta Drive](https://deta.space/docs/en/reference/drive/sdk) SDKs - all you have to do is pass the Collection's **Data Key** (this was called a **Project Key** on Deta Cloud).

Collections are based on the new UI, featuring a brand new Base UI.

## Collections and Cloud Projects

As you may be aware of by now, Collections are very similar to *Projects* on Deta Cloud. The key difference is that Projects had Bases, Drives, and Micros, while Collections don't have Micros.

We've created a tool that allows you to import a Deta Project into Deta Collections. What this means concretely is that:
- All of your Project's data will move into a Collection
- There will be no downtime when moving
- Your Project Keys will continue to work as Data Keys
- Your Micros will remain usable through the [Cloud Legacy App]() until May 1
- Your data will not be deleted when Cloud is sunset on May 1

We strongly encourage you to move your data into Collections, as Deta Cloud Projects will not be supported after May 1 2023 (unmigrated project resources will get deleted).

Sound good? Let's migrate a Cloud Project into a Collection.

## Import a Cloud Project into Collections in 3 Steps

1. Click on the Deta Collections app from your Canvas

2. Create your First Collection

You'll need to give it a name, but don't give it a name you want to use for an imported Cloud Project. Then click "Go Back". This will launch the Collections home page.

3. Click the Import Cloud Project Button and Select a Project

That's it - your Collection is imported from Cloud and you can start using it. 

Read about [Collections in the Manual](https://deta.space/manual/features/collections) for more on opening and using your Bases and Drives.

### Project Micros

After you import a Collection into Space from a Cloud Project, your Micros will remain with the Cloud Project.

You can continute to view them through the [Cloud Legacy App](), and update them through the [Deta CLI](https://docs.deta.sh/docs/cli/commands).

Nonetheless, we encourage you to [migrate your Micros]() into Space well before May 1 to ensure they keep operating.