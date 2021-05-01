import React from "react";
import { withRouter } from "react-router-dom";
import "../../stylesheet/hero/hero.css";
import { Data } from "../data/Data";
import HeroMain from "./main/HeroMain";

class Hero extends React.Component {
  state = {
    round: 0,
    currentQuestion: 0,
    showResult: false,
    history: [],
    showButtons: true,
    questions: Data,
  };
  nextQuestion = () => {
    const nextQuestion = this.state.currentQuestion + 1;
    if (nextQuestion < this.state.questions.length) {
      this.setState((state) => ({
        currentQuestion: (state.currentQuestion = nextQuestion),
      }));
    } else {
      this.setState((state) => ({
        showResult: (state.showResult = true),
      }));
    }

    this.state.history.push(
      this.state.questions[this.state.currentQuestion].id
    );
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
