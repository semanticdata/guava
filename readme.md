> [!NOTE]
> We are in the middle of renaming the project from _Monotome_ to _Guava_. Find the original readme [here](monotome.md).

# [Guava](https://semanticdata.github.io/guava/) Wiki

What is it? A personal wiki, a digital garden, an online notebook? Well, yes, kind of. Guava Wiki aims to be a simple and easy-to-use personal wiki.

<!-- screenshot omitted -->

## Get Started

1. **Clone** this project.
2. **Navigate** to the cloned repository.
3. **Start** a web server (in any way). For example:
   - Running `python -m http.server 8900`.
   - Using the [Live Preview](https://marketplace.visualstudio.com/items?itemName=ms-vscode.live-server) VS Code extension.
4. **Browse** to `localhost:8900` or other served port to use the wiki.

---

## Structure

The current homepage is `guava.md`. Other content is structured into **Subjects** (top level directories) and **Articles** (markdown files) contained within them. Each `readme.md` file within a subject folder is the overview page for that subject.

**Subjects** are ordered into a simple directory structure which is mirrored by `index.json`. Which can be filled by hand if you want to avoid running a script. You can also run `node monotome/bin/generate.js`, which will update `index.json` for you.

## Features

All features are under active development. Some will be temporarily unavailable.

- Inlined Articles
- Backlinks
- Wiki syntax (searchlinks)

### Inlined Articles

Guava supports a link syntax for inlining other Guava articles (i.e. plain markdown files) into a source article. This technique is commonly known as [transclusion](https://en.wikipedia.org/wiki/Transclusion).

<!-- screenshot omitted -->

Any link `<a>` with an href referring to a local file & which has the anchor tag attribute `download` will be inlined into the document. That is, if one file has some content followed by `<a href="example/first.md" download></a>`, then the contents of `example/first.md` is inlined in place of the anchor tag, at the position of the tag definition.

### Backlinks

Guava keeps track of backlinks, or incoming links from one article inside Guava to another. To discover backlinks, run `node monotome/bin/generate.js`. For a taste of what backlinks look like in practice, see the gif below.

<!-- screenshot omitted -->

### Wiki syntax (searchlinks)

Guava has support for the common `[[wiki]]` syntax, although it implements it in a slightly different way. When you use wiki syntax on a word or phrase in your wiki, a link will be created.

Clicking that link will perform a search on the subjects and articles of a wiki and navigate to the first result of that search.

If the result was not what you wanted, you can page the searchlink results with the left and right arrow keys.

Just as `[article](subject/file.md)` links are tracked with backlinks, so too are `[[wiki]]` links.

## Changes from Upstream

Guava has implemented the following changes compared to [monotome](https://github.com/cblgh/monotome):

- Changed default homepage from `readme.md` to `guava.md`.
- Added automatic static site deployment using GitHub Actions.
<!-- - Modernized HTML boilerplate. Introduced new redesigned layout using the [flexbox model](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout) instead of the [grid model](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout). -->
<!-- - Simplified CSS styles. Removing unnecessary resets and obsolete styles. -->
<!-- - Introduced new responsive mobile design with collapsible sidebar. Removed many unnecessary `@media` queries. -->
<!-- - Fixed some accessibility issues. Wikilinks were not visible due to their color. -->

## Acknowledgements

Guava is built on the shoulders of other amazing open souce projects. We'd like to extend a special thanks to [cblgh](https://github.com/cblgh) for his work on [monotome](https://github.com/cblgh/monotome) which this project is based on.

We have the pleasure of using [Marked](https://github.com/markedjs/marked) as our markdown parser and [Inter UI](https://github.com/inter-ui/inter-ui) as our font of choice. Available under the [MIT License](https://github.com/markedjs/marked/blob/master/LICENSE.md) and the [SIL OPEN FONT LICENSE Version 1.1](https://github.com/philipbelesky/inter-ui/blob/main/LICENSE.txt) respectively.

Guava, as well as monotome is distributed under the [AGPL-3.0 License](LICENSE).
