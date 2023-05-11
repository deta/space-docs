---
title: Data GUIs
position: 2
layout: "@docs"
---

# Data GUIs

Both Deta Base and Deta Drive offer graphical user interfaces for you to view and manage your data. You can access Base and Drive UI for data in App Collections, for Headless Collections in the Collections app, and for data in your Builder Project.

# Base UI

The Base User Interface provides a Graphical User Interface (GUI) for text data in Deta Base. You can use Base UI for inspecting, adding, modifying, and deleting records in a Base. 

**App Collection** | Headless Collection | Builder Project

## Opening Base UI

Open an app's context menu and click **View Data** to access the Base UI for an app instance.

![App.png](Data%20GUIs%20252261d2371d45ce86238d2172f121ff/App.png)

![Data-Selected.png](Data%20GUIs%20252261d2371d45ce86238d2172f121ff/Data-Selected.png)

Preview your data and choose from the available databases for your app instance.

![Default.png](Data%20GUIs%20252261d2371d45ce86238d2172f121ff/Default.png)

## Search and Queries

You can search and query your data in Base from the UI.

**Search**

Filter data swiftly using a search keyword. This will search your entire data set for items that contain exact matches to your keyword.

![Search.png](Data%20GUIs%20252261d2371d45ce86238d2172f121ff/Search.png)

**Queries**

You can also use Queries from the Deta Base query language. This lets you run fetch data that match certain conditions, like not equal, contains, greater than, less than, among many others. Just enter a valid query in the input field and click **Run Query** to query your data.

![Query.png](Data%20GUIs%20252261d2371d45ce86238d2172f121ff/Query.png)

Read the complete documentation for Base Queries here.

## Editing you data

<aside>
⚠️ Be careful editing your data for an App Collection, this can break your app. Be especially careful when changing the type of any individual field.

</aside>

You can edit your data for any app Collection. Activate **Edit Mode** by toggling the switch.

![On.png](Data%20GUIs%20252261d2371d45ce86238d2172f121ff/On.png)

Edit individual cells by clicking on them.

![Edit.png](Data%20GUIs%20252261d2371d45ce86238d2172f121ff/Edit.png)

Hit **save** after making changes, or **undo** to cancel them.

### Advance Editing

Click a cell containing Object or Array data, or the **expand icon** in a given cell, for more advanced editing options, including changing data *types.* 

![Expand.png](Data%20GUIs%20252261d2371d45ce86238d2172f121ff/Expand.png)

You can also an entire row of Base data as a JSON object by clicking the **edit** icon.

IMAGE OF ENTIRE ROW

### Adding items

Create new items by clicking **Add Item** and editing the new row. You can add and edit multiple rows at once.

Click **Save X Items** to save in progress changes to your Base.

![Screen Shot 2023-05-01 at 12.37.29.png](Data%20GUIs%20252261d2371d45ce86238d2172f121ff/Screen_Shot_2023-05-01_at_12.37.29.png)

### Deleting items

Select the checkbox(es) for the item(s) you want to delete and click the **Delete** button.

![Delete.png](Data%20GUIs%20252261d2371d45ce86238d2172f121ff/Delete.png)

### Refresh

Upon opening the Base UI, it displays the latest data. Click the **Refresh** button to update and fetch any new data changes.

# Drive UI

The Drive User Interface provides a Graphical User Interface (GUI) for files in Deta Drive. You can use Drive UI for viewing, adding, and deleting files from a Drive. 

App Collection | Headless Collection | Builder Project

## Opening Drive UI

To access the Drive UI for an app instance, open the app's context menu and click **View Data.**

![App.png](Data%20GUIs%20252261d2371d45ce86238d2172f121ff/App.png)

Click on **Drive** in the top-right corner

![Table.png](Data%20GUIs%20252261d2371d45ce86238d2172f121ff/Table.png)

Browse your Drive’s data and select from the available Drives for your app instance.

### Downloading Files

To download a file, click the **download** icon, which is on the right side of the the table.

### Preview Files

Click on a file's name to preview it. Files highlighted in blue can be previewed directly in your browser. 

![Screen Shot 2023-05-01 at 12.44.11.png](Data%20GUIs%20252261d2371d45ce86238d2172f121ff/Screen_Shot_2023-05-01_at_12.44.11.png)

There you can **download** the file by clicking on the icon in the top right corner.

Your current location is highlighted in black in the navigation bar at the top of Drive UI.

## Editing Files

You can upload or delete files from a Drive via Drive UI by activating Edit Mode. Activate **Edit Mode** by toggling the switch.

![On.png](Data%20GUIs%20252261d2371d45ce86238d2172f121ff/On.png)

### ****Uploading****

Upload a file by clicking the **Upload button** or dragging it into the list of files and folders. The file will be uploaded to the current directory.

### **Deleting Files**

To delete files, select the checkbox(es) for the desired file(s) and click the **trash** icon in the top right corner of the Drive UI panel.

![Delete.png](Data%20GUIs%20252261d2371d45ce86238d2172f121ff/Delete%201.png)