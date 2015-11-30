import React from 'react'
import { Link } from 'react-router'
import ContactListItemAvatar from './ContactListItemAvatar.react'
import ContactListItemInfo from './ContactListItemInfo.react'

const Contact = ({ contact }) => {
  return (
    <li className="contact-list-item">
      <Link
        to={"/contact/" + contact.id}
        className="contact-list-item--link"
        activeClassName="active">
        <div className="contact-list-item--content cf">
          <ContactListItemAvatar contact={contact}/>
          <ContactListItemInfo contact={contact} />
        </div>
      </Link>
    </li>
  )
}

export default Contact
