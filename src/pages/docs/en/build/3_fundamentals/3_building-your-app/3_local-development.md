# Local Development

After you setup your project, you can use the Space CLI to emulate how your app will run in Space on your local machine. This can help you debug any issues before pushing your app to  Space.

To start your app locally, run the `space dev` command in your Project:

```
space dev
```

If you want to open the app in your browser automatically, use the `--open` flag. This command requires you to provide startup commands for your Micros before it will work.

In the background, `space dev` is doing three things:

- ****************************Micro Startup:**************************** starts each of your app’s Micros in a separate process, using a command you provide
- ******************Routing Emulation:****************** emulates how Space handles routing for your Micros, allowing you to use a single endpoint in local development
- ****************************Data Storage:**************************** injects a [Data Key](https://deta.space/changelog/post-6) so you can use the [Deta SDK](https://deta.space/docs/en/basics/data) to store data in your Builder Project, without any setup or key management

## Micro Startup

Before you can spin up your app locally with `space dev`, make sure you have your app setup with a`Spacefile`. 

The Space CLI will use development command(s) you provide in your `Spacefile` to start each of your app’s Micros locally, specified by `dev` parameter. For static engines and fullstack frameworks like Next, Nuxt and SvelteKit, the CLI will choose the right command automatically. For everything else you’ll need to specify your own command:

```yaml
v: 0
micros:
  - name: client
    src: ./client
    engine: svelte
    primary: true

  - name: api
    src: ./api
    engine: nodejs16
    dev: nodemon index.js # start the micro in development mode
```

The specified `dev` commands needs to start a web server that listens on the port specified with the `PORT` environment variable. This way the CLI can properly forward requests to the correct Micro. You can use the port `XXXX` as a fallback.

```jsx
const express = require('express')
const app = express()
const port = process.env.PORT || 4201

app.get('/', (req, res) => {
  res.send('Hello from Space Dev!')
})

app.listen(port, () => {
  console.log(`Space App running locally on port ${port}`)
})
```

You can find instructions on how to setup the right `dev` command for each engine in the "Quickstart Guides".

## Data Storage

Deta Space offers persistent data storage in **********************Collections**********************. Collections can be read from and written to using the Deta SDKs or HTTP APIs, and they use a Collection specific ****************Data Key**************** for authentication. Every Space application gets its own Collection. 

In Deta Space, authentication between an app and its Collection happens automatically, with a user specific ****************Data Key**************** sitting in the app’s environment. `space dev` provides the same experience, automatically generating and injecting a ****************Data Key****************. The data you save will be stored in your Builder Project in Space.

What this means is that you can use Bases and Drives, without managing any keys in your local environment. If you are using the SDK, just initialize the Deta Object. 

- **************Snippet**************
    
    ```jsx
    const { Deta } = require('deta'); // import Deta
    
    // Initialize
    const deta = Deta();
    
    // This how to connect to or create a database.
    const db = deta.Base('simple_db');
    
    // You can create as many as you want without additional charges.
    const books = deta.Base('books');
    ```
    

If you’re using the HTTP API, pull the environment variable `DETA_PROJECT_KEY`.

- ************Snippet************
    
    ```jsx
    const fetch = require('node-fetch');
    
    const dataKey = process.env.DETA_PROJECT_KEY;
    
    // Replace these placeholders with your own values
    const projectId = 'your_project_id';
    const baseName = 'your_base_name';
    
    const url = `https://database.deta.sh/v1/${projectId}/${baseName}/items`;
    
    const headers = {
      'X-API-Key': dataKey,
      'Content-Type': 'application/json',
    };
    
    fetch(url, { headers })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
      })
    ```
    

The data your app stores in development will be viewable and editable via **************Base UI************** and ****************Drive UI**************** under the “Data” sub tab of the “Develop” tab in your Builder Project.

![Screen Shot 2023-04-25 at 12.23.22.png](Local%20Development%20b022010a8e2e4bc3934a3c8abc7d8cd0/Screen_Shot_2023-04-25_at_12.23.22.png)

## Routing Emulation

When you run `space dev` all Micros will be started in a separate process and a reverse proxy will make them available through a single endpoint.

```bash
~my-app % space dev
👀  Checking for running Micros...
💻  Starting 2 Micro servers...

