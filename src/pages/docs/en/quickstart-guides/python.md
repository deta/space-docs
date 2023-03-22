---
title: Run a Python App
section: Quickstart Guides
position: 5
layout: "@docs"
---

Most Python micro frameworks are supported, like FastAPI and Flask. Space should run both pure WSGI & ASGI apps without any issue. Full frameworks like Django are not fully supported yet, as they require various other commands.

For Space to be able to run your code, you need to call your app instance `app` and it has to be in a file called `main.py`, which is the only required file for a Python Micro. Of course you could add more files and folders.

For Space, you do not need to use a server like uvicorn, as Space has its own global server. Make sure you have the framework in your requirements.txt.

For your Spacefile, use something like this:

```yaml
v: 0
micros:
  - name: python-app
    src: ./src/python
    engine: python3.9
```

## Setting up local development

We recommend using virtual environment for local development. If you have listed your app dependencies in a `requirements.txt` file, you can install them to your virtual environment with the following commands:

```bash
# Create a virtual environment in the current directory
python -m venv .venv
# Activate the virtual environment
source .venv/bin/activate
# Install dependencies
pip install -r requirements.txt

# If you are using FastAPI, you will also need to install uvicorn
pip install uvicorn[standard]
```

Then you will need to setup the dev command inside your Spacefile. Just reference the executable file from your virtual environment:

```yaml
  - name: python-app
    src: ./src/python
    engine: python3.9
    dev: .venv/bin/uvicorn main:app --reload
```
