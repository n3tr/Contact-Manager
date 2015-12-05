import React, { PropTypes } from 'react'

class ContactFormEmail extends React.Component {

  getValue() {
    return this.refs['input-tel'].value;
  }

  render() {
    var { defaultValue } = this.props;
    return (
      <div className="form-group">
        <label className="col-sm-4 control-label">Telephone number:</label>
        <div className="col-sm-6">
          <input
            type="tel"
            className="form-control contact-tel-input"
            defaultValue={defaultValue}
            ref="input-tel" />
        </div>
      </div>
    )
  }
}

export default ContactFormEmail
