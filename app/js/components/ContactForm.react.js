import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class ContactForm extends React.Component {
  onFormSubmit(e) {
    e.preventDefault();
    var { editingContact, contacts, dispatch, history } = this.props;
    var attrs = {
      name: this.refs['input-name'].value,
      tel: this.refs['input-tel'].value,
      email: this.refs['input-email'].value,
    };

    if(editingContact) {
      attrs.id = editingContact.id;
      dispatch({
        type: 'UPDATE_CONTACT',
        contact: attrs
      })
    } else {
      attrs.id = contacts.length === 0 ? 1 : contacts[contacts.length - 1] + 1;
      attrs.avatar =  (Math.floor(Math.random() * 15) + 1)  + '.jpg';
      dispatch({
        type: 'ADD_CONTACT',
        contact: attrs
      })
    }

    history.replace('/contact/' + attrs.id);
  }
  render () {
    var { editingContact } = this.props;
    var { name, email, tel, avatar } = editingContact ? editingContact : {};

    var cancelLink = "/" + (editingContact ? 'contact/' + editingContact.id : "");
    console.log(cancelLink);
    return (
      <div>
        <h2 className="page-title"> {editingContact ? 'Edit' : 'Create'} Contact</h2>
        <div className="page-content">
          {
            editingContact ? (
              <div className="edit-contact--thumbnail">
                <img src={"/faces/" + avatar} />
              </div>
            ) : null
          }

          <form role="form" className="form-horizontal contract-form" onSubmit={this.onFormSubmit.bind(this)}>
            <div className="form-group">
              <label className="col-sm-4 control-label">Full name:</label>
              <div className="col-sm-6">
                <input
                  type="text"
                  className="form-control contact-name-input"
                  ref="input-name"
                  defaultValue={name} />
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-4 control-label">Email address:</label>
              <div className="col-sm-6">
                <input
                  type="email"
                  className="form-control contact-email-input"
                  defaultValue={email}
                  ref="input-email"/>
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-4 control-label">Telephone number:</label>
              <div className="col-sm-6">
                <input
                  type="tel"
                  className="form-control contact-tel-input"
                  defaultValue={tel}
                  ref="input-tel" />
              </div>
            </div>
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
