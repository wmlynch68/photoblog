# Photoblog

A lightweight static photo blog, published with GitHub Pages.

## Publish with GitHub Pages

1. In the repository on GitHub, open **Settings → Pages**.
2. Under **Build and deployment**, choose **GitHub Actions** as the source.
3. Push a change to `main`, or run **Deploy photo blog to GitHub Pages** from the **Actions** tab.

The workflow in `.github/workflows/pages.yml` publishes the contents of `site/`. Once the first deployment succeeds, GitHub Pages shows the site URL in the workflow run and in **Settings → Pages**.

## Add a photo story

Put image files inside `site/` (or a subfolder such as `site/photos/`) and add the story markup to `site/index.html`. Reference assets with relative paths, for example:

```html
<figure>
  <img src="photos/coast.jpg" alt="Waves breaking along the coast">
  <figcaption>A quiet morning by the water.</figcaption>
</figure>
```

Commit and push to `main` to publish the update.
