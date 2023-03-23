---
title: Pushing changes
section: Basics
position: 5
layout: "@docs"
---

Once you are satisfied with your app locally and want to see your changes in Space, use the [Space CLI](/docs/en/reference/cli) command `space push`:

```bash
space push
```

This command will validate that your `Spacefile` is correct, then package and upload all the necessary files to Deta's build pipeline. It will stream logs to your local terminal during the whole process, so you know what's going on and can debug issues.

Once the build pipeline completes, it will result in a **revision** being created.

## What's a revision

A revision is a complete package of your app at a single point in time. New revisions are created with each push. You can view this new revision by opening your project inside [Builder](/docs/en/basics/projects#projects-in-builder). It will be shown on the **Develop** tab.

A revision can now be used in your Space. It can also be used to [create a release](/docs/en/basics/releases), which you can share with others to install a copy of your app into their own Space!

## Testing changes

To test if your app works in Space, each project comes with your own personal *Builder instance*. This instance of your project is automatically kept up-to-date every time you successfully run `space push`.

The Builder instance is automatically added to your Canvas and can be used like any other app instance. You can also view your Builder instance via your Builder project under the **Develop** tab. Clicking the **Open Builder Instance** will open the instance.

If your Builder instance runs into a runtime error when handling a request, the error logs will be returned in the request's response. All runtime logs, including the error logs, are stored for 14 days and can be viewed in the **Develop** tab of your Builder project under **"Runtime Logs"**. The logs are sorted by time and can be filtered by a specific Micro using the dropdown. Runtime logs can help with debugging Space related errors and mis-configurations of your app.

The Builder instance shares its data with your whole Builder project, which you can [develop against](/data#developing-with-base-and-drive). You can also [view and update this data](/docs/en/basics/data#viewing-data) as you use your app. If you are also [developing your app locally](/docs/en/basics/local) using `space dev` the data will be shared between your local environment and the Builder instance.

## Ignoring files and directories

To exclude certain files and directories from being uploaded during `space push`, use the `.spaceignore` file. It acts similar to a `.gitignore` file, where each line in the file specifies a pattern. All files and directories matching the patterns will be excluded from `push`.

For example, a `.spaceignore` file with the following content `space push` will ignore the `test` and `docs` paths.

```
test
docs
```

Certain directories like the `node_modules` directory for node micros and the `__pycache__` directory for python micros are ignored by default and don't need to be specified in the `.spaceignore` file.

You can use an optional prefix `!` to negate the pattern; any matching file excluded by a previous pattern will become included again.

For eg, a `.spaceignore` file with the following content `space push` will not ignore the `node_modules` directory.

```
!node_modules/
```
