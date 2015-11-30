import React, { PropTypes } from 'react'
import { Link } from 'react-router'

const ContactDetailAction = ({contact, onClickDelete}) => {
  return (
    <div className="contact-detail--action ">
      <Link to={"/contact/" + contact.id + "/edit"} type="button" className="btn btn-default">Edit</Link>
      <a
        type="button"
        className="btn btn-danger"
        onClick={ onClickDelete }>
        Delete
      </a>
    </div>
  )
}

export default ContactDetailAction
