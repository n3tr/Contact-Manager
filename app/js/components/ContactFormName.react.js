import React, { PropTypes } from 'react'

class ContactFormName extends React.Component {

  getValue() {
    return this.refs['input-name'].value;
  }

  render() {
    var { defaultValue } = this.props;
    return (
      <div className="form-group">
        <label className="col-sm-4 control-label">Full name:</label>
        <div className="col-sm-6">
          <input
            type="text"
            className="form-control contact-name-input"
            ref="input-name"
            defaultValue={defaultValue} />
        </div>
      </div>
    )
  }
}

export default ContactFormName
