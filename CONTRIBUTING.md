# Rules of thumb

- Leave the last line empty. It makes `git diff` (and any `diff`) easier to review when the last
  line is modified/appended.
- Wrap lines. Suggest wrapping to 100 characters, which is the [Rust fmt
  standard](https://rust-lang.github.io/rustfmt/?version=master&search=#max_width).

# VS Code

If you use VS Code, suggest

- Do NOT add/commit your `.vscode/settings.json`. Instead,
  - add `.vscode/settings.json` (but NOT the whole `.vscde` directory) to `.gitignore`, and
  - share any suggested settings in `.vscode/settings.json.example` and add that to git.
  
- [Rewrap](https://marketplace.visualstudio.com/items?itemName=stkb.rewrap) for rewrapping comments
  and documentation.
  
  Rewrap doesn't touch the source code itself, only comments (and `.md` files). It preserves
  Markdown formatting in comments (even though it understands only one of Markdown
  formatting/indentation way of nested lists, see source code of this file below). You can apply
  Rewrap to Markdown (`.md`) files, too.
  
  If you edit existing content a lot, do NOT have Rewrap set to automatic, but use Alt+Q to rewrap
  the current comment section (consecutive lines of comments that include the current line). Ctrl+A
  Alt+Q rewraps all comments (in the current file).

- [Markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)
  for Markdown checks. But, suggest turning off
  
  - [MD013 to allow long lines, for example: Markdown
tables](https://github.com/DavidAnson/markdownlint/blob/main/doc/md013.md)
  - [MD025 to allow multiple H1
headings](https://github.com/DavidAnson/markdownlint/blob/main/doc/md025.md)
  
  How? Either by having the following at the top of the `.md` files:
  
  ```html
  <!-- markdownlint-disable MD013 -->
  <!-- markdownlint-disable MD025 -->
  ```
  
  Or by the following user settings.
  
- Configure in Ctrl+Shift+P > Preferences: Open User Settings (JSON):
  
  ```json
    "editor.rulers": [
        100
    ],
    "markdownlint.config": {
        "MD013": false,
        "MD025": false
    }
  ```
  
- [Code Spell
  Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)

- [Overtype](https://marketplace.visualstudio.com/items?itemName=drmerfy.overtype) is excellent when
  editing tables, or any preformatted text.

- [Markdown Preview Github
  Styling](https://marketplace.visualstudio.com/items?itemName=bierner.markdown-preview-github-styles)

- Preview Markdown in a separate tab with `Ctrl + Shift + P` > Markdown: Open Preview.

- Please, share other VS Code extensions by adding them to `.vscode/extensions.json`.

# Firefox

Markdown Preview in VS Code sometimes scrolls the (Markdown) source code up or down.

For smooth preview, install [Markdown Viewer
Webext](https://addons.mozilla.org/en-US/firefox/addon/markdown-viewer-webext/) in Firefox. Also
configure Firefox [on Linux/Mac
OS](https://github.com/Cimbali/markdown-viewer#support-for-local-files-on-linux-and-macos) so it
applies this extension to local Markdown files.
