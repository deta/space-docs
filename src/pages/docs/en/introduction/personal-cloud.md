---
title: The personal cloud
section: Introduction
position: 2
layout: "@docs"
---

## What is the personal cloud?

The ‘personal cloud’ is pretty simple conceptually. It is just a departure from the common model of web application development on 'public cloud'. 

### The public cloud

In a public cloud application, end users of an app by-and-large share infrastructure resources: servers, databases, file stores, etc. These resources are controlled by (and operated by) the providers of the web application, and accessed by end users when they login to the app.

<div style="display: flex; flex-direction: column; width: 100%; align-items: center;">
<img src="/docs_assets/public_cloud.png" width="500px" />
<div style="max-width: 100%; white-space: pre-wrap; word-break: break-word; caret-color: rgb(55, 53, 47); font-size: 14px; line-height: 1.4; color: rgba(55, 53, 47, 0.65); padding-top: 6px; padding-bottom: 6px; padding-left: 2px;" data-content-editable-leaf="true" contenteditable="false">Public cloud application architecture</div>
</div>

In this model, if the provider of the app shuts down this infrastructure, the user loses access. Meanwhile, the user can't directly delete their trace data, as it is in the provider's hands.

### The personal cloud

The personal cloud is a return to the personal computer model of applications, but in the cloud. Instead of one giant shared pool of resources for all users, *each user gets their own complete and sandboxed cloud application instance, consisting of the resources needed to power their app.*

<div style="display: flex; flex-direction: column; width: 100%; align-items: center;">
<img src="/docs_assets/personal_cloud.png" width="500px" />
<div style="max-width: 100%; white-space: pre-wrap; word-break: break-word; caret-color: rgb(55, 53, 47); font-size: 14px; line-height: 1.4; color: rgba(55, 53, 47, 0.65); padding-top: 6px; padding-bottom: 6px; padding-left: 2px;" data-content-editable-leaf="true" contenteditable="false">Personal cloud application architecture</div>
</div>

In this case, the users control the infrastructure which runs the app.  We think this shift solves a number of hairy problems for developers and users.

## 0 Infrastructure, ∞ Scale

Due to the personal cloud architecture, each user owns their own infra. What this means for you as a developer, *is that you have effectively 0 infrastructure burden, no matter how many users your app scales to.* No servers or DBs to manage, secure, or maintain. All you need to do is build your application logic. 

## Distribution

We've discovered two routes in which we think the personal cloud model improves application distribution today:


1. When a developer has built an application, but wants nothing to do with building auth layer or managing any infrastructure. These applications are really cool demo apps, or even use something like local storage for data persistence, but they aren't reaching their full potential for end users. We think these apps find a happy channel to end users on a personal cloud.
2. Where users really need to their own copy of an app for whatever reason. As it stands now, self hosting applications fill this niche, but it’s a niche: it requires a lot of time consuming expertise on the part of end users. With the personal cloud, we think many of the benefits of self-hosting are made accessible, which loops back to benefit app developers’ distribution possibilities.

## Turn-key payments (planned for Space)

Developers have told us two things about taking their app to the next level:

1. They'd like to add some type of paywall & earn money once they start bringing external users onboard
2. Payments work — in and of itself — is fuss-y, infra like work. App devs would rather not do it.

So we thought about it, and wondered:
- Why should multiple app developers all have to implement a similar payment system into their app?
- Why should application users have to give billing information to every app they want to buy?

We think we can solve these problems with Deta Space, removing the payments work, just like we do for the other infra work. As a developer, we'd like you to have 'turn key' payments. Ideally you turn on a pricing knob, select a pricing model, provide your payment information and Deta will send you money every month. 

## Control & interoperability (planned for Space)

On the personal cloud, we think control of the app and data is the biggest draw for end-users. This helps ensure that apps keep working if an app's developer decides to call it quits, while also providing privacy advantages. 

For *users who are also developers*, we think control is a huge win, for an additional reason. This is because developers are fundamentally hackers and tinkerers who turn ideas into software, and personal computing fundamentally empowers them to do this. With personal control over apps and data, developers can hack and tinker their apps and data into more apps and data. We think this will allow developers to discover new frontiers in their own computational lives, paving the way for everyone else.

Build your first app on the personal cloud with Deta Space [here](/docs/en/introduction/first-app).
