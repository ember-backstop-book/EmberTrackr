# EmberTrackr -- A Sample App for the Ember.js Backstop Book
This is the sample app for the Ember.js book published by Backstop Media.

## Getting started

Clone the repo, `cd` into the project directory, and run:

(install Brunch)
`npm install -g brunch`

(install jsDOM to run tests via the command line)
`npm install -g jsdom`

(install mocha+ chai)
`npm install -g mocha`
`npm install -g chai`

(perform the build)
`brunch build`

You can start a server by running

    brunch watch --server

then visit `localhost:3333`

The generated output is placed in the `public/` (by default) directory when `brunch build` or `brunch watch` is executed.

To run tests, navigate to `localhost:3333/test`

## Deploying to gh-pages

There is a build script, `deploy-gh-pages.sh` in the root of this repo. Running that will build and deploy a new copy of EmberTrackr to Git's pages. WARNING, this script doesn't have much error handling, make sure your repo has no unsaved changes before comming.

http://ember-backstop-book.github.com/EmberTrackr

## Other
Software Versions used:

* jQuery 1.9.0
* Ember 1.0.0-rc.1
* Handlebars 1.0 rc3

## TODO

Items that we either need to do, or at least consider doing.

  * There is no mechanism to delete a Users or Tickets.
  * The more I think about it, the more I feel we should use a local storage adapter.
     * One is available here: https://github.com/rpflorence/ember-localstorage-adapter
     * We'd need a "Reset" button to restore all data to it's default state.
     * Maybe and "export" item to download a JSON representation of data


