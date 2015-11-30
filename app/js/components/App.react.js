import React, { PropTypes } from 'react'
import ContactSidebar from './ContactSidebar.react'
import { Link } from 'react-router'

const App = React.createClass({
  render () {
    return (
      <div>
        <header id="global-header">
          <h1 id="global-header--title">
            <Link to="/">Contact Manager</Link>
          </h1>
        </header>
        <ContactSidebar {...this.props} />
        <div id="content">
          {this.props.children}
        </div>

      </div>
    )
  }
})

export default App
