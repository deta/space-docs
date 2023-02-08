---
title: Base UI
position: 5
layout: "@docs"
---

Base UI let's you inspect, add, modify and delete records from a Base via a GUI.

### Opening Base UI

You can open the Base UI of an app instance by opening an app's context menu and clicking "View Data"

<img src="/docs_assets/instance/context_menu.png" alt="drive_ui_1" width="200"/>

In the now open dialog navigate to the "Base" tab and all the data from your Base should load into the table view. 

You can edit individual cells directly, if they do not contain an array or an object. Modified cells will turn yellow.

<img src="/docs_assets/base_ui/base_ui_2.png" alt="base_ui_2" width="500"/>


### Advanced Editing

You can expand any cell if you want to do advanced editing (like the editing of objects and arrays or type changes).

<img src="/docs_assets/base_ui/base_ui_3.png" alt="base_ui_3" width="500"/>

### Queries

If you don't want to deal with all of your data at once, you can use Deta Base's queries to get a filtered view. Click the **Query** button, enter your query, and hit enter or click **Fetch**.

<img src="/docs_assets/base_ui/base_ui_4.png" alt="base_ui_4" width="600"/>


### Adding Items

You can add new items by clicking **+ Add**.

<img src="/docs_assets/base_ui/base_ui_6.png" alt="base_ui_6" width="600"/>

New rows and edited rows will appear in yellow.

You can permanently save these modifications by clicking **Save edits**.

### Deleting Items

To delete items, click on the checkbox(es) for any item(s) and then click the **Delete** button.

<img src="/docs_assets/base_ui/base_ui_7.png" alt="base_ui_7" width="600"/>

### Undoing Changes

You can revert your local changes, restoring the BaseUI state to the last fetch by clicking the **Undo** button.

<img src="/docs_assets/base_ui/base_ui_8.png" alt="base_ui_8" width="300"/>

### Final Notes

We hope you enjoy Base UI!

Base UI is still in Beta; it has been internally tested but may have some uncaught bugs or issues. 
