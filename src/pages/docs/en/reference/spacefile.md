---
title: Spacefile
section: Reference
position: 1
layout: "@docs"
---

## What's the Spacefile?

The `Spacefile` file contains the configuration of your app and is used by Deta Space to understand what your app looks like and how to run it.

The Spacefile file must be named `Spacefile` and needs to be in the root directory of your project. It uses a syntax similar to YAML, if you're new to YAML and want to learn more, see "[Learn YAML in Y minutes.](https://learnxinyminutes.com/docs/yaml/)".

You can use the [`space new`](/docs/en/reference/cli#space-new) command to let the [Space CLI](/docs/en/reference/cli) automatically create the `Spacefile` for you.

Here is an example `Spacefile`:

```yaml
v: 0
icon: ./icon.png
app_name: "My App"
micros:
  - name: python-app
    src: ./src/python
    engine: python3.9
    primary: true

  - name: custom-app
    src: ./src/custom
    engine: custom
    commands:
      - go get
      - go build main.go
    run: ./main
    include:
      - main
```

> To customize the appearence of your app on [Discovery](/discovery) you can add a  [`Discovery.md`](/docs/en/reference/discovery) file to your project.

## Options

Here are all the options supported by the `Spacefile`.

### `v` (version)

**Required**

The first key/value pair in your `Spacefile` should be the Spacefile version. The latest version at the moment is `0`.

```yaml
v: 0
```

### `icon`

*Optional*


Use `icon` to specify a path to an image file to use as your app's icon. The icon will be used wherever your app is displayed (e.g. the Canvas).

The path should be relative to your `Spacefile` and needs to point to a file inside your project's directory.

The image needs to be a PNG or WebP file of 512x512 pixels.

```yaml
icon: src/static/icon.png
```

### `app_name`

*Optional*

Use `app_name` to specify a name for your app. This name will be used wherever your app is displayed (e.g. the Canvas).

If it is not provided, `app_name` will fallback to your project's name.

The name can has a maximum of 12 characters. We recommend not exceeding 7 characters for optimal visibility across different screen sizes.

```yaml
app_name: My App
```

### `micros`

**Required**

The `micros` object is arguably the most important section in the `Spacefile`. It lists all the micros your app uses and configures each one individually.

#### `name`

**Required**

Each micro needs to have a unique `name` and **must follow the following rules:**

- can only contain alphanumeric characters and hyphen
- start with alphanumeric characters

```yaml
micros:
  - name: api
```

#### `src`

**Required**

Relative path to the root directory of the micro.

Each micro should be in its own directory which needs to contain all files required for the Micro to run.

```yaml
micros:
  - name: api
    src: ./api/
```

#### `engine`

**Required**

Runtime for the Micro, supported values:

- `static`
- `react`
- `svelte`
- `vue`
- `next`
- `nuxt`
- `svelte-kit`
- `python3.9`
- `python3.8`
- `nodejs16`
- `custom`

Example:

```yaml
micros:
  - name: api
    src: ./api/
    engine: nodejs16
```

Some engines require additional configuration. Refer to the "Quickstart Guides" section for more information about specific engines.

#### `primary`

**Required if your Spacefile contains more than one Micro**

If your app contains more than one Micro, use `primary` to identify which Micro should be used as the entry point of your application. The primary Micro will receive all requests made to your application which are not under another micro's path.

```yaml
micros:
  - name: frontend
    src: ./frontend/
    engine: svelte
    primary: true

  - name: backend
    src: ./backend/
    engine: nodejs16
```

#### `path`

*Optional*

If your app contains more than one Micro, use `path` to specify under which path relative to the hostname a Micro should receive requests. Requests are proxied so you your Micro will receive them at the root, no need to prefix your routes with the given Micro path.

If the `path` is missing, the path will fall back to the Micro `name`.

```yaml
micros:
  - name: frontend
    src: ./frontend/
    engine: svelte
    primary: true

  - name: backend
    src: ./backend/
    engine: nodejs16
    path: api
```

#### `serve`

*Required for static Micros*

Use `serve` to specify which directory should be served for your static Micro. All the files and directories inside the specified directory will be served relative to your Micro's path.

This option can only be used for Micro's with the `static` engine or engines based on it like `vue`, `react` and `svelte`.

```yaml
micros:
  - name: frontend
    src: ./frontend/
    engine: static
    serve: dist/
```

#### `commands`

*Optional*

Use `commands` to specify a set of commands to run before packaging the Micro.

```yaml
micros:
  - name: api
    src: ./api/
    engine: custom
    commands:
      - go get
      - go build main.go
```

#### `include`

*Optional*

Use `include` to specify which files and directories in your Micro's `src` should be part of the final app package. If `include` is used, everything not part of it will be ignored and won't be part of your app. You can specify multiple files and directories.

If your Micro uses a build step, `include` can be used to tell Space to only include the build output in your final app and ignore your source code and other unnecessary files.

```yaml
micros:
  - name: api
    src: ./api/
    engine: nodejs16
    commands:
      - npm run build
    include:
      - build/
      - images/
```

#### `run`

*Optional*

Use `run` to specify a command which starts your Micro. For the Micro to receive requests, it needs to listen on the port specified in the environment variable `PORT`.

```yaml
micros:
  - name: api
    src: ./api/
    engine: custom
    run: ./main
```

#### `dev`

Use `run` to specify a command which starts your Micro in **development** mode. This command will be used to start your micro when you run `deta dev`.

```yaml
micros:
  - name: api
    src: ./api/
    engine: custom
    run: ./main
    dev: go run main.go
```

#### `presets`

*Optional*

Specify different presets to use with your Micro.

##### `env`

*Optional*

Use the `env` preset to specify environment variables that the user can set for a Micro.

- `name` : environment variable name or key
- `description` : human friendly description
- `default` : default value for the variable

```yaml
micros:
  - name: api
    src: ./api/
    engine: python3.9
    presets:
      env:
        - name: SECRET_MESSAGE
          description: Secret message only available to this Micro
          default: "deta is cool"
```

More information on the `env` preset can be found in the [Micro Basics](/docs/en/basics/micros#custom-variables).

##### `api_keys`

*Optional*

Use the `api_keys` preset to enable the use of API keys to access a private routes of a Micro.

The user of your app will be able to generate API keys in the app settings and can use them in requests to a Micro using the `X-Space-App-Key` HTTP header.

```yaml
micros:
  - name: api
    src: ./api/
    engine: python3.9
    presets:
      api_keys: true
```

More information on API Keys can be found in the [Micro Basics](/docs/en/basics/micros#api-keys).

#### `public_routes`

*Optional*

Use `public_routes` to define which paths of your Micro should be available to the public. These routes will not be protected behind auth.

```yaml
micros:
  - name: backend
    src: backend
    engine: python3.9
    public_routes:
      - "/test" # exact match
      - "/public/*" # wildcards
      - "/api/*/docs" # wildcards can be placed anywhere
```

More information on public routes can be found in the [Micro Basics](/docs/en/basics/micros#public-routes).

#### `actions`

*Optional*

Specify actions that perform certain tasks inside your app on a specific trigger like a schedule.

```yaml
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

An action is compromised of the following fields:

- `id` (required): a unique identifier for the action (needs to be unique across the app)
- `name` (required): a human readable name for the action (needs to be unique across the app)
- `description` (optional): a human readable description for the action (max 142 chars)
- `trigger` (required): what triggers the action. Needs to be set to `schedule`.
- `default_interval` (required): interval with which the schedule will run at ([supported intervals](/docs/en/basics/micros#scheduled-actions))

When an action runs, a `POST` request containing the following body will be sent to the path `/__space/v0/actions` on your Micro:

```json
{
  "event": {
    "id": "cleanup",
    "trigger": "schedule"
  }
}
```

It is up to you to handle the request and run whatever logic you need.

Each scheduled action needs to have a default interval at which it runs at. Space currently supports two types of intervals:

##### Rates

You can define the rate at which an action should run. It is comprised of a value and unit.

- `value`: is a non-zero positive integer
- `unit`: unit of time, can be `minute`, `minutes`, `hour`, `hours`, `day`, `days`. If the value is `1` the unit must be `minute`, `hour` or `day`.

**Start Time**

The schedule starts from the time of installation rounded up to:

- `minute` → next minute
- `hour` → next nearest hour
- `day` → next day at `00:00`

**Examples**

- `1 minute`: Run every minute
- `2 hours`: Run every two hours
- `5 days`: Run every five days

##### Cron Expressions

Cron expressions allow you more flexibility and precision when scheduling a task. Cron expressions have five required fields, which are separated by white space and run based on UTC.

| Field        | Values                            | Wildcards |
|--------------|-----------------------------------|-----------|
| Minute       | 0-59                              |  ,-*/     |
| Hour         | 0-23                              |  ,-*/     |
| Day-of-month | 1-31                              |  ,-*/     |
| Month        | 1-12 or jan-dec                   |  ,-*/     |
| Day-of-week  | 0-7 (0 or 7 is Sunday) or sun-sat |  ,-*      |

**Wildcards**

- The , (comma) wildcard includes additional values. In the Month field, jan,feb,mar would include January, February, and March.

- The - (dash) wildcard specifies ranges. In the Day field, 1-15 would include days 1 through 15 of the specified month.

- The * (asterisk) wildcard includes all values in the field. In the Hours field, * would include every hour. You cannot use * in both the Day-of-month and Day-of-week fields. If you use it in one, you must use ? in the other.

- The / (forward slash) wildcard specifies increments. In the Minutes field, you could enter 1/10 to specify every tenth minute, starting from the first minute of the hour (for example, the 11th, 21st, and 31st minute, and so on).

**Limits**

- You can't specify the Day-of-month and Day-of-week fields in the same cron expression. If you specify a value (or a *) in one of the fields, you must use a * (asterisk) in the other.

- Cron expressions that lead to rates faster than 1 minute are not supported.

**Examples**

- `0 10 * * *` : Run at 10:00 am (UTC) every day
- `15 12 * * *` : Run at 12:15 pm (UTC) every day
- `0 18 * * mon-fri` : Run at 6:00 pm (UTC) every Monday through Friday
- `0 8 1 * *` : Run at 8:00 am (UTC) every 1st day of the month
- `0/15 * * * *` : Run every 15 minutes
- `0/5 8-17 * * mon-fri` : Run every 5 minutes Monday through Friday between 8:00 am and 5:55 pm (UTC)


More information on scheduled actions and how to use them in your app can be found in the [Micro Basics](/docs/en/basics/micros#scheduled-actions).
