import { useState } from "react";
import Answers from "./Answers";
import QuestionTimer from "./QuestionTimer";

export default function Question({questionText,answers,onSelectAnswer,selectedAnswer,answerState,handleSkipAnswer}){
    useState({
        selectedAnswer:'',
        isCorrect:false
    })
    return (<div id='question'>
    <QuestionTimer timeout={10000} onTimeout={handleSkipAnswer
    }/>
    <h2>{questionText}</h2>
   <Answers onSelect={onSelectAnswer} answers={answers} answerState={answerState} selectedAnswer={selectedAnswer}/>
</div>
)
}