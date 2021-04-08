import React from "react";
import { withRouter } from "react-router-dom";
// import HeroQuiz from "./heroQuiz/HeroQuiz";
// import List from "./list/List";
import { Progress } from "antd";

const questions = [
  {
    id: "0",
    question:
      "When you are in a community (at a party with fellow workers or fellow practitioners), you usually prefer",
    answerOptions: [
      {
        answerText: "Talking with each separately",
        isIntrovert: true,
      },
      {
        answerText: "Participate in a general conversation or",
        isIntrovert: false,
      },
    ],
  },
  {
    id: "1",
    question: "You consider yourself more",
    answerOptions: [
      {
        answerText: "prone to theorizing",
        isIntrovert: true,
      },
      {
        answerText: "realistic or",
        isIntrovert: false,
      },
    ],
  },
  {
    id: "2",
    question: "hello",
    answerOptions: [
      {
        answerText: "prone to theorizing",
        isIntrovert: true,
      },
      {
        answerText: "realistic or",
        isIntrovert: false,
      },
    ],
  },
  {
    id: "3",
    question: "hi",
    answerOptions: [
      {
        answerText: "prone to theorizing",
        isIntrovert: true,
      },
      {
        answerText: "realistic or",
        isIntrovert: false,
      },
    ],
  },
];

class Hero extends React.Component {
  constructor(props) {
    super(props);
    // Component
  }
  state = {
    round: 0,
    currentQuestion: 0,
    introvertCounter: 1,
    extravertCounter: 1,
    showResult: false,
  };
  nextQuestion = (isCorrect) => {
    if (isCorrect === true) {
      this.setState((state) => ({
        introvertCounter: state.introvertCounter + 1,
      }));
      console.log("introvert" + this.state.introvertCounter);
    } else {
      this.setState((state) => ({
        extravertCounter: state.extravertCounter + 1,
      }));
      console.log("extravert", this.state.extravertCounter);
    }

    const nextQuestion = this.state.currentQuestion + 1;
    if (nextQuestion < questions.length) {
      this.setState((state) => ({
        currentQuestion: (state.currentQuestion = nextQuestion),
      }));
    } else {
      this.setState((state) => ({
        showResult: (state.showResult = true),
      }));
    }
  };

  prevQuestion = () => {
    const prevQuestion = this.state.currentQuestion - 1;

    this.setState((state) => ({
      currentQuestion: (state.currentQuestion = prevQuestion),
    }));
  };

  componentWillMount = () => {
    document.addEventListener("keydown", (e) => {
      const keyName = e.keyCode;
      if (keyName === 37) {
        if (this.state.currentQuestion > 0) {
          this.prevQuestion();
        }
      } else if (keyName == 39) {
        this.nextQuestion();
      }
    });
  };
  renderShowResult = () => {
    const introvert = this.state.introvertCounter;
    const extravert = this.state.extravertCounter;

    if (introvert >= extravert) {
      return (
        <>
          <p>u are introvert</p>
        </>
      );
    } else {
      return (
        <>
          <p>u are extravert</p>
        </>
      );
    }
  };
  rendeHero = () => {
    const username = localStorage.getItem("username");
    const renderPercent = Math.round(
      (this.state.currentQuestion / questions.length) * 100
    );
    if (username == "" || !username) {
      this.props.history.push("/");
    } else {
      return (
        <>
          <div className="flex">
            <div className="list-container">
              <ul>
                {questions.map((item) => {
                  return (
                    <>
                      <li>{item.question}</li>
                    </>
                  );
                })}
              </ul>
            </div>
            <div className="container">
              <div className="h-full full-display-flex">
                <div
                  className="relative box max-w-full"
                  style={{ width: "700px", height: "362px" }}
                >
                  {this.state.showResult ? (
                    <>{this.renderShowResult()}</>
                  ) : (
                    <>
                      {this.state.currentQuestion > 0 && (
                        <div className="back-component">
                          <span onClick={this.state.backHandle}>← Back</span>
                        </div>
                      )}
                      <div className="box-content max-w-full">
                        <div style={{ marginBottom: "1rem" }}></div>
                        <Progress percent={renderPercent} status="active" />
                        <div aria-label="Question Length" className="mt-3">
                          <span className="questionLength-span">
                            {`Question ${this.state.currentQuestion}/${questions.length}`}
                          </span>
                        </div>
                        <div aria-label="Question" className="mt-3">
                          <span className="question-span">
                            {questions[this.state.currentQuestion].question}
                          </span>
                        </div>
                        <div
                          role="button"
                          className="mt-6 questionContainer-button"
                        >
                          {questions[
                            this.state.currentQuestion
                          ].answerOptions.map((item) => {
                            return (
                              <>
                                <button
                                  type="submit"
                                  className="question-button button-primary h-70"
                                  onClick={() =>
                                    this.nextQuestion(item.isIntrovert)
                                  }
                                >
                                  {item.answerText}
                                </button>
                              </>
                            );
                          })}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }
  };

  render() {
    return <>{this.rendeHero()}</>;
  }
}

export default withRouter(Hero);
