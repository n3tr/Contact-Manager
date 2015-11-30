import React from 'react'
import { Link } from 'react-router'

const Contact = ({ contact, onClickDelete }) => {
  return (
    <li className="contact-list-item">
      <Link to={"/contact/" + contact.id} >
        <div className="contact-list-item--content cf">
          <div className="contact-list-item--thumbnail">
            <img src={"/faces/" + contact.avatar} />
          </div>
          <div className="contact-list-item--info">
            <h3 className="contact-list-item--title">
              {contact.name}
            </h3>
            <small>{contact.tel}</small>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default Contact
