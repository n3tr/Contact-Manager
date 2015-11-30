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
          <Link to="/" className="bar-button bar-button--home">
            <span className="glyphicon glyphicon-home " aria-hidden="true">
            </span>
          </Link>
          <Link to="/new" className="bar-button  bar-button--new">
            <span className="glyphicon glyphicon-plus " aria-hidden="true">
            </span>
          </Link>


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
