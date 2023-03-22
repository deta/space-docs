<div align="center">

<a href="https://deta.space" target="_blank">
    <img src="./.github/deta.svg" width="80">
</a>

# Deta Space Docs

Deta Space enables developers to turn their ideas into reality using their own personal cloud computer. [Why we are building Space](https://deta.space/motivation).

[🔮 Homepage](https://deta.space) - [💻 Developer Docs](https://deta.space/docs) - [📚 User Manual](https://deta.space/manual)
</div>

---
This repository contains a [Astro](https://astro.build) application that handles the Deta Space [Developer Docs](https://deta.space/docs), [User Manual](https://deta.space/manual) and [Changelog](https://deta.space/changelog).

The actual content for the different pages can be found in `./src/pages/` in the respective folders.

## Contributing
We love contributions! To get started, clone the repository and run the following to install the dependencies (`--ignore-optional` is required) :
```sh
yarn install --ignore-optional
```
then to start the local dev server:
```sh
yarn run dev
```

## Available Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `yarn install --ignore-optional`         | Installs dependencies                            |
| `yarn run dev`         | Starts local dev server at `localhost:3000`      |
| `yarn run build`       | Builds the site to `./dist/`                     |
| `yarn run preview`     | Previews the site locally                        |

## License

The application is [MIT licensed](./LICENSE).

The content (e.g., `.md` or `.mdx` files in the `/src/pages` folder) is [Creative Commons licensed](./LICENSE-content).
