# Portfolio

Portfolio website for my developer stuff

## Available scripts

Run the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
```
yarn start
```

Launch the test runner in the interactive watch mode:
```
yarn test
```

Build the app for production to the `build` folder:
```
yarn build
```

Once that's done, you can run your production build locally:
```
npx serve -s build
```

## Env-files

Required public keys for EmailJS and reCAPTCHA are imported from .env-files. Usually .env-files are not committed to version control, but I made an exception here as I  don't want to check the public keys again from admin consoles.
