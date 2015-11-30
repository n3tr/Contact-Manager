import React from 'react'

import { connect } from 'react-redux'
import ContactDetailInfo from './ContactDetailInfo.react'
import ContactDetailAction from './ContactDetailAction.react'
import ContactDetailAvatar from './ContactDetailAvatar.react'
import { default as swal } from 'sweetalert'

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

const alertConfig = {
  title: "Are you sure?",
  text: "You will not be able to recover this imaginary file!",
  type: "warning",
  showCancelButton: true,
  confirmButtonColor: "#DD6B55",
  confirmButtonText: "Yes, delete it!",
  cancelButtonText: "Cancel",
  closeOnConfirm: true,
  closeOnCancel: true
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClickDelete: () => {
      var al = swal(alertConfig, function(isConfirm){
        if (isConfirm) {
          ownProps.history.replace('/')
          dispatch({
            type: 'DELETE_CONTACT',
            id: ownProps.params.id
          })
        }
      });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactDetail)
