<<<<<<< HEAD
# Tavro

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.22-1.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
=======

## Project Setup and Tooling

### Tools

RECOMMENDED: *Text editor*: Visual Studio Code, you can [download it here](http://code.visualstudio.com) for both Mac, Windows and Linux.


### Prerequisites

Make sure that you have the following installed:

* Install the _latest version_ of [Node.js](http://nodejs.org) (Mac or Windows)
  * Mac users can optionally `brew install node` if they have [brew](http://brew.sh) installed

* Node Sass, you _may_ need it if you haven't already got it installed:

```bash
npm install -g node-sass
```

### Project Install

#### Step 1: Package Manager

To install the project dependencies, you will need to install `yarn`. To install `yarn`, run the following in your terminal:

```bash
npm install -g yarn
```

Mac users can alternatively use `brew` to install `yarn`.

```bash
brew update
brew install yarn
```

##### Step 2: Project Dependencies

Now that we have a package manager, we can install the project dependencies. You can do this by running:

```bash
yarn install
```

This will install our dependencies for running our Angular application.

#### Step 3: Running the project

During development, the project is built using `webpack-dev-server`. This provides a local development server as well as having webpack recompile our app when a file changes. The project will also automatically refresh the page whenever we make changes.

To start the project in development, run:

```
yarn start
```

This will output some information about the project (such as the TypeScript version and build progress). Once you see "build completed", you are ready to code!

Open your browser to [localhost:4000](http://localhost:4000) to start running the code.

### Project Tooling

The project uses `webpack` to build and compile all of our assets. This will do the following for us: 

- Compile all our TypeScript code into JavaScript (starting from `main.ts` and branching outwards from imported files)
- Bundle all our JavaScript into one file to use
- Allow us to use SASS for our component's CSS files
- Provide the polyfills needed to run our app in all modern browsers
- Mock a JSON backend using [json-server](https://github.com/typicode/json-server)
>>>>>>> 860892b0c03877c0db2bc6f86fa17f159f2b3bf2
