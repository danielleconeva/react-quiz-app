import { useState, useCallback } from "react";
import QUESTIONS from '../questions.js';
import QuestionTimer from "./QuestionTimer.jsx";
import quizCompleteImg from '../assets/quiz-complete.png';

export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);
    const activeQuestionindex = userAnswers.length;
    const quizIsComplete = activeQuestionindex === QUESTIONS.length;


    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
        setUserAnswers((prevUserAnswers) => {
            return [...prevUserAnswers, selectedAnswer]
        });
    }, []);

    const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer]);

    if (quizIsComplete) {
        return <div id="summary">
            <img src={quizCompleteImg} alt="Trophy Icon"></img>
            <h2>Quiz Completed!</h2>
        </div>
    }

    const shuffledAnswers = [...QUESTIONS[activeQuestionindex].answers];
    shuffledAnswers.sort(() => Math.random() - 0.5);

    return (
        <div id="quiz">
            <div id="question">
                <QuestionTimer key={activeQuestionindex} timeout={10000} onTimeout={handleSkipAnswer} />
                <h2>{QUESTIONS[activeQuestionindex].text}</h2>
                <ul id="answers">
                    {shuffledAnswers.map(answer => (
                        <li key={answer} className="answer">
                            <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
                        </li>))}
                </ul>
            </div>
        </div>
    )
}