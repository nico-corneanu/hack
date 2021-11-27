import React, { useState, useEffect } from 'react';
import './Quiz.css';
import axios from 'axios'

export default function Quiz() {

    const [questions, setQuestions] = useState([{
        answerOptions: [
                "a",
                "b",
                "c",
                "d"
        ],
        isCorrect: "a",
        imgSrc: ""
    }])


    useEffect(() => {
        axios.get("http://localhost:5000/quiz").then(
          res => {
              console.log("TEST");
                let data = res.data;
                let my_list = []
                for(var i = 0; i < 10; i++){
                    let my_dict = {
                        answerOptions: [
                        
                                data[i]['correctAuthor'],
                                data[i]['option1'],
                                data[i]['option2'],
                                data[i]['option3']
                        
                        ],
                        isCorrect: data[i]['correctAuthor'],
                        imgSrc: data[i]['image']
                    }

                    my_list.push(my_dict);
                }

                console.log(my_list);
                setQuestions(my_list);
          }
        )
    },[])
    const qeneralQuestion = "Who created this wonderful painting?"
	

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect, answer) => {
		if (isCorrect === answer) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
           
        
        <div className='quizTime'>
            <div className='app'>
            
                
                {showScore ? (
                    <div className='score-section'>
                        You scored {score} out of {questions.length}
                    </div>
                ) : (
                    <>
                        <div className='question-section'>
                            <div className='question-count'>
                                <span>Question {currentQuestion + 1}</span>/{questions.length}
                            </div>
                            <div className='question-text' onCompositionStart>{qeneralQuestion}</div>
                            <img src={questions[currentQuestion]?.imgSrc}
                            css={`
                                max-height: 90%;
                                max-width: 100%;
                                position: relative;
                                border-radius: 10px;
                                filter: brightness(70%);
                                transition: 0.4s cubic-bezier(0.0075, 0.82, 0.165, 1);

                                &:hover {
                                    filter: brightness(100%);
                                }`}
                            ></img>
                        </div>

                    
                        <div className='answer-section'>
                        {questions[currentQuestion].answerOptions.map((answerOption) => (
                                <button className='buttonQuiz' onClick={() => handleAnswerOptionClick(questions[currentQuestion].isCorrect, answerOption)}>{answerOption}</button>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
	);
}

