import React from 'react'
import { Link } from 'react-router'

const Contact = ({ contact, onClickDelete }) => {

  return (
    <li className="media col-md-6 col-lg-4">
      <div className="thumbnail">
        <img className="media-object" src={"faces/" + contact.avatar} />
      </div>
      <div className="media-heading">
        <h3>
          {contact.name}
          <small>
            <Link to={ contact.id + "/edit" }><span className="glyphicon glyphicon-pencil"></span></Link>
            <Link to={ contact.id + "/delete/"} className="delete-contract" onClick={
                onClickDelete.bind(this, contact)
              }>
              <span className="glyphicon glyphicon-trash"></span>
            </Link>
          </small>
        </h3>
      </div>
      <div className="media-body">
        <dl>
          <dt>Phone Number:</dt>
          <dd>{contact.tel}</dd>
          <dt>Email:</dt>
          <dd>{contact.email}</dd>
        </dl>
      </div>
      <hr/>
    </li>
  )
}

export default Contact
