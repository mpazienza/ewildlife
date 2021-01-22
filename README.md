# Lana Workflows App

A React/Redux powered app that allows a customized query against the Enlyton API, this works in conjunction with the Lana Workflows Admin App.

## Setup

You will need the following prerequisites to develop, build, and deploy the application:

- Node[https://nodejs.org/en/]: Currently developed using 11.9.0
- Firebase Tools: `npm install -g firebase-tools`

You will need to be authenticated with Firebase to deploy the application, once you install the firebase tools it will ask you to authenticate.

Because this application lives in the same Firebase project as the admin application you will need to apply a target name for this app by running:

`firebase target:apply app enlyton-lana-workflows`

## Development

1. From the root directory run `npm install` to load all of the dependencies required.
2. run `npm run start` to start the application in development watch mode

## Build & Release

1. Ensure that the version number is incremented in the package.json and release notes are added below
2. From the root directory run `npm run build` which will generate a production version of the application inside a dist directory
3. Run `firebase deploy` to push the application out to the host on firebase.

## Release Notes

* 1.0.0 - Initial release
