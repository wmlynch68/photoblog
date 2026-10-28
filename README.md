# Photoblog

A lightweight static photo blog, published with GitHub Pages.

## Publish with GitHub Pages

1. In the repository on GitHub, open **Settings → Pages**.
2. Under **Build and deployment**, choose **GitHub Actions** as the source.
3. Push a change to `main`, or run **Deploy photo blog to GitHub Pages** from the **Actions** tab.

The workflow in `.github/workflows/pages.yml` publishes the contents of `site/`. Once the first deployment succeeds, GitHub Pages shows the site URL in the workflow run and in **Settings → Pages**.

## Add photos to the first slideshow

Put image files in `site/photos/first-slideshow/`, then add one `<figure class="slide">` per photo inside the `<div class="slides">` in `site/first-slideshow/index.html`. The homepage links to the slideshow at `site/first-slideshow/`. The slideshow adds previous/next buttons, keyboard arrow navigation, and photo indicators automatically. Reference the photos with a path relative to the slideshow page, for example:

```html
<figure class="slide">
  <img src="../photos/first-slideshow/coast.jpg" alt="Waves breaking along the coast">
  <figcaption>A quiet morning by the water.</figcaption>
</figure>
```

Commit and push to `main` to publish the update.
