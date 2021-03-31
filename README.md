# EWildlife App

A React/Redux powered app for collecting wildlife intakes and then outputting into the Parks & Wildlife Format

## Setup

You will need the following prerequisites to develop, build, and deploy the application:

- Node[https://nodejs.org/en/]: Currently developed using 11.9.0
- Firebase Tools: `npm install -g firebase-tools`

You will need to be authenticated with Firebase to deploy the application, once you install the firebase tools it will ask you to authenticate.

Because this application lives in the same Firebase project as the admin application you will need to apply a target name for this app by running:

`firebase target:apply app ewildlife`

## Development

1. From the root directory run `npm install` to load all of the dependencies required.
2. run `npm run start` to start the application in development watch mode

## Build & Release

1. Ensure that the version number is incremented in the package.json and release notes are added below
2. From the root directory run `npm run build` which will generate a production version of the application inside a dist directory
3. Run `firebase deploy` to push the application out to the host on firebase.

## Release Notes

* 1.0.0 - Initial release
