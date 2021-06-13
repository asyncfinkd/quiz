/* import:
  React -> Framework
  Data -> Component -> Location -> src/components/data
  withRouter -> Package for Route, Pagination
  HeroMain -> Component -> Location -> src/components/hero/main
  Files:
  HeroMain, Data
  Package || Framework:
  React, React-router-dom
*/

import React from "react";
import { withRouter } from "react-router-dom";
import "../../stylesheet/hero/hero.css";
import { Data } from "../data/Data";
import SkeletonQuiz from "../skeletons/SkeletonQuiz";
import HeroMain from "./main/HeroMain";

class Hero extends React.Component {
  /*
    In this file we use the class component. To better do object-oriented programming.
  */

  state = {
    /*
      Variables that the program uses when quiz work
    */
    currentQuestion: 0,
    showResult: false,
    history: [],
    showButtons: true,
    questions: [],
    buttonList: false,
    showSkeleton: true,
    showHero: false,
    lastResult: [],
    extravertCount: 0,
    introvertCount: 0,
    sensingCount: 0,
    intuitiveCount: 0,
    rationalCount: 0,
    feelingCount: 0,
    reasonableCount: 0,
  };

  /*
    The next reading function that completes the quiz question transition.
  */

  nextQuestion = (value) => {
    if (!this.state.questions[this.state.currentQuestion].category) {
      console.log(0);
    } else {
      console.log(this.state.questions[this.state.currentQuestion].category);
      if (this.props.language === "English") {
        if (
          this.state.questions[this.state.currentQuestion].category ===
          "Extravert"
        ) {
          if (value === "Yes") {
            this.setState((state) => ({
              extravertCount: state.extravertCount + 1,
            }));
          } else {
            console.log("extravert - not clicked button");
          }
        } else if (
          this.state.questions[this.state.currentQuestion].category ===
          "Introvert"
        ) {
          if (value === "Yes") {
            this.setState((state) => ({
              introvertCount: state.introvertCount + 1,
            }));
          } else {
            console.log("introvert - not clicked button");
          }
        } else if (
          this.state.questions[this.state.currentQuestion].category ===
          "Sensing"
        ) {
          if (value === "Yes") {
            this.setState((state) => ({
              sensingCount: state.sensingCount + 1,
            }));
          } else {
            console.log("sensing - not clicked button");
          }
        } else if (
          this.state.questions[this.state.currentQuestion].category ===
          "Intuitive"
        ) {
          if (value === "Yes") {
            this.setState((state) => ({
              intuitiveCount: state.intuitiveCount + 1,
            }));
          } else {
            console.log("intuitive - not clicked button");
          }
        } else if (
          this.state.questions[this.state.currentQuestion].category ===
          "Rational"
        ) {
          if (value === "Yes") {
            this.setState((state) => ({
              rationalCount: state.rationalCount + 1,
            }));
          } else {
            console.log("rational - not clicked button");
          }
        } else if (
          this.state.questions[this.state.currentQuestion].category ===
          "Feeling"
        ) {
          if (value === "Yes") {
            this.setState((state) => ({
              feelingCount: state.feelingCount + 1,
            }));
          } else {
            console.log("feeling - not clicked button");
          }
        } else if (
          this.state.questions[this.state.currentQuestion].category ===
          "Reasonable"
        ) {
          if (value === "Yes") {
            this.setState((state) => ({
              reasonableCount: state.reasonableCount + 1,
            }));
          } else {
            console.log("resonable - not clicked");
          }
        }
      } else {
        // if (
        //   this.state.questions[this.state.currentQuestion].category ===
        //   "Extravert"
        // ) {
        //   if (value === "да") {
        // this.setState((state) => ({
        //   extravertCount: state.extravertCount + 1,
        // }));
        //     console.log("user clicked yes");
        //   } else {
        //     console.log("user clicked no");
        //   }
        // } else if (
        //   this.state.questions[this.state.currentQuestion].category ===
        //   "Introvert"
        // ) {
        //   if (value === "да") {
        // this.setState((state) => ({
        //   introvertCount: state.introvertCount + 1,
        // }));
        //     console.log("user clicked yes");
        //   } else {
        //     console.log("user clicked no");
        //   }
        // } else if (
        //   this.state.questions[this.state.currentQuestion].category ===
        //   "Sensing"
        // ) {
        //   if (value === "да") {
        // this.setState((state) => ({
        //   sensingCount: state.sensingCount + 1,
        // }));
        //     console.log("user clicked yes");
        //   } else {
        //     console.log("user clicked no");
        //   }
        // } else if (
        //   this.state.questions[this.state.currentQuestion].category ===
        //   "Intuitive"
        // ) {
        //   if (value === "да") {
        // this.setState((state) => ({
        //   intuitiveCount: state.intuitiveCount + 1,
        // }));
        //     console.log("user clicked yes");
        //   } else {
        //     console.log("user clicked no");
        //   }
        // } else if (
        //   this.state.questions[this.state.currentQuestion].category ===
        //   "Rational"
        // ) {
        //   if (value === "да") {
        // this.setState((state) => ({
        //   rationalCount: state.rationalCount + 1,
        // }));
        //     console.log("user clicked yes");
        //   } else {
        //     console.log("user clicked no");
        //   }
        // } else if (
        //   this.state.questions[this.state.currentQuestion].category ===
        //   "Feeling"
        // ) {
        //   if (value === "да") {
        // this.setState((state) => ({
        //   feelingCount: state.feelingCount + 1,
        // }));
        //     console.log("user clicked yes");
        //   } else {
        //     console.log("user clicked no");
        //   }
        // }
      }
    }

    console.log("extravert counter: " + this.state.extravertCount);
    console.log("introvert counter: " + this.state.introvertCount);
    console.log("sensing counter: " + this.state.sensingCount);
    console.log("intuitive counter: " + this.state.intuitiveCount);
    console.log("rational counter: " + this.state.rationalCount);
    console.log("feeling counter: " + this.state.feelingCount);

    let nextQuestion;
    /*
      Here I am authenticating whether the questions are nearing the end of the quiz (else). If true it will continue to act from one question to another
    */

    let state = false;
    if (this.state.lastResult.length > 0) {
      this.state.lastResult.map((item, i) => {
        if (
          item.question ===
          this.state.questions[this.state.currentQuestion].question
        ) {
          let index = this.state.lastResult.findIndex(
            (item) =>
              item.question ===
              this.state.questions[this.state.currentQuestion].question
          );
          console.log(index);
          if (index > -1) {
            this.state.lastResult.splice(index, 1);
            this.state.lastResult.push({
              id: this.state.currentQuestion,
              question: this.state.questions[this.state.currentQuestion]
                .question,
              value: value,
            });
            nextQuestion = this.state.currentQuestion + 1;
          }
          state = true;
        }
        return null;
      });
    } else {
      this.state.lastResult.push({
        id: this.state.currentQuestion,
        question: this.state.questions[this.state.currentQuestion].question,
        value: value,
      });
      nextQuestion = this.state.currentQuestion + 1;
      state = true;
    }
    if (!state) {
      this.state.lastResult.push({
        id: this.state.currentQuestion,
        question: this.state.questions[this.state.currentQuestion].question,
        value: value,
      });
      nextQuestion = this.state.currentQuestion + 1;
    }
    console.log(this.state.lastResult);

    if (nextQuestion < this.state.questions.length) {
      /* Assignment Operator When I want to change something I write an essay with a particular variable. This is where the next question for the user as I said above happens */
      this.setState((state) => ({
        currentQuestion: (state.currentQuestion = nextQuestion),
      }));
    } else {
      this.setState({ currentQuestion: this.state.currentQuestion });
    }

    /* This is where the previous query ID is stored in the array, which we use later in rendering */
    this.state.history.push(
      this.state.questions[this.state.currentQuestion].id
    );

    /* This is where the rendering of the answer memorized in the quiz takes place. If you have not seen it then I will tell you: if you choose one of the two answers the question to the left will be green. If you want to go down and see another question it will already be ignored or it will have a separate color brown. */
    this.state.questions.map((item) => (
      <>
        {this.state.history.map((item2) => (
          <>
            {item.id === item2 && (
              <>
                {
                  (document.getElementById(`${item.id}`).style.backgroundColor =
                    "green")
                }
                {(document.getElementById(`${item.id}`).style.color = "white")}
              </>
            )}
          </>
        ))}
      </>
    ));

    this.state.questions.map((item) => (
      <>
        {document.getElementById(`${item.id}`).style.backgroundColor !==
          "green" && (
          <>
            {document.getElementById(`${item.id}`).style.backgroundColor !==
              "gray" && (
              <>
                {item.id ===
                  this.state.questions[this.state.currentQuestion + 1].id && (
                  <>
                    {
                      // document.getElementById(`${item.id}`).style.backgroundColor =
                      //   "#0d6efd";
                      // document.getElementById(`${item.id}`).style.color = "white";
                    }
                  </>
                )}
              </>
            )}
          </>
        )}
      </>
    ));
  };

