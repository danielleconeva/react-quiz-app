import { useState } from "react";
import QUESTIONS from '../questions.js';

export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionindex = userAnswers.length;

    function handleSelectAnswer(selectedAnswer) {
        setUserAnswers((prevUserAnswers) => {
            return [...prevUserAnswers, selectedAnswer]
        });
    }

    return (
        <div id="quiz">
            <div id="question">
                <h2>{QUESTIONS[activeQuestionindex].text}</h2>
                <ul id="answers">
                    {QUESTIONS[activeQuestionindex].answers.map(answer => (
                        <li key={answer} className="answer">
                            <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
                        </li>))}
                </ul>
            </div>
        </div>
    )
}