import React from 'react'

import { connect } from 'react-redux'
import ContactDetailInfo from './ContactDetailInfo.react'
import ContactDetailAction from './ContactDetailAction.react'
import ContactDetailAvatar from './ContactDetailAvatar.react'

const ContactDetail = ({contact, dispatch, history, onClickDelete}) => {
  return (
    <div>
      <h2 className="page-title">{contact.name}</h2>
      <div className="page-content">
        <div className="contact-detail">
          <ContactDetailAvatar contact={contact} />
          <ContactDetailInfo contact={contact}  />
          <ContactDetailAction
            contact={contact}
            onClickDelete={onClickDelete} />
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

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClickDelete: () => {
      console.log(ownProps);
      dispatch({
        type: 'DELETE_CONTACT',
        id: ownProps.params.id
      })
      ownProps.history.replace('/')
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactDetail)
