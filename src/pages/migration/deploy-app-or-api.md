---
title: Deploy an App or API
position: 2
layout: "@docs"
---



Deta Space offers an easy solution for developers who want to deploy their web applications and APIs to the cloud. The platform offers hosting that supports various programming languages and frameworks, along with easy-to-use tools for managing databases and cloud storage.

In this guide, we will walk through the process of deploying a simple image server that is built using [Flask](https://flask.palletsprojects.com/en/2.2.x/) as a backend server and the [Deta Drive SDK](https://deta.space/docs/en/reference/drive/sdk) for storage. Furthermore, we will deploy an image gallery made with [Svelte](https://svelte.dev/), which will be publicly accessible. And as a bonus, there is a fun little extra step at the end, so make sure to check it out!

## Getting Started

Before you begin, make sure you have a verified Deta Space account. If you don’t have one, you can easily create one [here](https://deta.space/signup).

You will need Python and Node.js installed on your system if you want to run the project locally.

To deploy your application or API to Space, you will need to have the Space CLI installed on your system and be logged in. You can do this by following the instructions provided in the related documentation [here](https://deta.space/docs/en/basics/cli).

## Setting Up Your Project Locally

To begin, create a directory for your app and navigate into it. For this guide, we will refer to the directory as "image-server".

```bash
mkdir image-server
cd image-server
```

## **Building a Simple Flask Image Server**

Within the `image-server` directory, create a new directory called `flask-api` for the image server and navigate into it.

```bash
mkdir flask-api
cd flask-api
```

Within `flask-api` directory, set up a virtual environment and activate it.

```bash
python3 -m venv .venv
source .venv/bin/activate
```

This virtual environment will help keep the packages isolated and specific to this project.

Create a `requirements.txt` file in the `flask-api` directory to store your dependencies. Open it in a text editor, and add `deta` and `Flask` as dependencies.

```
deta
Flask
```

The `requirements.txt` file serves as a list of dependencies for both the virtual environment and Space build pipeline. To ensure the dependencies listed in the file are installed in the virtual environment, run the following command:

```
pip install -r requirements.txt
```

Now, let's build the image server. In the same directory, create and open a file named `main.py`. The code for the Flask image server is as follows:

```python
from deta import Deta
from flask import Flask, Response, jsonify, request

deta = Deta()
drive = deta.Drive("images")

app = Flask(__name__)

@app.route("/")
def render():
    return """
    <form action="/upload" method="post" enctype="multipart/form-data">
        <input type="file" name="file">
        <input type="submit" value="Upload">
    </form>
    """

@app.route("/upload", methods=["POST"])
def upload_img():
    file = request.files["file"]
    name = file.filename
    if name is None:
        return "Error: filename is required."
    res = drive.put(name, file.read())
    return str(res)

@app.route("/list", methods=["GET"])
def files_list():
    return jsonify(drive.list())

@app.route("/download/<name>", methods=["GET"])
def download_img(name):
    res = drive.get(name)
    if res is None:
        return "Error: file not found."
    return Response(res.iter_chunks(1024), content_type="image/png")
```

The `/` route returns a form for uploading an image. The `/upload` route stores the uploaded image in an instance of [Deta Drive](https://deta.space/docs/en/basics/data#drive) called `images`. The `/list` route returns a JSON representation of the list of images stored in the `images` instance of Drive, while the `/download/<name>` route can be used to download a specific image from the `images` instance.

## Initialize a Space Project

Before building apps and APIs for Space, it is important to initialize a [Space project](https://deta.space/docs/en/basics/projects#whats-a-project). You can access your projects through the [Builder](https://deta.space/docs/en/basics/projects#projects-in-builder) app on your Deta Space dashboard, also known as the `Canvas`. The Builder provides a comprehensive toolbox, allowing you to create and manage your apps and APIs within Space.

To deploy the image server to Space, navigate to the root directory of your project and create a Space Project with `space new`:

```bash
cd ..
space new
```

You will be asked to provide a name for your project. In this guide, let's name it `ImageServer`. The Builder will then attempt to automatically generate a configuration, and after you confirm, it will create a `Spacefile`. The Spacefile contains the configuration information used by Space to run your app. You can read more about the Spacefile in the Deta Space documentation [here](https://deta.space/docs/en/reference/spacefile).

The generated Spacefile will look similar to the following:

```yaml
# Spacefile Docs: https://go.deta.dev/docs/spacefile/v0
v: 0
app_name: "ImageServer"
micros:
  - name: flask-api
    src: ./flask-api
    engine: python3.9
```

With this configuration, a [Micro](https://deta.space/docs/en/basics/micros#whats-a-micro) named `flask-api` will be created, which will use the `./flask-api` directory as the source code for it and will run on a `python3.9` engine.

Additionally, the CLI will generate a `.space` directory that links your project to Space. Keep in mind that this directory should not be included in version control and will automatically be added to the `.gitignore` file.

> It is a good practice to create a [.spaceignore](https://deta.space/docs/en/basics/revisions#ignoring-files-and-directories) file and include the `.venv` directory in it. The `.venv` directory contains packages and dependencies that are specific to a particular environment and are not required by Space.
>
>
> ```
> .venv
> ```
>

### Deploy the Flask Image Server to Space

To deploy your app, simply run the following command in your terminal:

```bash
space push
```

This will verify your Spacefile is correct, then package and upload all the necessary files to the Space build pipeline. Throughout the process, the logs will be streamed to your system terminal, allowing you to monitor progress and quickly detect any issues that may arise.

Once the deployment is successful, a new [revision](https://deta.space/docs/en/basics/revisions#whats-a-revision) will be created alongside a live Builder instance of your app on a fixed URL endpoint. This instance will be kept up-to-date with your source code every time you deploy using `space push`.  You can access it as an app on your Deta Space Canvas and use it as desired after your first push.

![Space Canvas](/migration_assets/deploy-app-or-api/space-canvas.png)

By clicking on the Builder instance in the Space Canvas, it will open in a new tab with a unique endpoint, such as `imageserver-1-gj7ka8.deta.app`. This endpoint will display a form for uploading images.

Let’s use the form to upload a few images. After uploading multiple images, you can view a JSON representation of all uploaded images by accessing the endpoint `imageserver-1-gj7ka8.deta.app/list`. To check a specific image, you can access it at the endpoint `imageserver-1-gj7ka8.deta.app/download/<filename>`. For example, if you have uploaded an image named `space.png`, you can check it at the endpoint `imageserver-1-gj7ka8.deta.app/download/space.png`.

> The endpoint mentioned in the steps is an example and may differ in your case. Replace  `imageserver-1-gj7ka8.deta.app` with the actual endpoint of your development instance.
>

## **Creating a Simple Image Gallery with Svelte**

Now that the image server is up and running on Deta Space, let's build a simple frontend for the image gallery using Svelte to showcase the uploaded images.

Let’s create our Svelte project named `image-gallery` in the `image-server` directory, install all the necessary dependencies, and navigate to the right sub-directory (`src`) for the next step:

```bash
npm create vite@latest image-gallery -- --template svelte
cd image-gallery
npm install
cd src
```

Now let’s open the `App.svelte` file in the text editor and replace the existing code with the following:

```jsx
<script>
  import { onMount } from 'svelte';
  let names = [];

  async function getNames() {
    const res = await fetch('/api/list');
    const json = await res.json();
    names = json.names;
  }

  onMount(async () => {
    await getNames();
  });
</script>

<div class="container">
  {#each names as name}
    <div class="img-container">
      <img src={`/api/download/${name}`} alt={name} />
    </div>
  {/each}
</div>

<style>
  :global(body) {
    background-color: #f3f3f3;
  }
  .container {
    display: flex;
    gap: 1rem;
  }
  .img-container {
    overflow: hidden;
  }
  img {
    border-radius: 8px;
    width: 200px;
    height: auto;
  }
</style>
```

This will create a basic image gallery to showcase all of the uploaded images.

## Deploy the Svelte Image Gallery to Space

Space allows developers to utilize up to five Micros (compute services) within a single app. This means that your Flask server and Svelte frontend will both be separate micros of your app.

In order to deploy the Svelte image gallery alongside the Flask image server within the same app, you will need to make modifications to the Spacefile as follows:

```yaml
# Spacefile Docs: https://go.deta.dev/docs/spacefile/v0
v: 0
app_name: "ImageServer"
micros:
	- name: image-gallery
    src: ./image-gallery
    engine: svelte
    commands:
      - npm run build
    serve: dist
    primary: true

  - name: flask-api
    src: ./flask-api
    engine: python3.9
		path: api
```

This configuration will create two separate micros within your app: the Svelte frontend, named `image-gallery`, and the Flask backend, which was previously created as `flask-api`.

Let’s quickly take a look at what’s going on in the Spacefile, parameter by parameter.

- The first Micro is named `image-gallery`, as specified by the `name` parameter.
- The source code is located in `./image-gallery`, which is indicated by the `src` parameter.
- The Micro utilizes the `svelte` engine, as indicated by the `engine` parameter.
- The `commands` parameter is set to `npm run build`, which specifies the commands used to build the production version of the app. As a result, the production build of the app is saved to the `dist` directory by default.
- The `serve` parameter is set to `dist`, which serves the production build of the Svelte image gallery.
- Finally, the `primary` parameter is set to `true`, meaning that this Micro will handle all requests made to the `/` endpoint when the app is opened.

We will also need to add a `path` parameter to the `flask-api` server so that the image server can handle all requests made to the `/api` route.

This means it will receive requests made to `<app-endpoint>/api/` such as `imageserver-1-gj7ka8.deta.app/api/`. This setup will enable the Micro to specifically handle requests made to the `/api/` endpoint of the `ImageServer` application, and it will work in a relative manner. Now the `/upload` route in our `main.py` file will be accessible in our Space App at `/api/upload`.

Deploy the changes with:

```bash
space push
```

Upon successful completion of the build, a new revision will be created, and the Builder Instance will be updated. The updated `ImageServer` app will include both the `flask-api` Micro for uploading images and the `image-gallery` Micro for displaying the image gallery.

You can access the Builder Instance by opening it through the Space Canvas.

![Image Gallery](/migration_assets/deploy-app-or-api/image-gallery.png)

With the updated configuration, the routes of the `flask-server` micro will now be accessible via the `/api/` path. Such as, `imageserver-1-gj7ka8.deta.app/api/upload` for uploading images, `imageserver-1-gj7ka8.deta.app/api/list` for viewing a list of the uploaded images in JSON format, and `imageserver-1-gj7ka8.deta.app/api/download/<filename>` to view a specific image.

## Making the Image Gallery Publicly Accessible

By default, apps in Space are protected by authentication, which ensures that only the app owner can access it. But sometimes, you may want to make the app accessible to others. In such cases, you can use the [public_routes](https://deta.space/docs/en/basics/micros#public-routes) option in the Spacefile to specify which routes should be publicly accessible. Another option is to use [API keys](https://deta.space/docs/en/basics/micros#api-keys), which can be generated and used to provide access to the micro endpoints which are otherwise protected by authentication.

In this guide, we will make the image gallery publicly accessible using the `public_routes` option . To do so, you need to configure the Spacefile as shown below, with two `public_routes` parameters, one for each Micro:

```yaml
# Spacefile Docs: https://go.deta.dev/docs/spacefile/v0
v: 0
app_name: "ImageServer"
micros:
	- name: image-gallery
    src: ./src/image-gallery
    engine: svelte
    commands:
      - npm run build
    serve: dist
    primary: true
		public_routes:
      - "/"
      - "/assets/*"

  - name: flask-api
    src: ./src/flask-api
    engine: python3.9
		path: api
		public_routes:
      - "/list"
      - "/download/*"
```

Here, the `imave-gallery` Micro has two `public_routes`: the base path `/` is publicly accessible, so others can view the image gallery while the `/assets/*` route is also public as it serves necessary Svelte assets.

The `flask-api` Micro also has two public routes: the `/list` and `/download/*` routes allow the image gallery frontend to access the images without authentication. However, the `/api` and `/api/upload` routes remain protected by authentication to prevent unauthorized uploads.

By using the wildcard `*` after the `/download/` and `/assets/` paths, we are allowing all sub-routes to be publicly accessible. This provides a flexible and dynamic way to access to the images and assets without the need for individual route configurations for each image or asset.

> During the build process of the `image-gallery` micro, Vite will store all the assets (such as images, fonts, etc.) in the `/assets/` directory within the `/dist/` directory. The image gallery page depends on those assets, which is why they are included in the `public_routes` as well.
>

To apply these changes, run the `space push` command in the terminal as you did before. Upon successful deployment, anyone with access to the endpoint of your app's builder instance will be able to view the image gallery with all uploaded images, but they won’t be able to upload anything.

## A Fun Little Extra Step

With your image server for uploading images and an image gallery to showcase those images, others may also want to have something similar to upload and share their favorite images with others. Space offers a feature that enables developers to release their apps and allow others to install and use them in their Space Canvas.

With this feature, each user will have their own isolated version of the app with their own data that can only be accessed by them. This eliminates the need for developers to be concerned about security, authentication, infrastructure, or scalability issues, and ensures that users' data remains secure in their own private instance of the app.

The best part is that releasing the app is just one command (or click) away. To release your app using the Space CLI, simply run the following command:

```bash
space release
```

The Space CLI will prompt you to confirm if you want to release the latest revision. Upon confirming, a release of the latest revision will be created. You will then receive a link to the installation page, which you can share with others to allow them to install your app.

You can also list your app releases on Space [Discovery](https://deta.space/discovery), making it easier for others to discover and install your app. To list your release on Discovery, use the following command:

```bash
space release --listed
```

Confirming to create a release of the latest revision will generate a public and discoverable link to your app's installation page, making it possible for others to discover and install your app through Space Discovery.

That’s it! You now know how to deploy an app with multiple micros, modify its configuration using the Spacefile, and create releases for it.

Share with us what you have built, connect with the Deta team, seek answers to your questions, and hang out on our [community Discord](https://discord.com/invite/deta-827546555200438332) with fellow **Detonians!** We would love to have you.

Happy building!