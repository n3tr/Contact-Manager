import React, { PropTypes } from 'react'

class NewContact extends React.Component{
  onFormSubmit(e) {
    e.preventDefault();
    var { store, editingId } = this.props;
    var { contacts } = store.getState();
    var attrs = {
      name: this.refs['input-name'].value,
      tel: this.refs['input-tel'].value,
      email: this.refs['input-email'].value,
    };

    if(editingId) {
      attrs.id = editingId;
      store.dispatch({
        type: 'UPDATE_CONTACT',
        contact: attrs
      })
    } else {
      attrs.id = contacts.length === 0 ? 1 : contacts[contacts.length - 1] + 1;
      attrs.avatar =  _.random(1, 15) + '.jpg',
      store.dispatch({
        type: 'ADD_CONTACT',
        contact: attrs
      })
    }

    // Should be replace with redux
    this.props.onClickSubmit(attrs);
  }
  render () {
    var { store, isNew, editingId } = this.props;
    var { contactById } = store.getState()
    var { name, email, tel } = contactById[editingId] ? contactById[editingId] : {};
    return (
      <div>
        <h2 className="page-header text-center"> {isNew ? 'Create' : 'Edit'} Contact</h2>
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
                className="btn btn-outline btn-lg btn-block">Submit</button>
            </div>
            <div className="col-sm-3">
              <a href="#contacts" className="btn btn-outline btn-lg btn-block">Cancel</a>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default NewContact
