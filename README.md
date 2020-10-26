# IOMED REACT TECNICAL TEST
- Simple React app for get Weather information
- Deployed: https://iomed-react.web.app/weather

## TECH STACK 
- React (Create React app)
- FireBase 
- Elastic UI
- www.el-tiempo.net/api

## TASK - UX - REQUISITES
- Create page with Searchbar to look for towns
- Show Card with: Town name, Tª, Rain Chances
- User can save the Search Results
- Use Firebase to Register Users + Persist Search Data

## SRC folder Structure: 
- *Components*: Components are divided in Prensentational(UI: Just the presentaion of the data  ) and Logic (index : It has the Logic and data Fetch fo the component) except for Layout and Login Components, that are only presentational. 
- *hooks*: Contains one hook for data fetching
- *routes*: The url routes of the apps (Match the screens component)
- *screens*: There are only 2 screens: The "Home (Login)" screen and the Weather screen
- *store*: Context API for set the Selected Town
- *utils*: Firebase configuration

## KNOWN ISSUES 
- EUICARD:
- -  Failed prop type: The prop `title` is marked as required in `EuiCard`, but its value is `undefined`


## CREATE REACT APP DOCS

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

#### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Learn More

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

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
