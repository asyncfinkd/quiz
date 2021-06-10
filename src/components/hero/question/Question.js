/* import:
  React -> Framework
  Progress -> Package

  Package || Framework:
  React, Progress
*/

import React from "react";
import { Progress } from "antd";
// import axios from "axios";
// import Swal from "sweetalert2";
import { SentEmail } from "../../../hooks/Listener";

class Question extends React.Component {
  state = {
    email: "",
  };
  /*
    In this file we use the class component. To better do object-oriented programming.
  */

  componentDidMount = () => {
    document.getElementById("1__span").style.display = "none";
  };

  handleChange = (event) => {
    this.setState({ email: event.target.value });
  };

  renderSignupComponent = () => {
    SentEmail(this.props.language, this.state.email, this.props.result)
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
                  <h1>
                    {this.props.language === "English"
                      ? "Input your email"
                      : "Введите вашу эл.почту"}
                  </h1>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                    }}
                  >
                    <div className="text-center form-ai mt-3">
                      <input
                        type="text"
                        placeholder=" "
                        className="input form-ai-control w-350 max-w-full"
                        autoFocus
                        value={this.state.email}
                        onChange={this.handleChange}
                        style={{ width: "100%" }}
                      />
                      <label>
                        {this.props.language === "English"
                          ? "Email"
                          : "эл.почту"}
                      </label>
                    </div>
                    <div className="mt-3">
                      <button
                        type="submit"
                        onClick={() => this.renderSignupComponent()}
                        className="button w-full max-w-full button-primary"
                      >
                        {this.props.language === "English"
                          ? "Next"
                          : "Отправить"}
                      </button>
                    </div>
                    <footer className="mt-6">
                      <ul className="list-style ul-flex">
                        <li className="color-gray">
                          {this.props.language === "English"
                            ? "Home"
                            : "Главное"}
                        </li>
                        <span className="circle-span">•</span>
                        <li className="color-gray">
                          {this.props.language === "English"
                            ? "Support"
                            : "поддержка"}
                        </li>
                        <span className="circle-span">•</span>
                        <li className="color-gray">
                          {this.props.language === "English"
                            ? "FAQ"
                            : "Часто задаваемые вопросы"}
                        </li>
                      </ul>
                    </footer>
                  </form>
                </>
              ) : (
                <>
                  {this.props.currentQuestion > 0 && (
                    /* This component will appear if we select a single question. Or move on to any question from the first question */
                    <div className="back-component">
                      <span onClick={this.props.backHandle}>
                        ← {this.props.language === "English" ? "Back" : "назад"}
                      </span>
                    </div>
                  )}
                  <div className="box-content max-w-full">
                    <div style={{ marginBottom: "1rem" }}></div>
                    {/* We use the package as a percentage component. Which is automatically created for progress */}
                    <Progress percent={renderPercent} status="active" />
                    <div aria-label="Question Length" className="mt-3">
                      <span className="questionLength-span">
                        {`${
                          this.props.language === "English"
                            ? "Question"
                            : "Вопрос"
                        } ${this.props.currentQuestion + 1}/${
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
                                  onClick={() =>
                                    this.props.nextQuestion(item.answerText)
                                  }
                                >
                                  {item.answerText}
                                </button>
                                <span id={`${i}__span`}>
                                  {this.props.language === "English"
                                    ? "Or"
                                    : "или"}
                                </span>
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
