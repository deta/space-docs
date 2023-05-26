---
title: Settings
position: 7
layout: "@docs"
---

A Space app’s Settings menu gives you access to a few helpful features and functionalities. To access these, open the app’s context menu from the Canvas and then click Settings.

![settings-1](/public/docs-assets/use/settings-1.png)

## General Settings

The first tab within an app’s settings will show you what version of an app you are using, while also providing an option to delete the app from your Space.

![settings-2](/public/docs-assets/use/settings-2.png)

### Version

Clicking **View Release** will take you to the Discovery page of the specific Release of the app you are using.

### Deleting your App

You can also delete your app by checking the box and then clicking **Delete**. This will remove the app from your Space and erase all associated data in the app’s Collection. 

*Make sure you are sure before proceeding with a deletion, as this action is irreversible.*

## Keys

The keys tab will let you create and manage any keys associated with your app, which can include **Data Keys** and **API Keys**. 

![settings-3](/public/docs-assets/use/settings-3.png)

Data Keys allow you to programmatically interact with the data in your app’s Collection using the Deta SDKs or Collections HTTP APIs. Read more about Data Keys [here](/docs/en/use/your-data/collections#data-keys).

API Keys allow you to securely interact with your app’s own HTTP APIs using a different client than Deta Space itself: like another Space app, a rest client like Postman, or another server entirely. If the app’s developer has not enabled API Keys, this section will not show up. Read more about API Keys [here](/docs/en/use/your-data/using-apps#api-keys).

### Creating Keys

To create a key of either type, click the pink **Create key** button. You will be asked to give your key a name, and then you will be shown your key. You will only see it once, so make sure to store it somewhere safely. *If your key gets compromised, this can compromise your app and your data.*

![settings-4](/public/docs-assets/use/settings-4.png)

### Deleting Keys

If you have created any keys, they will be displayed with their key name and a timestamp indicating when you created them. 

If you want to delete a given key, click the trash icon and confirm on the following modal to delete your key. Deleting a key will invalidate it — if you are using a key elsewhere, it will fail.

![settings-5](/public/docs-assets/use/settings-5.png)

## Domains

The domains tab is where you manage the domains for your Space app. 

![settings-6](/public/docs-assets/use/settings-6.png)

Read more about Domains [here](/docs/en/use/space-apps/domains).

## Configuration Variables

Your app may have **Configuration Variables**, in which case the **Configuration** tab will appear in your app Settings. Configuration Variables are user specific inputs — often confidential — that an app may use to offer certain features. 

To update a Configuration Variable, enter the value in the input box corresponding to a give variable. Unsaved changes will be marked in yellow. Clicking **Save Changes**, will update the Configuration Variables of your app and allow you to use the features that rely on these variables.

![settings-7](/public/docs-assets/use/settings-7.png)


> 🗒️ Configuration Variables are often API Keys for an external service, for example an Open AI API Key. In this case, it’s a win-win: developers don’t have to pay for a user’s usage of the service, while the user can talk with a service and their own data directly, forgoing the need for the developer as an intermediary.