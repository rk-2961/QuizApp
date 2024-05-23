import { useCallback, useEffect, useState } from "react";

export default function QuestionTimer({timeout,onTimeout,mode}){
    const [remainingTime,setRemainingTime]=useState(timeout);
    useEffect(()=>{
        console.log("timeout")
        const time=setTimeout(
            onTimeout
        ,timeout);
        return ()=>{
            clearTimeout(time);
        }
    },[timeout,onTimeout])
   
    useEffect(()=>{
        console.log("interval")
        const interval=setInterval(()=>{
            setRemainingTime((prevRemainingTime)=>prevRemainingTime-100)
        },100)
        return ()=>{
            clearInterval(interval);
        }
    },[])
    

    return (  <progress id='question-time' max={timeout} className={mode} value={remainingTime}/>)
}