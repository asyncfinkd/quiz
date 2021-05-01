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
import HeroMain from "./main/HeroMain";

class Hero extends React.Component {
  /* 
    In this file we use the class component. To better do object-oriented programming.
  */

  state = {
    /* 
      Variables that the program uses when quiz work
    */
    round: 0,
    currentQuestion: 0,
    showResult: false,
    history: [],
    showButtons: true,
    questions: Data,
  };

  /*
    The next reading function that completes the quiz question transition.
  */

  nextQuestion = () => {
    const nextQuestion = this.state.currentQuestion + 1;
    /* 
      Here I am authenticating whether the questions are nearing the end of the quiz (else). If true it will continue to act from one question to another
    */
    if (nextQuestion < this.state.questions.length) {
      /* Assignment Operator When I want to change something I write an essay with a particular variable. This is where the next question for the user as I said above happens */
      this.setState((state) => ({
        currentQuestion: (state.currentQuestion = nextQuestion),
      }));
    } else {
      this.setState((state) => ({
        showResult: (state.showResult = true),
      }));
    }

    /* This is where the previous query ID is stored in the array, which we use later in rendering */
    this.state.history.push(
      this.state.questions[this.state.currentQuestion].id
    );

    /* This is where the rendering of the answer memorized in the quiz takes place. If you have not seen it then I will tell you: if you choose one of the two answers the question to the left will be green. If you want to go down and see another question it will already be ignored or it will have a separate color brown. */

    /* What is this.state? Or even questions, history. Questions and history are variables this.state - are even references to object-oriented programming. That is, I have access to the above in the variable with this.state. Simply put it is an indication */
    this.state.questions.map((item) => {
      this.state.history.map((item2) => {
        if (item.id == item2) {
          document.getElementById(`${item.id}`).style.backgroundColor = "green";
          document.getElementById(`${item.id}`).style.color = "white";
        }
      });
    });
  };

  renderListItem = () => {
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
                  this.state.questions.map((item2) => {
                    if (item2.id < +item.id) {
                      document.getElementById(
                        `${item2.id}`
                      ).style.backgroundColor = "gray";
                    }
                  });
                  this.state.history.map((item2) => {
                    document.getElementById(`${+item2}`).style.backgroundColor =
                      "green";
                  });
                }}
                id={item.id}
              >
                {item.question}
              </li>
            </>
          );
        })}
      </>
    );
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
  rendeHero = () => {
    const username = localStorage.getItem("username");
    if (username == "" || !username) {
      this.props.history.push("/");
    } else {
      return (
        <>
          <div className="flex">
            <HeroMain
              showResult={this.state.showResult}
              currentQuestion={this.state.currentQuestion}
              questions={this.state.questions}
              showButtons={this.state.showButtons}
              nextQuestion={() => this.nextQuestion()}
              history={this.state.history}
              listItem={this.renderListItem()}
            />
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
