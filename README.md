## Here's my guide on how to make a website like Geoffrey's for Skyline:

[https://skylineprof.github.io/](https://skylineprof.github.io/)

**_Meta-thought_**: I consider these steps (filling in a template of Geoffory's website) is a balance of speed of website development and good looks. A faster approach is to use a simple HTML or Markdown page. On the opposite extreme, for a more customized look you can DIY a full website.


# Where to host the website

You have two options here, you can either make a new account (or preferable organization) called say `customOrg` so that your website is located at:

```
https://customOrg.github.io/
```

You can also use your own account here if you don't have a GitHub pages profile and want this to be the placeholder. 

If you choose this option, make sure the `Repository Name` on the import page (below) is:

```
customOrg.github.io
```

---

The second way (and probably what you want) is to just make it a repository on your GitHub account (called say `customRepo`) in which case the website will be at:

```
https://username.github.io/customRepo
```

# Import the website repo to your account

Once you've decided what you want to do, go to [GitHub's import page](https://github.com/new/import) and import the repo from the following URL to whichever owner you want:

```
git clone https://github.com/mustafaquraish/project-website-template
```


# Setting up local copy

You can in theory never set up the build environment locally and commit/push 
everytime you make changes to see if it compiles successfully, but that's 
tedious. The below has been tested to work on Ubuntu (by Daniel) and on MacOS
(by Mustafa). In theory nothing here prevents it from running on Windows but
we have not been successful in doing so. 

First, install `nodejs` and `npm`:
```
sudo apt-get install nodejs npm
```

If you get `npm` errors in the steps below it might help to update `npm` (apt doesnt have the latest version):
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

- Change text and links `src/pages/index.js`. Some scary javascript stuff if 
you've not used it before, but just pattern matching and changing the text in 
places should work fine.
 
### Images

There's images linked in the following `file:line`. You might want to change 
the images linked here (and add the images you are linking to `static/img`)

- `docs/intro.md:15`
- `docusaurus.config.js:22`
- `docusaurus.config.js:26`
- `docusaurus.config.js:29`
- `src/pages/index.js:68`
- `src/pages/index.js:98`
 
## Paper webpage 

> For instance: https://orgName.github.io/customRepo/paper
 
The paper webpage has a link, a video, and a citation that you can update next.

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
 
# Miscellaneous notes when developing.

- Your updates should live reload if you've set up and run `npm start`, just 
check your browser for changes.

- This webpage uses the Docusaurus framework. For documentation on how to do 
things not in this website, see: https://v2.docusaurus.io/

- Geoffrey makes use of the documentation functionality (see docs/ folder which 
builds https://skylineprof.github.io/docs/), but this has been disabled for now.
If you wish to enable them, there are commented out blocks in 
`docsdocusaurus.config.js` to enable these. They're marked with `NOTE` so you
can just search for them. The documentation is generated based on the markdown 
files in `docs/`, so you can just add your documentation there. Additionally,
a comment in `src/pages/index.js` describes what to modify to add a `Docs` 
button on the front page banner instead of the `Code` one.

- The best Docusaurus guide that I could find is 
https://blog.logrocket.com/easy-documentation-with-docusaurus/


# Publishing to GitHub Pages

The repository already contains a workflow which builds and deploys the website 
whenever a commit is made to the master branch. To set up the URL to redirect 
to this page, follow these insructions:

- Go to your repository on GitHub
- Go to the settings tab for the repo
- Scroll down to the **GitHub Pages** section.
- Set the branch to be `gh-pages` (created automatically after push)
- Set the folder in the branch to be `/(root)`.
- You don't need to set any custom domain if you don't want to.
- Save.

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