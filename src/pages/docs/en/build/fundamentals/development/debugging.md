---
title: Debugging
position: 6
layout: "@docs"
---

Debugging is an essential part of the development process. You may hit errors when you push to Space or while using your app. Checking the logs will often point you in the right direction.

## Debugging during the push to Space

When you push your code to Deta Space with `space push`, you will receive a stream of logs from the CLI and Space Build Pipeline. You might encounter errors. 

```bash
~ dream-machine % space push
Validating your Spacefile...
❗ Failed to parse Spacefile: unable to parse Spacefile
Error: unable to parse Spacefile
```

Here are some steps you can take to debug the errors:

1. **Check the logs:** The CLI will log any errors it or the Build Pipeline runs into. Checking them will give you an idea of what went wrong.
2. **Check your code:** Check your code for syntax errors. Ensure that all the necessary files and dependencies are included.
3. **Ask for help:** If you cannot identify the issue, don't hesitate to ask for help. You can reach out to the Deta community on Discord for assistance.

## Debugging during runtime

IMAGE OF RUNTIME ERROR

When using your app, you might encounter errors that crash your app, such as undefined variables, syntax errors or runtime errors. Here are some steps you can take to debug these errors:

1. **View your runtime logs:** Space keeps runtime logs for 14 days, which are viewable for every app in your Space.
2. **Check your code:** Check your code for syntax errors. Ensure that all the necessary files and dependencies are included.
3. **Log your errors:** Insert language specific logging statements into your code, to see what values are being passed through your functions. 
4. **Ask for help:** If you cannot identify the issue, don't hesitate to ask for help. You can reach out to the Deta Community on Discord for assistance.

## Runtime logs

Space tracks and stores runtime logs for every app for 14 days after any error or logging event has occurred. These logs are helpful in debugging issues your app may encounter.

You can inspect the logs of your Builder Instance from your Project’s “**Develop**” tab or from your app’s context menu on the Canvas, just like on any other app.  The full error stack traces are expandable, by clicking on any individual log item. Note that there can be up to a ~2 minute delay between an error occurring and when it becomes viewable.

**Logs in your Builder Project** | ****Logs from the Canvas Context Menu

![Screen Shot 2023-04-26 at 10.16.22.png](New%20App%20Guide%20260a946f6baf4706b19233d05db8c1eb/Screen_Shot_2023-04-26_at_10.16.22.png)

Users of your app may also encounter errors you have not anticipated, which they can view by clicking the “**View Logs**” option from the app’s context menu on their Canvas.

## Tips for avoiding errors

Here are some tips on how to avoid errors:

1. Test your code thoroughly before pushing or building.
2. Use a version control system like Git to track changes to your code.
3. Keep your code organized and modular.
4. Use error handling techniques like try-catch blocks to handle errors gracefully.