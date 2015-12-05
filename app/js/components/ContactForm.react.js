import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import ContactFormAvatar from './ContactFormAvatar.react'
import ContactFormName from './ContactFormName.react'
import ContactFormEmail from './ContactFormEmail.react'
import ContactFormTel from './ContactFormTel.react'

class ContactForm extends React.Component {

  createNewContact(attrs) {
    var { dispatch, contacts,history } = this.props;
    var newId = contacts.length === 0 ? 1 : contacts[contacts.length - 1] + 1;
    var avatar = (Math.floor(Math.random() * 15) + 1)  + '.jpg';
    var contact = Object.assign({}, attrs, {
      id: newId,
      avatar: avatar
    })
    dispatch({
      type: 'ADD_CONTACT',
      contact: contact
    })
    history.replace('/contact/' + contact.id);
  }

  updateContact(attrs) {
    var { editingContact, dispatch, history } = this.props;
    var contact = Object.assign({}, attrs, {
      id: editingContact.id
    })
    dispatch({
      type: 'UPDATE_CONTACT',
      contact: contact
    })
    history.replace('/contact/' + contact.id);
  }

  onFormSubmit(e) {
    e.preventDefault();

    var { editingContact, contacts, dispatch, history } = this.props;
    var attrs = {
      name: this.inputName.getValue(),
      tel: this.inputTel.getValue(),
      email: this.inputEmail.getValue()
    };

    if (editingContact) {
      this.updateContact(attrs);
    }else{
      this.createNewContact(attrs);
    }
  }

  render () {
    var { editingContact } = this.props;
    var { name, email, tel, avatar } = editingContact ? editingContact : {};

    var cancelLink = "/" + (editingContact ? 'contact/' + editingContact.id : "");
    return (
      <div>
        <h2 className="page-title"> {editingContact ? 'Edit' : 'Create'} Contact</h2>
        <div className="page-content">

          <form role="form" className="form-horizontal contract-form" onSubmit={this.onFormSubmit.bind(this)}>
            {
              editingContact ? (
                <ContactFormAvatar
                  avatarUrl={avatar}
                  ref={ (ref) => this.inputAvatar = ref } />
              ) : null
            }
            <ContactFormName
              defaultValue={name}
              ref={ (ref) => this.inputName = ref } />
            <ContactFormEmail
              defaultValue={email}
              ref={ (ref) => this.inputEmail = ref } />
            <ContactFormTel
              defaultValue={tel}
              ref={ (ref) => this.inputTel = ref } />
            <div className="form-group">
              <div className="col-sm-offset-4 col-sm-3">
                <button
                  type="submit"
                  className="btn btn-primary btn-lg btn-block">Submit</button>
              </div>
              <div className="col-sm-3">
                <Link
                  to={cancelLink}
                  className="btn btn-default btn-lg btn-block">Cancel</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    editingContact: state.contactById[ownProps.params.id],
    contacts: state.contacts
  }
}

export default connect(mapStateToProps)(ContactForm)
