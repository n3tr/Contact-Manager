import React, { PropTypes } from 'react'

const ContactListItemInfo = ({contact}) => {
  return (
    <div className="contact-list-item--info">
      <h3 className="contact-list-item--title">
        {contact.name}
      </h3>
      <small>{contact.tel}</small>
    </div>
  );
}

export default ContactListItemInfo
