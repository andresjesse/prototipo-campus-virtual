# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

$ convert -append \*.png out.png

### Main Procedures

- Update schedule: replace services/schedule.js (empty array will render a wait message)

- Update sponsors: replace map-overlay-anim, change frames={} in map/index.js, update modal-contents/sponsor.js

- Update prog: replace services/prog-highlights (abstract can be null, isPresentation=true for sessions, put photos in the same folder)

- Pre-built pages/components:

  - pdfviewer:

    - Use any route to `/pdf?f=pdf-file.pdf`
    - pdf-file must be in `/public/pdfs/`

  - drive-iframe:
    - Create a new page, add `<DriveIframe url={externalURLs["drive-url"]} />`
    - Choose a gDrive file, publish to Web "embedded"
    - Copy iframe URL, add it to `externalURLs`

- Templates SICITE:

  - Latex - `Template_SICITE_2021-UTFPR-GP.tar.gz`; updated 02/08/21
  - Overleaf - `(link)`; added 11/08/21;
  - Word - `Template_SICITE_2021_FINAL_WORD.docx`; updated 03/08/21
  - ODT - `Template_SICITE_2021_FINAL_WRITER.odt`; updated 03/08/21
  - Checklist para Submissão - `SICITE_Checklist_Submissao.docx`; updated 03/08/21

- Templates SEI:

  - Word Extensão - `Template_SEI_2021_EXT_WORD.docx`; updated 04/08/21
  - ODT Extensão - `Template_SEI_2021_EXT_WRITER.odt`; updated 03/08/21
  - Word Inovação - `Template_SEI_2021_INOV_WORD.docx`; updated 04/08/21
  - ODT Inovação - `Template_SEI_2021_INOV_WRITER.odt`; updated 03/08/21

- Tag version:
  - `git tag -a v5-production -m 'versao live de lancamento'`
  - `git push origin v5-production`
