---
title: Run a Go App
section: Quickstart Guides
position: 6
layout: "@docs"
---

This quickstart assumes that you have:

- A [Deta Space account](https://deta.space/signup)
- [Space CLI](https://deta.space/docs/en/basics/cli) installed on your machine and logged in
- [Go](https://go.dev/dl/) installed on your machine

## Create a Go App

First, create a directory for the source code of your app, and navigate to it.

```bash
mkdir go-app && cd go-app
```

Next, create a `go.mod` file to enable dependency tracking of your code with:

```bash
go mod init github.com/deta/starters/go/hello-world
```

In your text editor, create a new file called `main.go`. Then, add the following code:

```go
package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
)

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	http.HandleFunc("/", handler)

	log.Printf("App listening on port %s!", port)
	if err := http.ListenAndServe(":"+port, nil); err != nil {
		log.Fatal(err)
	}
}

func handler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprint(w, "Hello from Space! 🚀")
}
```

This code sets up a basic web server that listens on the port specified by the `PORT` environment variable.

> 💡 Make sure your app is configured to listen on the port defined by the `PORT` [environment variable](https://deta.space/docs/en/basics/micros#micro-environment-variables).

## Create a Space Project

[Space projects](https://deta.space/docs/en/basics/projects) allow you to build, test, and use apps on Deta Space. They are also a (optional) launchpad for releasing them to the public.

To create a Space project, run the following command in the directory containing your source code:

```bash
space new
```

You will be prompted to enter a name for your project. The CLI will display a generated configuration for the app and prompt you to confirm. 

Once confirmed, the project will be created along with a [`Spacefile`](https://deta.space/docs/en/reference/spacefile). The `Spacefile` contains the configuration for your [Micro](https://deta.space/docs/en/basics/micros) and a `.space` directory that stores project information and links it to your Builder project.

```yaml
# Spacefile Docs: https://go.deta.dev/docs/spacefile/v0
v: 0
micros:
  - name: go-app
    src: .
    engine: custom
    primary: true
    commands:
      - go build -o server
    include:
      - server
    run: ./server
```

> ⚠️ If the CLI fails to generate a configuration for your app, you can configure it manually. For more information, please refer to [this](https://deta.space/docs/en/reference/spacefile).

# Developing Locally

To develop your app on your local machine, you can define what command should be executed to start your app’s developement server with the `dev` command in the Spacefile. With this the CLI will take care of generating and injecting the `Data Key` for easier access to app’s Base and Drive instances with SDKs, as well as testing scheduled actions, so you can focus on developing your app without worrying about configuring these all by yourself.

```diff
# Spacefile Docs: https://go.deta.dev/docs/spacefile/v0
v: 0
micros:
  - name: go-app
    src: .
    engine: custom
    primary: true
    commands:
      - go build -o server
    include:
      - server
    run: ./server
+   dev: go run .
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

This will validate your Spacefile, then package and upload your source code to the Space build pipeline, and stream logs of the whole process on your terminal. Once the build process is complete, the builder instance will be updated and the CLI will return the link to the Builder instance. Open it in your browser and you got your app running on Space.

> 💡 You can use `space push --open` to open the builder instance in your browser after successful deployment and update of the builder instance.

Congratulations! 🎉 You have successfully built, deployed and got your first Go app on Space. 🚀
