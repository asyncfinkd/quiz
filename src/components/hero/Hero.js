import React from "react";
import { withRouter } from "react-router-dom";
import { Progress } from "antd";
import "../../stylesheet/hero/hero.css";

const questions = [
  {
    id: "0",
    question:
      "When you are in a community (at a party with fellow workers or fellow practitioners), you usually prefer",
    answerOptions: [
      {
        answerText: "Participate in a general conversation or",
        isIntrovert: false,
      },
      {
        answerText: "Talking with each separately",
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
        isIntrovert: false,
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
        isIntrovert: false,
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
        isIntrovert: false,
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
        isIntrovert: false,
      },
      {
        answerText: "sentimental",
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
  };
  nextQuestion = () => {
    const nextQuestion = this.state.currentQuestion + 1;
    // this.state.currentQuestion(nextQuestion);
    // if ****
    if (nextQuestion < questions.length) {
      this.setState((state) => ({
        currentQuestion: (state.currentQuestion = nextQuestion),
      }));
    } else {
      alert("Quiz end");
    }
  };

  prevQuestion = () => {
    const prevQuestion = this.state.currentQuestion - 1;

    this.setState((state) => ({
      currentQuestion: (state.currentQuestion = prevQuestion),
    }));
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
          <div className="container">
            <div className="h-full full-display-flex">
              <div
                className="relative box max-w-full"
                style={{ width: "700px" }}
              >
                {this.state.currentQuestion > 0 && (
                  <div className="back-component">
                    <span onClick={() => this.prevQuestion()}>← Back</span>
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
                  <div role="button" className="mt-6 questionContainer-button">
                    {questions[this.state.currentQuestion].answerOptions.map(
                      (item) => {
                        return (
                          <>
                            <button
                              type="submit"
                              className="question-button button-primary h-70"
                              onClick={() => this.nextQuestion()}
                            >
                              {item.answerText}
                            </button>
                          </>
                        );
                      }
                    )}
                  </div>
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
