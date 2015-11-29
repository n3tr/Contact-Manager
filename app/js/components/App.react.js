import React, { PropTypes } from 'react'
import ContactSidebar from './ContactSidebar.react'


const App = React.createClass({
  render () {
    return (
      <div>
        <ContactSidebar />
        <div id="content">
          {this.props.children}
        </div>

      </div>
    )
  }
})

export default App
