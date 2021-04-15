# Tailwind CSS Installation

## Steps to Install Tailwind CSS in React

Consider a new project and follow these steps :

- Our project directory will be looking this -

```bash
- <project-name>
    - doc
        - react-app.md
        - tailwind.md
	- public
		- favicon.ico
		- index.html
        - manifest.json
        - robots.txt
	- src
        - css
            - tailwind.css
        - svg
            - react.svg
            - twcss.svg
        - App.js
        - index.js
        - reportWebVitals.js
    - .gitattributes
    - .gitignore
    - package.json
    - postcss.config.js
    - tailwind.config.js

```

**Step 1**
<br>
Install all the required dependencies

```bash
npm install # or `npm i`
```

**Step 2**
<br>
Now paste the following code inside `postcss.config.js` (_for development_)

```js
module.exports = {
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
```

**Step 4**
<br>
In your _CLI_ run the following command -

```bash
npm run build:css:dev
```

This will download all required classes which are required for styling in HTML inside `./<project-name>/src/css/dev/styles.css`

## Purge TailwindCSS file in React file

- After completing styling, it's time for production mode.
- In production, we must have a minified version of CSS.
- There may be lot's of classes that we didn't use.
- Instead we can _PurgeCSS_
- Follow the below command to minify -`

**Step 1**
<br>
Edit your `postcss.config.js` file as -

```js
const purgecss = require("@fullhuman/postcss-purgecss");
const cssnano = require("cssnano");

module.exports = {
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    cssnano({
      preset: "default",
    }),
    purgecss({
      content: ["./src/App.js", "./src/*/*.jsx"], // All react file name to be provided
      defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
    }),
  ],
};
```

**Step 2**
<br>

Now run the following command in your CLI -

```bash
npm run build:css:prod
```

This will store the purged css file as `main.css` in `./<project-name>/src/css/prod/styles.css`

## More resource on TailwindCSS

[TailwindCSS official Docs](https://tailwindcss.com/docs)
[Installation and Purge TailwindCSS](https://flaviocopes.com/tailwind-setup/)
