import Router from './router'
import { default as ContactCollection}  from './collections/contacts'
import { default as ContactsView } from './views/contacts'
import { default as ContactForm } from './views/contactForm'
import { default as ContactModel } from './models/contact'

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
      var contactsView = new ContactsView({
        collection: contacts
      });

      $('.main-container').html(contactsView.render().$el);
    });

    router.on('route:newContact', function() {
      var newContactForm = new ContactForm({
        model: new ContactModel()
      });

      newContactForm.on('form:submitted', function(attrs) {
        attrs.id = contacts.isEmpty() ? 1 : (_.max(contacts.pluck('id')) + 1);
        contacts.add(attrs);
        router.navigate('contacts', true);
      });

      $('.main-container').html(newContactForm.render().$el);
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