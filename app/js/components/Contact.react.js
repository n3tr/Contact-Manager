import React from 'react'

const Contact = ({ contact, onClickDelete }) => {
  let _contact = contact.toJSON();
  return (
    <li className="media col-md-6 col-lg-4">
      <div className="thumbnail">
        <img className="media-object" src={"app/img/faces/" + _contact.avatar} />
      </div>
      <div className="media-heading">
        <h3>
          {_contact.name}
          <small>
            <a href={"#contacts/edit/" + contact.id}><span className="glyphicon glyphicon-pencil"></span></a>
            <a href={"#contacts/delete/" + contact.id} className="delete-contract" onClick={
                onClickDelete.bind(this,contact)
              }>
              <span className="glyphicon glyphicon-trash"></span>
            </a>
          </small>
        </h3>
      </div>
      <div className="media-body">
        <dl>
          <dt>Phone Number:</dt>
          <dd>{_contact.tel}</dd>
          <dt>Email:</dt>
          <dd>{_contact.email}</dd>
        </dl>
      </div>
      <hr/>
    </li>
  )
}

export default Contact