  /* Here is a description of the list. Functional action when pressed. Planting, browning, disassembling array assignment operators are all here. */
  renderListItem = () => {
    /* Disabled Button Logic */
    const renderBlocked =
      this.state.history.length <= this.state.questions.length - 1;
    return (
      <>
        {this.state.questions.map((item) => {
          return (
            <>
              <li
                onClick={() => {
                  this.setState((state) => ({
                    currentQuestion: (state.currentQuestion = +(+item.id)),
                  }));
                  this.state.questions.map((item2) => (
                    <>
                      {item2.id < +item.id && (
                        <>
                          {
                            (document.getElementById(
                              `${item2.id}`
                            ).style.backgroundColor = "gray")
                          }
                          {
                            (document.getElementById(
                              `${item2.id}`
                            ).style.color = "white")
                          }
                        </>
                      )}
                    </>
                  ));

                  this.state.history.map((item2) => (
                    <>
                      {
                        (document.getElementById(
                          `${+item2}`
                        ).style.backgroundColor = "green")
                      }
                    </>
                  ));
                  this.setState((state) => {
                    return { buttonList: (state.buttonList = false) };
                  });
                }}
                id={item.id}
                className={this.state.item && "act-show"}
              >
                {item.question}
              </li>
            </>
          );
        })}
        <button
          className="question-button button-primary"
          style={{
            width: "100%",
            marginLeft: "0px",
            marginTop: "1rem",
            height: "44px",
            maxWidth: "100%",
          }}
          disabled={renderBlocked}
          /* onClick function for show result */
          onClick={() => {
            // this.setState({ showResult: (this.state.showResult = true) });
            this.setState((state) => {
              return { showResult: (state.showResult = true) };
            });
            // this.setState({
            //   buttonList: (this.state.buttonList = false),
            // });
            this.setState((state) => {
              return { buttonList: (state.buttonList = false) };
            });
          }}
        >
          {this.props.language === "English" ? "Submit" : "Отправить"}
        </button>
      </>
    );
  };

