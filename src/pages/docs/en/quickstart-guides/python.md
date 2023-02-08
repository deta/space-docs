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