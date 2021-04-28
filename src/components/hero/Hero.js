import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
// import HeroQuiz from "./heroQuiz/HeroQuiz";
// import List from "./list/List";
import { Progress } from "antd";
import "../../stylesheet/hero/hero.css";


const questions = [
  {
    id: "0",
    question:
      "When you are in a community (at a party with fellow workers or fellow practitioners), you usually prefer",
    answerOptions: [
      {
        answerText: "participate in a general conversation or",
        isIntrovert: true,
      },
      {
        answerText: "talking with each separately",
        isIntrovert: false,
      },
    ],
  },
  {
    id: "1",
    question: "You consider yourself more",
    answerOptions: [
      {
        answerText: "realistic or",
        isIntrovert: true,
      },
      {
        answerText: "prone to theorizing",
        isIntrovert: false,
      },
    ],
  },
  {
    id: "2",
    question: "In your opinion, which one is worse?",
    answerOptions: [
      {
        answerText: "“living in a dream world”» or",
        isIntrovert: true,
      },
      {
        answerText: "«all goes according to the plan»",
        isIntrovert: false,
      },
    ],
  },
  {
    id: "3",
    question: "You are more impressed by",
    answerOptions: [
      {
        answerText: "solid principles or",
        isIntrovert: true,
      },
      {
        answerText: "strong emotions",
        isIntrovert: false,
      },
    ],
  },
  {
    id: "4",
    question: "You are more attracted",
    answerOptions: [
      {
        answerText: "persuasive or",
        isIntrovert: true,
      },
      {
        answerText: "sentimental",
        isIntrovert: false,
      },
    ],
  },
  {
    id: "5",
    question: "If you have to do an unusual job, it’s more convenient for you.",
    answerOptions: [
      {
        answerText: "to plan it in advance or",
        isIntrovert: true,
      },
      {
        answerText: "to find out what to do, already in the course of work",
        isIntrovert: false,
      },
    ],
  },
  {
    id: "6",
    question:
      "When you need to make a choice or make a decision, you make it. ",
    answerOptions: [
      {
        answerText: "mostly attentive and carefully or",
        isIntrovert: true,
      },
      {
        answerText: "often spontaneously",
        isIntrovert: false,
      },
    ],
  },
  {
    id: "7",
    question: "At parties or social gatherings you usually",
    answerOptions: [
      {
        answerText: "stay up late",
        isIntrovert: true,
      },
      {
        answerText: "leave early feeling tired",
        isIntrovert: false,
      },
    ],
  },
  {
    id: "8",
    question: "You are more attracted to",
    answerOptions: [
      {
        answerText: "realists or",
        isIntrovert: true,
      },
      {
        answerText: "imaginative people",
        isIntrovert: false,
      },
    ],
  },
  {
    id: "9",
    question: "You are more interested in",
    answerOptions: [
      {
        answerText: "what really exists or",
        isIntrovert: true,
      },
      {
        answerText: "unrealized opportunities",
        isIntrovert: false,
      },
    ],
  },
  {
    id: "10",
    question: "Your conclusions about people based",
    answerOptions: [
      {
        answerText: "on rules more often than on circumstances or",
        isIntrovert: true,
      },
      {
        answerText: "on circumstances more often than on rules",
        isIntrovert: false,
      },
    ],
  },
  {
    id: "11",
    question: "When assessing other people, you usually",
    answerOptions: [
      {
        answerText: "firm and objective",
        isIntrovert: true,
      },
      {
        answerText: "condescending and subjective",
        isIntrovert: false,
      },
    ],
  },
  {
    id: "12",
    question: "More often you act",
    answerOptions: [
      {
        answerText: "punctually or",
        isIntrovert: true,
      },
      {
        answerText: "slowly",
        isIntrovert: false,
      },
    ],
  },
  {
    id: "13",
    question: "You prefer",
    answerOptions: [
      {
        answerText: "doing work in advance or",
        isIntrovert: true,
      },
      {
        answerText: "doing everything last moment",
        isIntrovert: false,
      },
    ],
  },
  {
    id: "14",
    question: "Amoung your friends you",
    answerOptions: [
      {
        answerText: "you know everything about everyone or",
        isIntrovert: true,
      },
      {
        answerText: "the last to know what is happening",
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
    history: [],
    showButtons: true,
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

    this.state.history.push(questions[this.state.currentQuestion].id);
    questions.map((item) => {
      this.state.history.map((item2) => {
        if (item.id == item2) {
          document.getElementById(`${item.id}`).style.backgroundColor = "green";
          document.getElementById(`${item.id}`).style.color = "white";
        }
      });
      // console.log(item);
    });
    // console.log(this.state.history);
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
                      <li
                        onClick={() => {
                          this.setState((state) => ({
                            currentQuestion: (state.currentQuestion = +(+item.id)),
                          }));
                          questions.map((item2) => {
                            if (item2.id < +item.id) {
                              document.getElementById(
                                `${item2.id}`
                              ).style.backgroundColor = "gray";
                            }
                          });
                          this.state.history.map((item2) => {
                            document.getElementById(
                              `${+item2}`
                            ).style.backgroundColor = "green";
                          });
                        }}
                        id={item.id}
                      >
                        {item.question}
                      </li>
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
                          {this.state.showButtons && (
                            <>
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
                            </>
                          )}
                          {!this.state.showButtons && <p>gggg</p>}
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
