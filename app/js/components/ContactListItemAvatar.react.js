import React, { PropTypes } from 'react'

const ContactListItemAvatar = ({contact}) => {
  return (
    <div className="contact-list-item--thumbnail">
      <img src={"/faces/" + contact.avatar} />
    </div>
  )
}

export default ContactListItemAvatar
