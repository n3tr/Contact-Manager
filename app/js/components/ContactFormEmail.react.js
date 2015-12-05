import React, { PropTypes } from 'react'

class ContactFormEmail extends React.Component {

  getValue() {
    return this.refs['input-email'].value;
  }

  render() {
    var { defaultValue } = this.props;
    return (
      <div className="form-group">
        <label className="col-sm-4 control-label">Email address:</label>
        <div className="col-sm-6">
          <input
            type="email"
            className="form-control contact-email-input"
            defaultValue={defaultValue}
            ref="input-email"/>
        </div>
      </div>
    )
  }
}

export default ContactFormEmail
