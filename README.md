# My website

> ℹ️ This repository is no longer actively maintained. Using React for a simple website is overkill, and I have migrated the project to plain HTML, CSS, and JavaScript. However, I’m keeping this repository available for reference, as it contains some implementations that I chose not to carry over to the new version.<br><br>You can find the updated website and its source code in https://github.com/kallerouvinen/website.

My professional website created with React + TypeScript + Vite.

## Available scripts

### Install project dependencies

```sh
npm install
```

### Run the app in the development mode

```sh
npm start
```

### Deploy app to GitHub Pages

```sh
npm run deploy
```

### Update packages

```sh
npx npm-check-updates
```

## Env-files

The required public key for Web3Forms is imported from .env-file. While it's common practice not to commit .env-files to version control, I've made an exception in this case. Since the key is public and doesn't pose a security risk, I chose to store it in the repository rather than elsewhere.
