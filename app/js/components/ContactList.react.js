import React  from 'react'
import Contact from './Contact.react'

export default class ContactList extends React.Component {
  onClickDelete(contact, e) {
    // TODO: Replace with Redux
    e.preventDefault();
    contact.collection.remove(contact);
    this.forceUpdate();
  }
  render() {
    let self = this;
    return (
      <div>
        <h2 className="page-header text-center">List of contacts</h2>
        <p className="text-center">
          <a href="#contacts/new" className="btn btn-lg btn-outline">Add Contact</a>
        </p>
        <ul className="media-list row contacts-container">
          {
            this.props.contacts.map( (contact, i) => {
              return <Contact contact={contact} onClickDelete={
                self.onClickDelete.bind(this)
              } key={i}/>
            })
          }
        </ul>
      </div>
    )
  }
}
