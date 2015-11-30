import React from 'react'
import { Link } from 'react-router'
import ContactList from './ContactList.react'

export default class ContactSidebar extends React.Component {
  render() {
    return (
      <div id="sidebar">
        <div className="sidebar-header">
          <h2 className="sidebar-header--title">Contacts</h2>
        </div>
        <ContactList />
        <div className="sidebar-bottom">
          <Link to="/new" className="new-contact-button">Add Contact</Link>
        </div>
      </div>
    )
  }
}
