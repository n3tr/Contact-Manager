import React, { PropTypes } from 'react'

const App = React.createClass({
  render () {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
})

export default App
