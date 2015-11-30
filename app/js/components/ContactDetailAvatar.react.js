
import React, { PropTypes } from 'react'

const ContactDetailAvatar = ({contact}) => {
  return (
    <div className="contact-detail--thumbnail">
      <img src={"/faces/" + contact.avatar} />
    </div>
  )
}

export default ContactDetailAvatar
