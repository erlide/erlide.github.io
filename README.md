# Erlide project site

This is the source for [Erlide's](https://erlide.org/) project site that is published using
[GitHub Pages and Jekyll](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/about-github-pages-and-jekyll).

The site is styled using [Tailwind CSS](https://tailwindcss.com/).

## Repository content

Files in following directories should not be manually changed:

- `articles/` that contains documentation.
- `update/` that contains plugin packages, i.e. the update site.

These directories should instead be updated by publishing updates from the
[erlide_eclipse](https://github.com/erlang/erlide_eclipse) repo using its Makefile.


## Local development tips

### Install dependencies

With Bundler:

    bundle install --binstubs

### How to run a development server

    jekyll serve

then navigate to [localhost:4000](https://localhost:4000)

### How to regenerate the site

    jekyll build
