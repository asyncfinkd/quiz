/* import:
  React -> Framework
  Progress -> Package

  Package || Framework:
  React, Progress
*/

import React from "react";
import { Progress } from "antd";

class Question extends React.Component {
  /* 
    In this file we use the class component. To better do object-oriented programming.
  */

  componentDidMount = () => {
    document.getElementById("1__span").style.display = "none";
  };

  render() {
    /* I calculate the percentage using the formula x = (a / b) * 100 */
    const renderPercent = Math.round(
      ((this.props.currentQuestion + 1) / this.props.questions.length) * 100
    );

    return (
      <>
        <div style={{ maxWidth: "100%" }}>
          <div className="h-full full-display-flex">
            <div
              className="relative box max-w-full"
              style={{ width: "700px", height: "362px" }}
            >
              {this.props.showResult ? (
                /* What if there are no more questions */
                <>
                  <p>You Finish exam</p>
                  <div className="back-component">
                    <span onClick={this.props.returnQuestions}>← Back</span>
                  </div>
                </>
              ) : (
                <>
                  {this.props.currentQuestion > 0 && (
                    /* This component will appear if we select a single question. Or move on to any question from the first question */
                    <div className="back-component">
                      <span onClick={this.props.backHandle}>← Back</span>
                    </div>
                  )}
                  <div className="box-content max-w-full">
                    <div style={{ marginBottom: "1rem" }}></div>
                    {/* We use the package as a percentage component. Which is automatically created for progress */}
                    <Progress percent={renderPercent} status="active" />
                    <div aria-label="Question Length" className="mt-3">
                      <span className="questionLength-span">
                        {`Question ${this.props.currentQuestion + 1}/${
                          this.props.questions.length
                        }`}
                      </span>
                    </div>
                    <div aria-label="Question" className="mt-3">
                      <span className="question-span">
                        {/* A question that is rendered with the program */}
                        {
                          this.props.questions[this.props.currentQuestion]
                            .question
                        }
                      </span>
                    </div>
                    <div
                      role="button"
                      className="mt-6 questionContainer-button"
                      style={{ maxWidth: "100%" }}
                    >
                      {/* answers. In its quantity */}
                      {this.props.showButtons && (
                        <>
                          {this.props.questions[
                            this.props.currentQuestion
                          ].answerOptions.map((item, i) => {
                            return (
                              <>
                                <button
                                  type="submit"
                                  className="question-button button-primary"
                                  id={i}
                                  style={{ minHeight: "70px" }}
                                  onClick={() => this.props.nextQuestion(item.answerText)}
                                >
                                  {item.answerText}
                                </button>
                                <span id={`${i}__span`}>Or</span>
                              </>
                            );
                          })}
                        </>
                      )}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Question;
