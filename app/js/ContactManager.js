import React from 'react'
import ReactDOM from 'react-dom'
import Router from './router'
import { default as ContactCollection}  from './collections/contacts'
import { default as ContactForm } from './views/contactForm'
import { default as ContactModel } from './models/contact'
import ContactList from './components/ContactList.react'
import NewContact from './components/NewContact.react'

const ContactManager = {
  Models: {},
  Collections: {},
  Views: {},

  start: function(data) {
    var contacts = new ContactCollection(data.contacts),
        router = new Router();

    router.on('route:home', function() {
      router.navigate('contacts', {
        trigger: true,
        replace: true
      });
    });

    router.on('route:showContacts', function() {
      // Call toJSON on BackBone collection to convert to raw JS object
      ReactDOM.render(<ContactList contacts={contacts} />, $('.main-container')[0]);
    });

    router.on('route:newContact', function() {
      // TODO: Temp use, should be replace with flux/redux
      let onClickSubmit = (attrs, e) => {
        attrs.id = contacts.isEmpty() ? 1 : (_.max(contacts.pluck('id')) + 1);
        contacts.add(attrs);
        router.navigate('contacts', true);
      }

      ReactDOM.render(
        <NewContact
          contact={new ContactModel()}
          onClickSubmit={onClickSubmit} />, $('.main-container')[0]);
    });

    router.on('route:editContact', function(id) {
      var contact = contacts.get(id),
          editContactForm;

      if (contact) {
        editContactForm = new ContactForm({
            model: contact
        });

        editContactForm.on('form:submitted', function(attrs) {
          contact.set(attrs);
          router.navigate('contacts', true);
        });

        $('.main-container').html(editContactForm.render().$el);
      } else {
        router.navigate('contacts', true);
      }
    });

    Backbone.history.start();
  }
};

module.exports = ContactManager
