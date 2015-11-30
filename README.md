Backbone Contact Manager
========================

![](https://travis-ci.org/n3tr/Contact-Manager.svg?branch=master)

An example of conversion Backbone contact manager app to React + Redux + React Router.. Webpack.. :package:

## Demo
https://contact-manager-n3.herokuapp.com

## Hacking
```sh
npm install
npm run dev
# open another terminal
npm run watch
# OR
webpack --watch
# localhost:3000
```

## Testing
```
npm test
```


## TODO

- [x] Setup NPM and dependencies module.
  - Due to deprecrated of JSXTransform and Babel-browser
- [x] Convert source code into modules.
  - [x] ContactManager
  - [x] Backbone View and Modole
  - [x] Router
- [x] app.js as entry point.
- [x] Webpack Config file for code build.
- [x] Backbone View to React Component
  - **Note:** Ideas from - [Ryan Florence - Don't Rewrite, React! at react-europe 2015](https://www.youtube.com/watch?v=BF58ZJ1ZQxY)
  - [x] Contact List and Contact Item to React Component.
  - [x] ContactForm (New Contact) to React
  - [x] ContactForm (Edit Contact) to React
- [x] Redux Reducer
  - [x] Contacts reducer with test
  - [x] Refactor ContactReducer into 2 reducers: Contact, ContactById
  - **Note:** Idea to Designing the State Shape : http://redux.js.org/docs/basics/Reducers.html  
  Would be better with normalizr
  - [x] Use Provide and Connect from react-redux
  - [x] Create Redux store with reducers
  - [x] Make ContactList and ContactForm use redux store instead BackboneModel.
- [x] Remove Backbone Model, View.
- [x] Create Routes using react-router
- [x] Replace Backbone's Router with react-router
- [x] Remove Backbone.js, jQuery, and Underscore.
- [x] Restructure code by move reducers and storeState into separate module
- [x] Cleanup code by using redux's mapStateToProps.
  - This allow to implement component as stateless component.
- [x] Clean up component tree by using child component.
- [x] Add Contact Detail view.
- [x] Alert on Destructive action

#### Design

- [x] CSS Master-View (split pane).
- [x] Responsive Support : Tested on Chrome/iOS9


#### To be implemented

- [ ] Data Model
  - Immutable.js or custom base model, should be archived immutable data flow.
- [ ] Design: Contact Detail.
- [ ] Design: Contact Form.


#### Deployment / CI

- [x] Express for page serving.
  - **Note:** Need express to host static content on heroku.
- [x] Webpack Production config and build script
- [x] Procfile and start script
- [x] Add Travis for CI
- [x] Add Github hook to heroku for auto Deployment


---------------------------------------------

Simple ~~Backbone.js~~ React + Redux + React-router example application


## Slides
http://dmytroyarmak.github.io/codeangels-backbone-introduction

## Tutorial
- [Step 0 - Initialization of project](https://github.com/dmytroyarmak/backbone-contact-manager/releases/tag/step-0)
- [Step 1 - Add dependencies](https://github.com/dmytroyarmak/backbone-contact-manager/releases/tag/step-1)
- [Step 2 - Contact Model](https://github.com/dmytroyarmak/backbone-contact-manager/releases/tag/step-2)
- [Step 3 - Contacts Collection](https://github.com/dmytroyarmak/backbone-contact-manager/releases/tag/step-3)
- [Step 4 - Simple Contact view](https://github.com/dmytroyarmak/backbone-contact-manager/releases/tag/step-4)
- [Step 5 - Render All Contacts](https://github.com/dmytroyarmak/backbone-contact-manager/releases/tag/step-5)
- [Step 6 - Add Router](https://github.com/dmytroyarmak/backbone-contact-manager/releases/tag/step-6)
- [Step 7 - Delete contact button](https://github.com/dmytroyarmak/backbone-contact-manager/releases/tag/step-7)
- [Step 8 - Add new contact](https://github.com/dmytroyarmak/backbone-contact-manager/releases/tag/step-8)
- [Step 9 - Edit contact page](https://github.com/dmytroyarmak/backbone-contact-manager/releases/tag/step-9)

## Next lesson

https://github.com/dmytroyarmak/marionette-contact-manager
