import React, { PropTypes } from 'react'

const ContactDetailInfo = ({contact}) => {
  return (
    <div className="contact-detail--info">
      <p><b>Name:</b> {contact.name}</p>
      <p><b>Email:</b> {contact.email}</p>
      <p><b>Tel:</b> {contact.tel}</p>
    </div>
  )
}

export default ContactDetailInfo
