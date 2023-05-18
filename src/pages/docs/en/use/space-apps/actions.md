---
title: Actions
position: 4
layout: "@docs"
---

# Scheduled Actions

Apps themselves, like Teletype, can have **************Actions**************. These Actions are specific functionalities an app provides. Actions can do really anything an app developer dreams up, like sending automated emails or collecting and cleaning up data. But the app developer has to purposely configure Actions for them to exist.

Once configured, application Actions can be executed by different **Triggers**. Currently, the only Trigger for Actions are ****************Schedules, which tell your app to perform Actions on a specific schedule. 

If a developer creates a Scheduled Action for an app, they can choose a default interval. This means when you install an app, its Scheduled Actions are automatically set to run on this  interval. 

### Managing Schedules

As a user, you can change a Scheduled Action’s interval or disable a Scheduled Action entirely.  To manage the Scheduled Actions of an app, open the App’s Settings menu via the menu on that app’s Tile on Canvas.

![Screen Shot 2023-04-06 at 23.14.53.png](Scheduled%20Actions%2084c21436d4764de0b4bf64c798d48017/Screen_Shot_2023-04-06_at_23.14.53.png)

Then switch to the “Schedules” tab (it won’t be there if there are no Scheduled Actions for the app). In the “Schedules” tab you will see a list of the Scheduled Actions for that app. There will also be a toggle indicating if the Action is enabled, what interval it’s set to, and when it will run next. 

![https://deta.space/docs_assets/schedules/schedule-view.png](https://deta.space/docs_assets/schedules/schedule-view.png)

If an action is enabled, you’ll see a “Configure” button which can be used to change the 
interval.

### Modifying a Schedule

Click the “Configure” button on the Action you want modify. You will be shown options  for intervals ranging from minutes to months.

![Screen Shot 2023-04-06 at 23.19.04.png](Scheduled%20Actions%2084c21436d4764de0b4bf64c798d48017/Screen_Shot_2023-04-06_at_23.19.04.png)

When you select and modify the interval, the UI will show you when the Action would run next. 

![Screen Shot 2023-04-06 at 23.20.07.png](Scheduled%20Actions%2084c21436d4764de0b4bf64c798d48017/Screen_Shot_2023-04-06_at_23.20.07.png)

Once you are happy, click “Save Schedule” and wait for your Action to run next.