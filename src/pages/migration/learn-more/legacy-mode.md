---
title: Cloud Legacy Mode
position: 1
layout: "@docs"
---


## The Deprecation Plan

On merge day (February 14, 2023), Deta Cloud will enter legacy status and Deta Space will become Deta's main product. A few things will happen concretely:

1. `deta.sh` and `web.deta.sh` will redirect to corresponding pages on `deta.space`.
2. Creating new Projects or new Micros on Deta Cloud will stop working.
3. Existing Projects on Deta Cloud will continue to run, uninterrupted with support until June 1, 2023.
4. Migration for Micros, Bases, and Drives will be strongly recommended and available until June 1, 2023.
5. On June 1, 2023, Deta Cloud Projects will no longer be supported and unmigrated resources will be removed.

How will all this work? 

There is a **Legacy Cloud** app, available through your Deta Space Canvas, for managing Deta Cloud Projects and resources.

There are also **Migration Paths** available (and strongly recommended).

## The Legacy Cloud App

To access your Deta Cloud resources, [log in to Deta Space](https://deta.space/login).

You should see a **Legacy Cloud** app on your Canvas (the icon is the old Cloud UI):

![Legacy Tile](/docs_assets/migration_assets/legacy_mode/legacy-on-canvas.webp)

If you open this app, you'll enter a familiar Deta Cloud Dashboard with some new window dressing:

![Legacy App](/docs_assets/migration_assets/legacy_mode/legacy-dashboard.webp)

In the Legacy Cloud app, you will continue to be able to manage your Deta Projects, including all Micros, Bases, and Drives.

The `deta cli` will continue to function normally, only [`deta new`](https://docs.deta.sh/docs/cli/commands#deta-new) will no longer work. The old [Deta Cloud docs](https://docs.deta.sh/docs/home/) will continue to live until June 1.

## Migration Paths

- To migrate Bases and Drives, [go here](/migration/guides/import-a-project).
- To migrate Micros, [go here](/migration/guides/migrate-a-micro).




