# Thank your for contributing

Please follow these steps to get your work merged in.

## Contents

1. [Want to create new `AlertBox` component?](#creating-new-alertbox-component)

### Creating new AlertBox component
> `AlertBox` is a notification alert which is dispatched into live streams showing donate information. See more details at /docs/ALERTBOX.md
 
1. Clone the repo and make a new branch:
```bash
$ git checkout https://github.com/ioxtream-com/obsx -b [name_of_new_branch]
```

2. Install dependencies with Node version 14 or higher:
```bash
$ npm install
```

3. Generate boilerplate to work on:
```bash
$ npm run generate-alertbox
```
Note: will be prompted few questions to generate a React component file and CSS module.

4. Edit your new `.js` and `.css` created files

#### Live changes
You can run `npm start` to serve a gallery of `AlertBox` components:
```bash
$ npm run start
```

#### Before open a Pull Request
Generate `commonjs` library with webpack:
```bash
$ webpack
```
then open a Pull Request with a comprehensive description of changes.