import React from 'react'
import ReactDOM from 'react-dom'
import Router from './router'
import { default as ContactCollection}  from './collections/contacts'
import { default as ContactModel } from './models/contact'
import ContactList from './components/ContactList.react'
import NewContact from './components/NewContact.react'

const ContactManager = {
  Models: {},
  Collections: {},
  Views: {},

  start: function(data, store) {
    var contacts = new ContactCollection(data.contacts),
        router = new Router(),
        store = store;

    router.on('route:home', function() {
      router.navigate('contacts', {
        trigger: true,
        replace: true
      });
    });

    router.on('route:showContacts', function() {
      ReactDOM.render(<ContactList store={store} />, $('.main-container')[0]);
    });

    router.on('route:newContact', function() {
      // TODO: Temp use, should be replace with flux/redux
      let onClickSubmit = (attrs, e) => {
        router.navigate('contacts', true);
      }

      ReactDOM.render(
        <NewContact
          store={store}
          isNew={true}
          onClickSubmit={onClickSubmit} />, $('.main-container')[0]);
    });

    router.on('route:editContact', function(id) {
      if (id) {
        // TODO: To be replaced with react-router
        let onClickSubmit = (attrs, e) => {
          router.navigate('contacts', true);
        }
        ReactDOM.render(
          <NewContact
            editingId={id}
            store={store}
            onClickSubmit={onClickSubmit} />, $('.main-container')[0]);
      } else {
        router.navigate('contacts', true);
      }
    });

    Backbone.history.start();
  }
};

module.exports = ContactManager
