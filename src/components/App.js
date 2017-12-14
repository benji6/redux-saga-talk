import React from 'react'
import {connect} from 'react-redux'
import {widgetRequest} from '../actions'

class App extends React.Component {
  render () {
    const {handleGetWidget} = this.props

    return (
      <button onClick={handleGetWidget}>Get widget</button>
    )
  }
}

const mapDispatchToProps = {
  handleGetWidget: widgetRequest,
}

export default connect(null, mapDispatchToProps)(App)
