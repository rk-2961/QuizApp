import { useCallback, useRef, useState } from 'react'
import QUESTIONS from '../questions.js'
import quizIsCompleteImg from '../assets/quiz-complete.png'
import QuestionTimer from './QuestionTimer.jsx';
import Answers from './Answers.jsx';
import Question from './Question.jsx';
export default function Quiz(){
  
    
    
    const [userAnswers,setUserAnswers]=useState([]);
    const [answerState,setAnswerState] =useState('unanswered');
    const activeQuestionIndex= answerState==='unanswered'? userAnswers.length :userAnswers.length-1;

    const quizIsComplete=activeQuestionIndex===QUESTIONS.length;

    const handleSelectAnswer=useCallback(function handleSelectAnswer(selectedAnswer){
        setAnswerState('answered');
        setUserAnswers((prevAnswer)=>{
            return [...prevAnswer,selectedAnswer];
        });
        setTimeout(() => {
            if(selectedAnswer===QUESTIONS[activeQuestionIndex].answers[0]){
                setAnswerState('correct');
            }
            else{
                setAnswerState('wrong');
            }
            setTimeout(()=>{
                setAnswerState('unanswered');
            },2000);
        }, 1000);
    },[activeQuestionIndex])
   
    const handeSkipAnswer=useCallback(()=>handleSelectAnswer(null),[handleSelectAnswer])
    
    if(quizIsComplete){
        return <div id='summary'>
            <img src={quizIsCompleteImg} alt="Quiz  Over" />
            <h2>Quiz Completed!</h2>
        </div>
    }
  
    

    return (<div id='quiz'>
    

    <Question key={activeQuestionIndex} questionText={QUESTIONS[activeQuestionIndex].text} onSelectAnswer={handleSelectAnswer} answers={QUESTIONS[activeQuestionIndex].answers}
    answerState={answerState} selectedAnswer={userAnswers[userAnswers.length-1]} onSkipAnswer={handeSkipAnswer}/>
    
    </div>)
}