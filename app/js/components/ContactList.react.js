import React  from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import ContactListItem from './ContactListItem.react'

const ContactList = ({contacts}) => {
  return (
    <ul className="contact-list">
      {
        contacts.map( (contact, i) => {
          return <ContactListItem contact={contact} key={i}/>
        })
      }
    </ul>
  )
}

const mapStateToProps = (state) => {
  // Create Array of contacts
  // by map contacts ([1,2,3]) with contactById (1:{})
  return {
    contacts: state.contacts.map( (id) => {
      return state.contactById[id]
    })
  }
}

export default connect(mapStateToProps)(ContactList)
