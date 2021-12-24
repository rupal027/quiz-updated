import './App.css';
import React,{useState} from 'react';
import Question from './components/Question';
import Header from './components/Header';
import Help from './components/Help';


function App() {
  
  const [currentPage, setCurrentPage] = useState(1);
  const[needHelp, setNeedHelp] = useState(false);
 
  const question_data = [
    {
      id: 1,
      question: "What is SI Unit of distance ?",
      A: "metres",
      B: "kilometres",
      C: "centimetres",
      D: "feets"

    },
    {
      id: 2,
      question: "What is SI Unit of time ?",
      A: "metre",
      B: "kilometre",
      C: "seconds",
      D: "minutes"

    },
    {
      id: 3,
      question: "What is SI Unit of distance ?",
      A: "metres",
      B: "kilometres",
      C: "centimetres",
      D: "feets"

    },
    {
      id: 4,
      question: "What is SI Unit of time ?",
      A: "metres",
      B: "kilometres",
      C: "seconds",
      D: "minutes"

    },
    {
      id: 5,
      question: "What is SI Unit of distance ?",
      A: "metres",
      B: "kilometres",
      C: "centimetres",
      D: "feets"

    },
    {
      id: 6,
      question: "What is SI Unit of time ?",
      A: "metres",
      B: "kilometres",
      C: "seconds",
      D: "minutes"

    },
    {
      id: 7,
      question: "What is SI Unit of distance ?",
      A: "metres",
      B: "kilometres",
      C: "centimetres",
      D: "feets"

    },
    {
      id: 8,
      question: "What is SI Unit of time ?",
      A: "metres",
      B: "kilometres",
      C: "seconds",
      D: "minutes"

    },
    {
      id: 9,
      question: "What is SI Unit of distance ?",
      A: "metres",
      B: "kilometres",
      C: "centimetres",
      D: "feets"

    },
    {
      id: 10,
      question: "What is SI Unit of time ?",
      A: "metres",
      B: "kilometres",
      C: "seconds",
      D: "minutes"

    },
    {
      id: 11,
      question: "What is SI Unit of distance ?",
      A: "metres",
      B: "kilometres",
      C: "centimetres",
      D: "feets"

    },
    {
      id: 12,
      question: "What is SI Unit of time ?",
      A: "metres",
      B: "kilometres",
      C: "seconds",
      D: "minutes"

    },
    {
      id: 13,
      question: "What is SI Unit of distance ?",
      A: "metres",
      B: "kilometres",
      C: "centimetres",
      D: "feets"

    },
    {
      id: 14,
      question: "What is SI Unit of time ?",
      A: "metres",
      B: "kilometres",
      C: "seconds",
      D: "minutes"

    }
  ];

  const helpHandler = () => {
    setNeedHelp(true);
  }
  const closeHelp = () => {
    setNeedHelp(false);
  }
  
  function changePage(event) {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
   
}
  const getPaginationGroup = () => {
    let start = 0;
    return new Array(question_data.length).fill().map((_, idx) => start + idx + 1);
   // not yet implemented
};

const nextPageHandler = () => {
  setCurrentPage(currentPage+1);
}

const prevPageHandler = () => {
  setCurrentPage(currentPage-1);
}
  return (
    <React.Fragment>
     
      <Header/>
      <div class="spacer">
      &nbsp;
      </div>
      
     <div className="body">
      <Question ques={question_data[currentPage-1]} answer='' onNext={nextPageHandler} onPrev={prevPageHandler}/>
      <div className="side_bar">
            <div className="side_barHeader">
                <div className="side_barQuesnum">
                  {`Question ${currentPage}/${question_data.length}`}
                    
                </div>
                <div className="side_barHelp">
                   { /*Need Help ?*/}
                   <button onClick={helpHandler} className="help_btn">Need Help ?</button>
                </div>
            </div>
            <div className="pagination">
            {getPaginationGroup().map((item, index) => (
            <button
            className={`button ${currentPage === item ? 'active' : null}`}
            onClick={changePage}
            >
              <span>{item}</span>
            </button>
            ))}
            
            </div>
           

        </div>
     </div>
      
    </React.Fragment>
  );
}

export default App;