  /* As we had the next question variable above we also have the previous question variable which provides the return. */
  prevQuestion = () => {
    const prevQuestion = this.state.currentQuestion - 1;

    this.setState((state) => ({
      currentQuestion: (state.currentQuestion = prevQuestion),
    }));
  };

  /* Another interesting action. This is a keyboard that helps you operate the quiz without a mouse */
  componentWillMount = () => {
    document.addEventListener("keydown", (e) => {
      const keyName = e.keyCode;
      if (keyName === 37) {
        if (this.state.currentQuestion > 0) {
          this.prevQuestion();
        }
      } else if (keyName === 39) {
        this.nextQuestion();
      }
    });

    setTimeout(() => {
      // this.setState({ showSkeleton: (this.state.showSkeleton = false) });
      this.setState((state) => {
        return { showSkeleton: (state.showSkeleton = false) };
      });
    }, 2000);
  };

  /* Authentication as I said below as you can see if I read locally the user will not have the name entered and remembered then it will automatically move to the first page. */
  rendeHero = () => {
    if (this.state.showHero) {
      return (
        <>
          {/* Button Responsive Click (open / close) */}
          {this.state.showSkeleton && <SkeletonQuiz />}
          {!this.state.showSkeleton && (
            <>
              <button
                type="button"
                className="resp-button"
                onClick={() => {
                  // this.setState({
                  //   buttonList: (this.state.buttonList =
                  //     !this.state.buttonList),
                  // });
                  this.setState((state) => {
                    return {
                      buttonList: (state.buttonList = !this.state.buttonList),
                    };
                  });
                }}
              >
                {this.state.buttonList !== true ? (
                  <svg width="24" height="24" fill="none">
                    <path
                      d="M4 8h16M4 16h16"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    class="absolute top-1/2 left-1/2 -mt-3 -ml-3 transition duration-300 transform"
                  >
                    <path
                      d="M6 18L18 6M6 6l12 12"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                )}
              </button>
              <div className="flex container">
                <HeroMain
                  showResult={this.state.showResult}
                  currentQuestion={this.state.currentQuestion}
                  questions={this.state.questions}
                  showButtons={this.state.showButtons}
                  nextQuestion={this.nextQuestion}
                  history={this.state.history}
                  listItem={this.renderListItem()}
                  backHandle={() => this.prevQuestion()}
                  returnQuestions={() => {
                    // this.setState({
                    //   showResult: (this.state.showResult = false),
                    // });
                    this.setState((state) => {
                      return { showResult: (state.showResult = false) };
                    });
                  }}
                  result={this.state.lastResult}
                  buttonList={this.state.buttonList}
                  closeModal={() => {
                    // this.setState({
                    //   buttonList: (this.state.buttonList =
                    //     !this.state.buttonList),
                    // });
                    this.setState((state) => {
                      return {
                        buttonList: (state.buttonList = !this.state.buttonList),
                      };
                    });
                  }}
                  language={this.props.language}
                />
              </div>
            </>
          )}
        </>
      );
    } else {
      return (
        <>
          <div style={{ maxWidth: "100%" }}>
            <div className="h-full full-display-flex">
              <div
                className="relative box max-w-full"
                style={{
                  width: "500px",
                  height: "362px",
                  justifyContent: "center",
                }}
              >
                <p style={{ fontSize: "1rem", userSelect: "none" }}>
                  {this.props.language === "English"
                    ? "Choose Language"
                    : "Выберите язык"}
                </p>
                <select
                  style={{
                    border: "1px solid lightgray",
                    outline: "none",
                    borderRadius: "5px",
                    width: "300px",
                    height: "44px",
                    paddingLeft: "10px",
                  }}
                  value={this.props.language}
                  onChange={this.props.onChangeLanguage}
                >
                  <option>English</option>
                  <option>Россия</option>
                </select>
                <button
                  type="submit"
                  style={{
                    backgroundColor: "#0d6efd",
                    color: "white",
                    fontSize: "1rem",
                    borderRadius: "0.25rem",
                    border: "none",
                    outline: "none",
                    height: "44px",
                    marginTop: "10px",
                    width: "300px",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    if (this.props.language === "English") {
                      // this.setState({
                      //   questions: (this.state.questions = Data.EN),
                      // });
                      this.setState((state) => {
                        return { questions: (state.questions = Data.EN) };
                      });
                    } else {
                      // this.setState({
                      //   questions: (this.state.questions = Data.RU),
                      // });
                      this.setState((state) => {
                        return { questions: (state.questions = Data.RU) };
                      });
                    }
                    // this.setState({ showHero: (this.state.showHero = true) });
                    this.setState((state) => {
                      return { showHero: (state.showHero = true) };
                    });
                  }}
                >
                  {this.props.language === "English"
                    ? "Continue"
                    : "Продолжать"}
                </button>
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
