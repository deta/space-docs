---
title: Anatomy of a Space app
section: Introduction
position: 4
layout: "@docs"
---

As explained in the our introduction to the [personal cloud](/docs/en/introduction/personal-cloud), a personal cloud app does not run centrally for all users, but rather each user gets their own sandboxed copy of the app running in their own cloud. 

Consequently, this means that any personal cloud app is not available at a single endpoint for all users, instead there are many self-contained instances of the app available on their own endpoints, each living in a user's own cloud.

On Deta Space, personal cloud apps ("Space Apps") consist of different Deta cloud services that work together. 

## Computing with Micros

The 'brains' of an app are made up of what are called [Micros](/docs/en/basics/micros#whats-a-micro). A Micro is essentially a lightweight runtime capable of running different frameworks and languages. Micros are exposed via an HTTP endpoint. Micros within the same app can talk to one another.

## Storing and retrieving data

In addition to the compute provided by Micros, each app instance also has its own database called [Base](/docs/en/basics/data#base) and file store called [Drive](/docs/en/basics/drive#base). This data is sandboxed at the level of a single copy of the app; the data is separate from both other apps belonging to the same user and other users' copies of the same app. Nonetheless, the data is shared between all Micros inside a single copy of an app. 

As a Space app developer, you'll code your app slightly differently than you would on the '[public cloud](/docs/en/introduction/personal-cloud#the-public-cloud)'. The good news is you do not have to worry about data separation or user authentication & authorization. You will end up writing a lot less code; you can code your app as if there is only one user, where auth 'just works'.

## Resource limits

A single app can consist of up to five Micros and an unlimited number of Bases and Drives. All these resources do not have to be created. Micros can be defined in your [Spacefile](/docs/en/reference/spacefile), while Bases and Drives can be created by your app during runtime.

On the public cloud, as a developer, you would pay and take responsibility for the resources 3rd party users consume through an app you wrote. On the personal cloud, this is completely different: the resources live with the users, so you do not need to worry about either.

## Developing and releasing your app

During development, you have access to a [Builder instance](/docs/en/basics/revisions#testing-changes) of your app. This instance gets continuously updated with your latest changes as soon as you push them to Deta. You can use this instance in Deta Space before "releasing" it.

On the personal cloud, Space apps are not "deployed" once, but they are "[released](/docs/en/basics/releases)". People can install releases of a Space app in their own Space.
