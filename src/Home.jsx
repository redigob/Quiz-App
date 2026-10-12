import { useState } from 'react';
import'./App.css'

const Home = ({questions}) => {
    console.log(questions)
    const[currentQuestionIndex,setCurrentQuestionIndex] = useState(0);
    let currentQuestion= questions[currentQuestionIndex]
    let correctAnswer = currentQuestion.answer
    const [score,setScore] = useState(0)
    const[ clicked, setClicked] = useState(false);
    const [showQuestion,setShowQuestion] = useState(true)
    const[selectedBtn,setSelectedbtn] = useState(null)

    function handleClick(e){
       let value = e.target.value
       
       if(value==questions[currentQuestionIndex].answer){
        setScore(previous=>previous+1);
       }
       else{
        console.log('incorrect')
        console.log(e.target)
       }
    }


    return (
        <div className="home">
            <h1>React Quiz</h1>
            {showQuestion ? 
            <div className="question-card">
                <p className="question">{currentQuestionIndex+1}. {currentQuestion.question}</p>
                <div className="buttons">
                  {currentQuestion.options.map((option)=>(
                    <button className={clicked && ( option==correctAnswer ?  'correct' : (option==selectedBtn ? 'incorrect': '')) } value={option} disabled={clicked && 'true'}  onClick={(e)=>{
                        handleClick(e)
                        setClicked(true)
                        setSelectedbtn(e.target.value)
                    }}>{option}</button>
                  ))}
                </div>
                <button style={clicked ? {display: 'block'} : {display: 'none'}} className="next-btn" onClick={()=>{
                    if(currentQuestionIndex < 4){
                      setCurrentQuestionIndex(currentQuestionIndex+1)  
                    }
                    else{
                      setShowQuestion(false)   
                    } 
                      setClicked(false)  
             
                }} >Next</button>
            </div>
        : 
          <div className='result'>
            <p>You Scored {score}  out of {questions.length}</p>
            <button onClick={()=>{
                setShowQuestion(true)
                setCurrentQuestionIndex(0)
                setScore(0)
                setDiabled(false)
            }}>Try Again</button>
          </div>
        }
        </div>
    );
}
 
export default Home