Micro client (primary)
L url: http://localhost:4200/

Micro api
L url: http://localhost:4200/api
```

In our example `Spacefile` from earlier, `space dev` starts up both Micros on the port `4200`, serving `client` on `/` and `api` on `/api`. All requests to `[http://localhost:4200/](http://localhost:4200/)` will be proxied by `space dev` to the correct Micro.

This lets you build an entire app (with up to 5 separate Micros) on a single endpoint, just like it is in Deta Space.

## Triggering Scheduled Actions

You can trigger also trigger **Scheduled Actions** in your local development server by using the `space dev trigger` command. Make sure you have defined a Scheduled Action in your Spacefile and set up the right handler in your Micro. Read more on how here.

Let’s assume we have the following `Spacefile` that runs a `cleanup` action on a schedule:

```yaml
v: 0
micros:
  - name: backend
    src: backend
    engine: nodejs16
    run: "node index.js"
    actions:
      - id: "cleanup"
        name: "Clean Up"
        description: "Cleans up unused data"
        trigger: "schedule"
        default_interval: "0/15 * * * *"
```

After starting your development server using either `space dev` or `space dev up`, you can trigger the action manually using the `space dev trigger` command. Just pass the Action’s `id` into the command.

```bash
# start app locally
space dev

# trigger the cleanup action
space dev trigger cleanup
```

This command will call your local Action handler with a mock payload and print the returned response to your console.

## Running Commands in the Context of Your Project

If you want to run a one-off script or manually start a development server with managed ************Data Keys************, you can use the `space exec` call:

```bash
# Run a command in the context of your project
space exec --project <project-id> -- npm run init-deta-base.py
```

If you run the command from a directory that is linked to a space app, you can omit the `--project` flag. If not, you can get your project id by doing X, Y, Z.

Some use cases for `space exec` include:

- testing Base & Drive locally
- pre-filling your projects Bases & Drives with data
- programmatically interacting with Base & Drive
- …anything you can think of!

## Advanced Topics

### Control Over Individual Micros

If you want to have more control over your development process, you can also split the `space dev` process into parts:

- First, start Micros individually using the `space dev up` command
- Then, start a reverse proxy using the `space dev proxy`

For the example above, it would look like this:

```bash
# Start the Micros individually
space dev up client
space dev up api

# Start the reverse proxy
space dev proxy
```

Some use cases for this include:

- Running each Micro in a separate terminal window
- Integrating Micros with other development tools (ex: vscode tasks)

The `space dev` command is just a shortcut for the combination of `space dev up` and `space dev proxy`.

### Manual Management of Data Keys

If you do not want to use `space dev` for whatever reason, but still need to talk with Bases or Drives in your Builder Project, you can manually create and provide a ********************Data Key.******************** Navigate to the “Develop” tab and then the “Data” sub-tab of your Builder Project. Then click ************************Data Keys************************, and create a new Data Key.

![Screen Shot 2023-04-25 at 12.00.46.png](Local%20Development%20b022010a8e2e4bc3934a3c8abc7d8cd0/Screen_Shot_2023-04-25_at_12.00.46.png)

You can set this **********Data Key********** into your local development environment as `DETA_PROJECT_KEY`, and the SDK will automatically pick the correct key up, both in development and in production, for you and any end users of your app.

```
// .env.example

DETA_PROJECT_KEY="MY_DATA_KEY"
```

> ⚠️ It is generally a bad practice to embed your Data Key in your code, especially if you want to publish your app. All your App’s users will use your Collection, and data will no longer be separated, breaking the personal cloud model. If you want to create an Interop use case using Data Keys, read more here.
>