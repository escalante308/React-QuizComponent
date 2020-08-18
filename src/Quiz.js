import React, { Component } from 'react'

class Quiz extends Component {

    constructor(props) {
        super(props)
        this.state = {quiz_position: 1}
    }
    
    render() {
        return <div>
            <div className="QuizQuestion">
                { this.props.quizData.quiz_questions[this.state.quiz_position - 1].instruction_text }
            </div>
        </div>
    }
}

export default Quiz