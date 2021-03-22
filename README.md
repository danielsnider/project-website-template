# How to make a website like Geoffrey's Skyline

Skyline Website: [https://skylineprof.github.io/](https://skylineprof.github.io/)

**_Meta-thought_**: We consider these steps (filling in a template of Geoffrey's website) is a balance of speed of website development and good looks. A faster approach is to use a simple HTML or Markdown page. On the opposite extreme, for a more customized look you can DIY a full website.

# Where to host the website

**Option 1:** You could make a new GitHub account (or preferable organization) called say `customOrg` so that your website is located at:

```
https://customOrg.github.io/
```

---

**Option 2:** The second way (and probably what you want) is to just make it in a new or existing repository on your GitHub account (called say `customRepo`) in which case the website will be at:

```
https://username.github.io/customRepo
```

# Import the website repo to your GitHub

**Option 1:** To create a new repository on your GitHub account or chosen organization, go to [GitHub's import page](https://github.com/new/import).

Then clone to your machine for local development:

```
git clone https://github.com/danielsnider/project-website-template
```

**Option 2:** If you want to host this website on the same existing repository as your other code, read the "Other Tips" section at the bottom of this guide and then come back.

# Installing local website development

The below has been tested to work on Ubuntu (by Daniel) and on MacOS
(by Mustafa). In theory nothing here prevents it from running on Windows but
we have not been successful in doing so.

First, install `nodejs` and `npm`:

```
sudo apt-get install nodejs npm
```

If you get `npm` errors in the steps below it might help to update `npm` (apt doesn't have the latest version):

```
sudo npm install -g npm@latest
```

Now, clone the repo from your account / organization, and install the packages required:

```
git clone <URL TO THE REPO YOU SET UP>
cd <REPO NAME>
npm install
npm start
```

You can view the current state of website in your browser by opening [localhost:3000](http://localhost:3000)

# Directory Structure

- Website page content: `src/`
- Images: `static/img/`
- Docs: `docs/` (you can ignore this)

# Things to change

## Required to have the website get published properly:

- Edit the two fields at the top in `docusaurus.config.js`. Make sure you have all the `/` as in the example.

## Other stuff to customize the website

- Site Title, tagline, navbar links, footer, etc can all be changed in
  `docsdocusaurus.config.js`. For the most part you can just rename the stuff
  that's there, or use it as an example to add new ones. Any URLs to do with
  Skyline should be replaced with your own ones.

- Change text and links `src/pages/index.js`. Safely ignore scary javascript stuff. Just pattern match and change the text in places. It should work fine.

## Images

There are image paths in the following code `file:line` locations. You should use different image files and image names to suit your project.

- `docusaurus.config.js:10: img/favicon.ico`
- `docusaurus.config.js:16: img/skyline_social.png`
- `docusaurus.config.js:19: img/skyline.svg`
- `src/pages/index.js:68: img/skyline_wordmark.svg`
- `src/pages/index.js:91: img/skyline_${isDarkTheme ? "dark" : "light"}.png`

## A webpage for your published paper

> For example: https://skylineprof.github.io/paper/
>
> Yours could be: https://orgName.github.io/customRepo/paper

This page has a link, a video, and a citation for your published paper that you can update.

### Paper citation:

Add your citation at this location:

```
src/components/CitationBlock.js:8: const bibtexCitation = `@inproceedings{...}`;
```

### Paper link:

Update the URL to the paper here:

```
src/components/PaperDetails.js:57: href="https://dl.acm..."
```

### Paper video

If you have a video, add the URL here:

```
src/components/VideoOverlay.js:38: src="https://youtube..."
```

# Miscellaneous notes when developing

- Your updates should live reload if you've run `npm start`, just
  check your browser for changes.

- This website uses the Docusaurus framework. For documentation on how to do
  things see: https://v2.docusaurus.io/

- Geoffrey makes use of the documentation functionality (see `docs/` folder which
  builds https://skylineprof.github.io/docs/), but this has been disabled for now.
  If you wish to enable them, there are commented out blocks in
  `docsdocusaurus.config.js` which you can uncomment. They're marked with `NOTE` so you
  can just search for them. The documentation is generated based on the markdown
  files in `docs/`, so you can just add your documentation there. Additionally,
  a comment in `src/pages/index.js` describes what to modify to add a `Docs`
  button on the front page banner instead of the `Code` one.

- The best Docusaurus guide that we could find is:
  https://blog.logrocket.com/easy-documentation-with-docusaurus/

# Enable Build Website on Push

The repository already contains a workflow which builds and deploys the website whenever a commit is made to the master branch. Double check that it is enabled. 

1. Go to your repository on GitHub
1. Go to the settings tab for the repo
1. If you don't see "Build and "Deploy" listed on the left, then click the green button to enable Actions.
    - If you had to enable Actions, commit and push a change to the repo to trigger a first build.

# Publish to GitHub Pages

1. Go to your repository on GitHub
1. Go to the settings tab for the repo
1. Scroll down to the **GitHub Pages** section.
1. Set the Source branch to be `gh-pages` (created automatically after push)
1. Set the folder in the branch to be `/(root)`.
1. You don't need to set any custom domain if you don't want to.
1. Save.

After this the website should be available at the URL as described in the first part of this guide. You can add it to the `about` section of the repository to give people quick access to the site.

# Other tips

If you want to host this website on the same existing repository as your other code, just move all the website files (everything except the `.github` folder) inside a directory, and update the file `.github/workflows/publish.yml` to the following (replacing the necessary fields in `<>`)

```yaml
name: Build and Deploy
on: [push]
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout 🛎️
        uses: actions/checkout@v2.3.1

      - name: Install and Build 🔧
        run: |
          cd <website folder>
          npm install
          npm run build

      - name: Deploy 🚀
        uses: JamesIves/github-pages-deploy-action@4.1.0
        with:
          branch: gh-pages # The branch the action should deploy to.
          folder: <website folder>/build # The folder the action should deploy.
```

# Credits

Website and guide created by:

- Mustafa Quraish 🙏
- Geoffrey Yu 🚀
- Daniel Snider 😃
