import React, { Component } from 'react'
import './App.css'
import Quiz from '../src/Quiz'

let quizData = require('./quiz_data.json')

class App extends Component {
  render() {
    return (
      <Quiz quizData={quizData} />
    )
  }
}

export default App