import React from "react";
import { Progress } from "antd";

class Question extends React.Component {
  render() {
    const renderPercent = Math.round(
      (this.props.currentQuestion / this.props.questions.length) * 100
    );
    return (
      <>
        <div className="container">
          <div className="h-full full-display-flex">
            <div
              className="relative box max-w-full"
              style={{ width: "700px", height: "362px" }}
            >
              {this.props.showResult ? (
                <p>You Finish exam</p>
              ) : (
                <>
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
                    <div
                      role="button"
                      className="mt-6 questionContainer-button"
                    >
                      {this.props.showButtons && (
                        <>
                          {this.props.questions[
                            this.props.currentQuestion
                          ].answerOptions.map((item) => {
                            return (
                              <>
                                <button
                                  type="submit"
                                  className="question-button button-primary h-70"
                                  onClick={this.props.nextQuestion}
                                >
                                  {item.answerText}
                                </button>
                              </>
                            );
                          })}
                        </>
                      )}
                      {!this.props.showButtons && <p>gggg</p>}
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
