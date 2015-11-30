import React, { PropTypes } from 'react'

const ContactFormAvatar = ({avatarUrl}) => {
  return (
    <div className="edit-contact--thumbnail">
      <img src={"/faces/" + avatarUrl} />
    </div>
  )
}

export default ContactFormAvatar
