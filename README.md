This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start` / `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test` / `yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build` / `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run serve` / `yarn serve`

**Note: You have to `build` app before serving it.**

Runs built app on `http://localhost:5000` and `http://{your.network.ip}:5000`

In order to change public url you have to update:

1. `package.json`

   ```diff
   -  "homepage": "https://keenthemes.com/metronic/preview/react",
   +  "homepage": "https://my.domain/my/app",
       "scripts": {
   -     "serve": "cp-cli build _site/metronic/preview/react && serve",
   +     "serve": "cp-cli build _site/my/app && serve",
   ```

2. `serve.json`

   ```diff
      "public": "_site",
      "redirects": [
        {
          "source": "/",
   -      "destination": "/metronic/preview/react"
   +      "destination": "/my/app"
        }
      ],
      "rewrites": [
        {
   -      "source": "/metronic/preview/react/**",
   +      "source": "/my/app/**",
   -      "destination": "/metronic/preview/react/index.html"
   +      "destination": "/my/app/index.html"
        }
   ```

For more details check official [create-react-app deployment](https://facebook.github.io/create-react-app/docs/deployment#building-for-relative-paths) and [serve-handler options](https://github.com/zeit/serve-handler#options).

### `npm run lint` / `yarn lint`

Runs eslint on `src` directory.

### `npm run format` / `yarn format`

Runs prettier on `src` directory.

### `npm run eject` / `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

## Explanation Contents of Each Folder

- ### public

Berisikan file tambahan yang diperlukan pada project tersebut seperti icon, image, css dll yang tidak terkena kompres saat build project tersebut.

- ### build

Hasil dari perintah (yarn build / npm run build) project yang telah di compress untuk digunakan pada application server.

- ### node_modules

Sekumpulan library yang telah terinstal dan terdefinisikan pada package.json.

- ### src

Folder yang berisi semua file yang dibutuhkan pada aplikasi mulai dari Component, style, assets dll.

- ### src/_metronic

Berisi file yang berhubungan dengan framework metronic.

- ### src/_metronic/_assets

Merupakan bagian umum framework metronic seperti: js(Layout), plugins(Icons), sass(Style).

- ### src/_metronic/_helpers

Merupakan utilitas global yang digunakan oleh semua modul.

- ### src/_metronic/_partials

Merupakan component global yang digunakan oleh semua modul.

- ### src/_metronic/i18n

Mengatur bahasa yang digunakan pada aplikasi.

- ### src/_metronic/layout
Layouting global yang digunakan pada framework metronic contohnya: SideBar, Header, Footer dll.

- ### src/app

Berisi seluruh modul yang digunakan oleh aplikasi.

- ### src/app/modules

Berisi modules yang penting seperti : Auth, dll.

- ### src/app/pages

Berisi halaman aplikasi seperti : Dashboard, dan halaman lainnya.

- ### src/app/App.js

Merupakan state awal aplikasi dijalankan.

- ### src/app/BasePage.js

Pendefinisian route yang digunakan pada aplikasi.

- ### src/app/Routes.js

Konfigurasi route awal setelah aplikasi dijalankan.

- ### src/app/redux

Berisi mengenai konfigurasi redux store, reducer, setup axios dll.