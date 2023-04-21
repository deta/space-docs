---
title: Run a Python App
section: Quickstart Guides
position: 5
layout: "@docs"
---

This quickstart assumes that you have:

- A [Deta Space account](https://deta.space/signup)
- [Space CLI](https://deta.space/docs/en/basics/cli) installed on your machine and logged in
- [Python](https://www.python.org/downloads/) installed on your machine

> 💡 Currently, Space supports Python 3.8 and Python 3.9, with plans to add support for Python 3.10 soon.
> We recommend using a Python version manager like [pyenv](https://github.com/pyenv/pyenv) to install Python on your system. This will allow you to quickly install and use different versions of Python.

## Create a Python App

First, create a directory to contain the source code of your app and navigate to it.

```bash
mkdir python-app && cd python-app
```

Next, create a virtual environment to manage the dependencies for your app and activate it with:

```bash
python -m venv .venv
source .venv/bin/activate
```

We’ll also install a web framework and a web server for production deployment. For this guide, we’ll use [FastAPI](https://fastapi.tiangolo.com/) and [Uvicorn](https://www.uvicorn.org/), but feel free to use another framework and server of your choice if you prefer.

In your text editor, create a new file called `requirements.txt`, and add the following dependencies into it:

```
fastapi
uvicorn
```

Then, install these dependencies with:

```bash
pip install -r requirements.txt
```

To get started with FastAPI, create a new file called `main.py`. Then, add the following code:

```python
import os

import uvicorn
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def root():
    return "Hello from Space! 🚀"

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=int(os.environ.get("PORT", 8080)))
```

This code sets up a basic web server that listens on the specified port by the `PORT` environment variable.

> 💡 Make sure your app is configured to listen on the port defined by the `PORT` [environment variable](https://deta.space/docs/en/basics/micros#micro-environment-variables).

## Create a Space Project

[Space projects](https://deta.space/docs/en/basics/projects) allow you to build and test apps with different Space features before releasing them to the public. To create a Space project, run the following command in the root directory containing your source code:

```bash
space new
```

You will be prompted to enter a name for your project. The CLI will then display a generated configuration for the app and prompt you to confirm the setup of the project with that configuration. Once confirmed, the project will be created along with a [Spacefile](https://deta.space/docs/en/reference/spacefile) that contains the configuration for the micro and a `.space` directory that stores project information and links it to your Builder project.

```yaml
# Spacefile Docs: https://go.deta.dev/docs/spacefile/v0
v: 0
micros:
  - name: python-app
    src: .
    engine: python3.9
    primary: true
```

> ⚠️ Currently, the Spacefile with the generated configuration is based on the old standard of running Python apps on Space, which requires a `main.py` file at the root directory of the micro's source code with the app instance named as `app`. This old standard will be deprecated in the future, so we recommend updating the configuration in the Spacefile to explicitly define the command to start your app with the `run` command.


```diff
# Spacefile Docs: https://go.deta.dev/docs/spacefile/v0
v: 0
micros:
  - name: python-app
    src: .
    engine: python3.9
    primary: true
+   run: python main.py
```

> ⚠️ If the CLI fails to generate a configuration for your app, you can configure it manually. For more information, please refer to [this](https://deta.space/docs/en/reference/spacefile).


## Developing Locally

To develop your app on your local machine, you can define what command should be executed to start your app’s development server with the `dev` command in the Spacefile. With this the CLI will take care of generating and injecting the `Data Key` for easier access to app’s Base and Drive instances with SDKs, as well as testing scheduled actions, so you can focus on developing your app without worrying about configuring these all by yourself.

```diff
# Spacefile Docs: https://go.deta.dev/docs/spacefile/v0
v: 0
micros:
  - name: python-app
    src: .
    engine: python3.9
    primary: true
    run: python main.py
+   dev: .venv/bin/uvicorn main:app --reload
```

Once you define the `dev` command for the micro in the Spacefile, you can start the development server by running the following command:

```
space dev
```

## Run it on Space

To deploy your app to Space, simply run:

```diff
space push
```

This will validate your Spacefile, then package and upload your source code to Space build pipeline, and stream logs of the whole process on your terminal. Once the build process is complete, the builder instance will be updated and the CLI will return the link to the Builder instance. Open it in your browser and you got your app running on Space.

> 💡 You can use `space push --open` to open the builder instance in your browser after successful deployement and update of the builder instance.

Congratulations! 🎉 You have successfully built, deployed and got your first Python app on Space. 🚀