import React from "react";
import { withRouter } from "react-router-dom";
import { Progress } from "antd";
import "../../../stylesheet/hero/hero.css";

// More often you are

class HeroQuiz extends React.Component {
  rendeHero = () => {
    const username = localStorage.getItem("username");
    const renderPercent = Math.round(
      (this.props.currentQuestion / this.props.questions.length) * 100
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
                style={{ width: "700px", height: "362px" }}
              >
                {this.props.currentQuestion > 0 && (
                  <div className="back-component">
                    <span onClick={this.props.backHandle}>← Back</span>
                  </div>
                )}
                <div className="box-content max-w-full">
                  <div style={{ marginBottom: "1rem" }}></div>
                  <Progress percent={renderPercent} status="active" />
                  <div aria-label="Question Length" className="mt-3">
                    <span className="questionLength-span">
                      {`Question ${this.props.currentQuestion}/${this.props.questions.length}`}
                    </span>
                  </div>
                  <div aria-label="Question" className="mt-3">
                    <span className="question-span">
                      {
                        this.props.questions[this.props.currentQuestion]
                          .question
                      }
                    </span>
                  </div>
                  <div role="button" className="mt-6 questionContainer-button">
                    {this.props.questions[
                      this.props.currentQuestion
                    ].answerOptions.map((item) => {
                      return (
                        <>
                          <button
                            type="submit"
                            className="question-button button-primary h-70"
                            onClick={this.props.nextHandle}
                          >
                            {item.answerText}
                          </button>
                        </>
                      );
                    })}
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

export default withRouter(HeroQuiz);
