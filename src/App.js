import React, { Component } from 'react'
import Layout from './components/Layout/Layout'
import { BrowserRouter as Router } from 'react-router-dom'
import { connect } from 'react-redux'
import { initiate } from './tools/actions'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends Component {

	componentDidMount (props) {
    this.props.onInit()
	}

  render() {
    return (
      <Router basename="/">
          <Layout/>
      </Router>
    );
  }
}

const mapDispatchToProps = dispatch => {
	return {
		onInit: () => { dispatch(initiate()) }
	}
}

export default connect(null, mapDispatchToProps)(App);