import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

const ContactDetail = ({contact, dispatch, history}) => {
  return (
    <div>
      <h2 className="page-title">{contact.name}</h2>
      <div className="page-content">
        <div className="contact-detail">
          <div className="contact-detail--thumbnail">
            <img src={"/faces/" + contact.avatar} />
          </div>
          <div className="contact-detail--info">
            <p><b>Name:</b> {contact.name}</p>
            <p><b>Email:</b> {contact.email}</p>
            <p><b>Tel:</b> {contact.tel}</p>
          </div>
          <div className="contact-detail--action ">
            <Link to={"/contact/" + contact.id + "/edit"} type="button" className="btn btn-default">Edit</Link>
            <a
              type="button"
              className="btn btn-danger"
              onClick={
                () => {
                  dispatch({
                    type: 'DELETE_CONTACT',
                    id: contact.id
                  })
                  history.replace('/')
                }
              }>
              Delete
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    contact: state.contactById[ownProps.params.id]
  }
}

export default connect(mapStateToProps)(ContactDetail)
