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

Required keys for EmailJS and reCAPTCHA are imported from env-files. Remember to include these as they are not committed to repository. These files should contain the following keys and values for them:

.env
```
REACT_APP_EMAILJS_SERVICE_ID
REACT_APP_EMAILJS_TEMPLATE_ID
REACT_APP_EMAILJS_USER_ID
REACT_APP_RECAPTCHA_SITE_KEY
```

.env.development (these override the above on development)
```
REACT_APP_EMAILJS_TEMPLATE_ID
REACT_APP_RECAPTCHA_SITE_KEY
```