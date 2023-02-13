<div align="center">

<a href="https://deta.space" target="_blank">
    <img src="./.github/deta.svg" width="80">
</a>

# Deta Space Docs

Deta Space is a personal cloud computing platform that enables individuals to turn their ideas into reality using their own personal cloud computer.

[🔮 Homepage](https://deta.space) - [💻 Developer Docs](https://deta.space/docs) - [📚 User Manual](https://deta.space/manual)

Learn more on [why we are building Space](https://deta.space/motivation).

</div>

## Getting Help

We have answered some [FAQs](https://deta.space/manual/faq) in our [docs](https://deta.space/manual), but we are here to help and would love to hear what you think!
- Code Questions: [GitHub Discussions](https://github.com/orgs/deta/discussions)
- Chat: [Discord](https://go.deta.dev/discord)
- Shenanigans: [Twitter](https://twitter.com/detahq)
- Emails (no support): `team@deta.sh`

## About This Repository

This repository contains a [Astro](https://astro.build) application that handles the Deta Space [Docs](https://deta.space/docs), [Manual](https://deta.space/manual) and [Changelog](https://deta.space/changelog).

The actual content for the different pages can be found in `./src/pages/` in the respective folders.

> If you are looking for the legacy documentation for Deta Cloud head over to [deta/legacy-docs](https://github.com/deta/legacy-docs). Read more about how Cloud is moving to Space in our [blog](https://deta.space/blog/moving-to-space).

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
