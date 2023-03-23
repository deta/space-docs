---
title: Run a Python App
section: Quickstart Guides
position: 5
layout: "@docs"
---

> For now, Space only supports __Python 3.8__ and __3.9__. Your app also needs to follow the __ASGI__ spec (e.g. Starlette, FastAPI, Quart, etc.) or the __WSGI__ spec (e.g. Flask, etc.). Full frameworks like Django might require more configuration which we will not cover here.

## Step 1: Code configuration

For Space to run your Python app, you need to have a file called `main.py` that contains the the main instance of your app, which __must__ be called `app`. You can structure your app however you want, but the `main.py` file must be in the root of your project. Make sure you also have a `requirements.txt` file that contains the dependencies of your app.

### Starlette
Here is an example of a simple Starlette app:

`main.py`
```python
from starlette.responses import PlainTextResponse


async def app(scope, receive, send):
    assert scope['type'] == 'http'
    response = PlainTextResponse('Hello, world!')
    await response(scope, receive, send)
```

### FastAPI
Here is an example of a simple FastAPI app:

`main.py`
```python
from typing import Union

from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "World"}
```

### Flask
Here is an example of a simple Flask app:

`main.py`
```python
from flask import Flask

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "Hello, World!"
```


## Step 2: Run it on Space
Make sure you have the Space CLI installed & authenticated, then run the following command:

```bash
space new
```
This will create a new Space project in the current directory. You can then run the following command to push your code to Space:
> __Recommended__: before `space push`, we recommend creating a `.spaceignore` file to ignore files that you don't want to be deployed to Space. For example, you can ignore `.git` and `.venv` folders.
```bash
space push
```

Great job! You've just deployed your Python app on Space. You can now access your app at the URL provided by the CLI.

## Limitations
- Space only supports Python 3.8 and 3.9
- Space only supports ASGI and WSGI apps (HTTP servers). So raw scripts won't work.
- Only `/tmp` is writable
- SQLite, MySQL, and PostgreSQL are supported (we recommend using [Deta Base](/docs/en/reference/base/sdk), which is built into every Space app by default)
- Total size of deployed app is limited to 250MB (including dependencies, source code, etc.). So many large dependencies like `numpy` or `streamlit` might not work. As well as large models.