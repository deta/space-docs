---
title: Actions
position: 2
layout: "@layouts/DocsPageLayout.astro"
---

Another useful building block you can use in your Space apps are **Actions**. An Action allows an app to run certain tasks in response to different **Triggers**. Actions can do really anything you dream up in code, like sending automated emails or collecting and cleaning up data. Currently, Space supports **Scheduled Actions**, where a time-configurable schedule will trigger an Action.

## Scheduled Actions

Scheduled Actions are run on a specific interval, set by the end user of an app. If you have heard of “cron jobs”, this is the same concept, but for your Space apps.

You can read more about Scheduled Actions as a Space user here.

### Adding a Scheduled Action

You can add a Scheduled Action to your app via the `Spacefile`. You do so at an individual **********Micro********** level, designating which Micro is responsible for carrying out what action at which interval.

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

Each action with the trigger `schedule` must have a three unique fields:

- `id`: an identifier used by Space to invoke the action
- `name`: a human friendly name that users of your app will see
- `default_interval`:  the interval which your action will run at, if the user does not configure it differently.

You can optionally provide a friendly `description` to inform your users about the action. More information on all the supported fields can be found in the [Spacefile Reference](https://www.notion.so/docs/en/reference/spacefile#actions).

### Action Handlers

When the time arrives to trigger your Action, Deta Space ************************will send a `POST` request to the Micro designated to handle the Action on the path `/__space/v0/actions`. The request’s event body will contain the action `id` and `trigger`.

For example, the `Spacefile` from the prior section would result in sending the following request body to the `backend` Micro:

```
{
  "event": {
    "id": "cleanup",
    "trigger": "schedule"
  }
}
```

It is up to you to handle the request and run whatever logic you need to in your app. For example, you could call a function or interact with [Base](https://www.notion.so/docs/en/reference/base/about) and [Drive](https://www.notion.so/docs/en/reference/drive/about) through the Deta SDK:

```jsx
// using express
app.post('/__space/v0/actions', (req, res) => {
  const event = req.body.event

  if (event.id === "cleanup") {
    cleanup()
  }

  res.sendStatus(200)
})

```

```python
# using FastAPI and Pydantic
@app.post('/__space/v0/actions')
def actions(action: Action):
    data = action.dict()
    event = data['event']
    if event['id'] == 'cleanup':
        cleanup()
```

Read more about triggering Scheduled Actions while developing locally.

### Interval Types

Space currently supports two types of intervals for Scheduled Actions:

- [Rates](https://www.notion.so/docs/en/reference/spacefile#rates) e.g. `2 hours`
- [Cron Expressions](https://www.notion.so/docs/en/reference/spacefile#cron-expressions) e.g. `0 10 * * *`

Read more about the exact Scheduled Action syntax in the Spacefile Reference.

### Notes and Limitations

- An individual Micro can handle up to 5 unique Scheduled Actions, for a maximum of 25 Scheduled Actions in one Space App.
- Scheduled Actions have to be purposely enabled by an application developer.
- After installing an app, its Scheduled Actions are automatically enabled and set to run on their default intervals.
- End users can change the interval or disable a Scheduled Action.