import {useEffect, useState} from 'react';
import  './Question.css';
const Question = (props) => {
    const[answer, setAnswer] = useState(props.answer);
    const[ticked, setTicked] = useState(false);
  
    const clickHandler = (event) => {
        //event.preventDefault();
        if(!ticked)
        {
            setAnswer(event.target.id);
            setTicked(true);
            props.onTick();
        }
        else{
            setAnswer('');
            setTicked(false);
        }
         
    }

    const nextQuestion = () =>  {
        props.onNext();
    }

    const prevQuestion = () => {
        props.onPrev();
    }
    
    return(
        <div className="ques_body">
            <div className="question">
                <h4>Question {props.ques.id}</h4>
                <p>{props.ques.question}</p>
            </div>
            <div 
            className={`optionA ${answer==='1' ? 'active' : ''}`}
            id='1'
            onClick={clickHandler}
            >
                {props.ques.A}
            </div>
            <div 
            className={`optionB ${answer==='2' ? 'active' : null}`}
             id='2'
             onClick={clickHandler}
           >
                {props.ques.B}
            </div>
            <div 
            className={`optionC ${answer==='3' ? 'active' : null}`}
            id='3'
            onClick={clickHandler}
            >
                {props.ques.C}
            </div>
            <div 
            className={`optionD ${answer==='4' ? 'active' : null}`}
            id='4'
            onClick={clickHandler}
            >
                {props.ques.D}
            </div>
            <div className="actions">
                <button className={`${props.ques.id===1 ? 'disabled' : null}`} onClick={prevQuestion}>Prev</button>
                <button className={`${props.ques.id===14 ? 'disabled' : null}`} onClick={nextQuestion}>Next</button>
            </div>
        </div>
    )

}

export default Question;