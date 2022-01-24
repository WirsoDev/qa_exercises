import { useEffect, useState } from "react";
import "./Quiz.css";
import Questions from "./quizQuestions";

function Quiz() {
  const [questions, setQuestions] = useState(Questions);
  const [responses, setResponses] = useState({});
  const [questionIndex, setQuestionIndex] = useState(0);
  const [isFinal, setIsFinal] = useState(false);
  const [prossBar, setProssBar] = useState(0);

  useEffect(() => {
    // update process bar

    let manyQuestions = questions.length
    let manyResponses = 0

    if(responses.length > 0){
        for(const item of responses){
            console.log(item)
        }
    }

    setProssBar(Math.round((manyResponses / manyQuestions) * 100));
  }, [responses]);

  function nextHandler() {
    if (questionIndex === questions.length - 2) {
      setIsFinal(true);
      setQuestionIndex(questionIndex + 1);
    } else if (questionIndex === questions.length - 1) {
      alert("Finish");
    } else {
      setQuestionIndex(questionIndex + 1);
    }
  }

  function backHandler() {
    if (questionIndex === 0) {
      return;
    }
    setQuestionIndex(questionIndex - 1);
    setIsFinal(false);
  }

  function textHandeler(e) {
    setResponses((prev) => ({
      ...prev,
      [questionIndex]: e.target.value,
    }));
  }

  return (
    <>
      <div className="quiz">
        <div className="quiz--title">
          <h2>{`Question ${questions[questionIndex].number}`}</h2>
          <p>{questions[questionIndex].title}</p>
        </div>
        <div className="quiz--quest">
          {questions[questionIndex].type === "text" ? (
            <input
              type="text"
              placeholder="Answer"
              onChange={textHandeler}
              value={responses[questionIndex] ? responses[questionIndex] : ""}
            />
          ) : (
            <div className="quiz-img">
              {questions[questionIndex].options.map((item) => {
                return (
                  <p key={item} className="selected">
                    {item}
                  </p>
                );
              })}
            </div>
          )}
        </div>
        <div className="quiz--btn">
          <div className="btn next" onClick={nextHandler}>
            {isFinal ? "Finish" : "Next"}
          </div>
          <div
            className="btn prev"
            style={questionIndex === 0 ? { display: "none" } : null}
            onClick={backHandler}
          >
            <svg
              viewBox="0 0 13 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.67781 19.9088L0.93117 11.1622C0.394432 10.6254 0.394432 9.75523 0.93117 9.21849L9.67781 0.471849C10.2145 -0.0648885 11.0848 -0.0648885 11.6215 0.471849C12.1582 1.00859 12.1582 1.87881 11.6215 2.41555L3.92323 10.1138C3.92462 10.1392 3.92532 10.1647 3.92532 10.1903C3.92532 10.216 3.92462 10.2415 3.92323 10.2668L11.6215 17.9651C12.1582 18.5019 12.1582 19.3721 11.6215 19.9088C11.0848 20.4456 10.2145 20.4456 9.67781 19.9088Z"
                fill="#EFC3C3"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="quiz-progress">
        <div className="progress-bar">
          <span style={{ width: `${prossBar}%` }}></span>
        </div>
        <div className="info">
          <p>
            Step {questions[questionIndex].number} of {questions.length}
          </p>
          <p>{prossBar}%</p>
        </div>
      </div>
    </>
  );
}

export default Quiz;
