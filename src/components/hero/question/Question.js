/* import:
  React -> Framework
  Progress -> Package

  Package || Framework:
  React, Progress
*/

import React from "react";
import { Input, Progress } from "antd";
import { SentEmail } from "../../../hooks/Listener";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
import { IntlProvider } from "@progress/kendo-react-intl";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import axios from "axios";
import env from "../../../constants/Application/env.json";

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.pdfExportComponent = React.createRef();
  }

  state = {
    email: "",
    sentEmail: false,
    time: 0 * 60,
    spinner: false,
  };

  formatTime = (time) => {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    return (
      (minutes < 10 ? "0" + minutes : minutes) +
      ":" +
      (seconds < 10 ? "0" + seconds : seconds)
    );
  };

  /*
    In this file we use the class component. To better do object-oriented programming.
  */

  handleChange = (event) => {
    this.setState({ email: event.target.value });
  };

  exportPDFWithComponent = () => {
    if (this.pdfExportComponent.current) {
      this.pdfExportComponent.current.save();
    }
  };

  componentDidMount = () => {
    this.myInterval = setInterval(() => {
      this.setState((state) => ({
        time: state.time + 1,
      }));
    }, 1000);
    document.getElementById("1__span").style.display = "none";
  };

  componentWillUnmount() {
    clearInterval(this.myInterval);
  }

  renderSignupComponent = () => {
    SentEmail(
      this.props.language,
      this.state.email,
      this.props.result,
      this.props.points
    );
  };

  render() {
    /* I calculate the percentage using the formula x = (a / b) * 100 */
    const renderPercent = Math.round(
      ((this.props.currentQuestion + 1) / this.props.questions.length) * 100
    );
    const config = {
      headers: { "content-type": "multipart/form-data" },
    };
    return (
      <>
        {this.props.spinner && (
          <div className="wrapper">
            <div className="loading-spinner"></div>
          </div>
        )}
        <div style={{ maxWidth: "100%" }}>
          <div className="h-full full-display-flex">
            <div className="relative box max-w-full" style={{ width: "700px" }}>
              <>
                {this.props.showResult ? (
                  /* What if there are no more questions */
                  <>
                    <IntlProvider locale="bg-BG">
                      <PDFExport ref={this.pdfExportComponent} paperSize="A4">
                        <table id="myTable">
                          <tr>
                            <th className="table__column">
                              {this.props.language === "English"
                                ? "1 column"
                                : "1 столбик"}
                            </th>
                            <th className="table__column">
                              {this.props.language === "English"
                                ? "2 column"
                                : "2 столбик"}
                            </th>
                            <th className="table__column">
                              {this.props.language === "English"
                                ? "3 column"
                                : "3 столбик"}
                            </th>
                            <th className="table__column">
                              {this.props.language === "English"
                                ? "4 column"
                                : "4 столбик"}
                            </th>
                            <th className="table__column">
                              {this.props.language === "English"
                                ? "5 column"
                                : "5 столбик"}
                            </th>
                            <th className="table__column">
                              {this.props.language === "English"
                                ? "6 column"
                                : "6 столбик"}
                            </th>
                            <th className="table__column">
                              {this.props.language === "English"
                                ? "7 column"
                                : "7 столбик"}
                            </th>
                            <th className="table__column">
                              {this.props.language === "English"
                                ? "8 column"
                                : "8 столбик"}
                            </th>
                            <th className="table__column">
                              {this.props.language === "English"
                                ? "9 column"
                                : "9 столбик"}
                            </th>
                          </tr>
                          <tr>
                            <th style={{ border: "1px solid gray" }}>
                              <td className="table__choose without__border">
                                &nbsp;&nbsp;
                              </td>
                              <td className="table__choose">
                                {this.props.language === "English" ? "a" : "а"}
                              </td>
                              <td className="table__choose">
                                {this.props.language === "English" ? "b" : "б"}
                              </td>
                            </th>
                            <th style={{ border: "1px solid gray" }}>
                              <td className="table__choose without__border">
                                &nbsp;&nbsp;
                              </td>
                              <td className="table__choose">
                                {this.props.language === "English" ? "a" : "а"}
                              </td>
                              <td className="table__choose">
                                {this.props.language === "English" ? "b" : "б"}
                              </td>
                            </th>
                            <th style={{ border: "1px solid gray" }}>
                              <td className="table__choose without__border">
                                &nbsp;&nbsp;
                              </td>
                              <td className="table__choose">
                                {this.props.language === "English" ? "a" : "а"}
                              </td>
                              <td className="table__choose">
                                {this.props.language === "English" ? "b" : "б"}
                              </td>
                            </th>
                            <th style={{ border: "1px solid gray" }}>
                              <td className="table__choose without__border">
                                &nbsp;&nbsp;
                              </td>
                              <td className="table__choose">
                                {this.props.language === "English" ? "a" : "а"}
                              </td>
                              <td className="table__choose">
                                {this.props.language === "English" ? "b" : "б"}
                              </td>
                            </th>
                            <th style={{ border: "1px solid gray" }}>
                              <td className="table__choose without__border">
                                &nbsp;&nbsp;
                              </td>
                              <td className="table__choose">
                                {this.props.language === "English" ? "a" : "а"}
                              </td>
                              <td className="table__choose">
                                {this.props.language === "English" ? "b" : "б"}
                              </td>
                            </th>
                            <th style={{ border: "1px solid gray" }}>
                              <td className="table__choose without__border">
                                &nbsp;&nbsp;
                              </td>
                              <td className="table__choose">
                                {this.props.language === "English" ? "a" : "а"}
                              </td>
                              <td className="table__choose">
                                {this.props.language === "English" ? "b" : "б"}
                              </td>
                            </th>
                            <th style={{ border: "1px solid gray" }}>
                              <td className="table__choose without__border">
                                &nbsp;&nbsp;
                              </td>
                              <td className="table__choose">
                                {this.props.language === "English" ? "a" : "а"}
                              </td>
                              <td className="table__choose">
                                {this.props.language === "English" ? "b" : "б"}
                              </td>
                            </th>
                            <th style={{ border: "1px solid gray" }}>
                              <td className="table__choose without__border">
                                &nbsp;&nbsp;
                              </td>
                              <td className="table__choose">
                                {this.props.language === "English" ? "a" : "а"}
                              </td>
                              <td className="table__choose">
                                {this.props.language === "English" ? "b" : "б"}
                              </td>
                            </th>
                            <th style={{ border: "1px solid gray" }}>
                              <td className="table__choose without__border">
                                &nbsp;&nbsp;
                              </td>
                              <td className="table__choose">
                                {this.props.language === "English" ? "a" : "а"}
                              </td>
                              <td className="table__choose">
                                {this.props.language === "English" ? "b" : "б"}
                              </td>
                            </th>
                          </tr>

                          {this.props.result
                            .slice(this.props.language === "English" ? 69 : 66)
                            .map((item, i) => {
                              return (
                                <>
                                  {i + 1 === 1 ? (
                                    <>
                                      <tr>
                                        {this.props.result
                                          .slice(
                                            this.props.language === "English"
                                              ? 69
                                              : 66
                                          )
                                          .slice(i, i + 9)
                                          .map((item, ii) => {
                                            return (
                                              <>
                                                <th
                                                  style={{
                                                    border: "1px solid gray",
                                                  }}
                                                >
                                                  <td className="table__row without__border__row">
                                                    {ii + 1}
                                                  </td>
                                                  {item.value === "Yes" ||
                                                  item.value === "да" ? (
                                                    <>
                                                      <td className="table__row">
                                                        &#x2713;
                                                      </td>
                                                      <td className="table__row">
                                                        &nbsp;&nbsp;
                                                      </td>
                                                    </>
                                                  ) : (
                                                    <>
                                                      <td className="table__row">
                                                        &nbsp;&nbsp;
                                                      </td>
                                                      <td className="table__row">
                                                        &#x2713;
                                                      </td>
                                                    </>
                                                  )}
                                                </th>
                                              </>
                                            );
                                          })}
                                      </tr>
                                    </>
                                  ) : (
                                    <>
                                      {(i + 1) % 9 === 0 && (
                                        <>
                                          <tr></tr>
                                          <tr>
                                            {this.props.result
                                              .slice(
                                                this.props.language ===
                                                  "English"
                                                  ? 69
                                                  : 66
                                              )
                                              .slice(i, i + 9)
                                              .map((item, ii) => {
                                                return (
                                                  <>
                                                    <th
                                                      style={{
                                                        border:
                                                          "1px solid gray",
                                                      }}
                                                    >
                                                      {ii + 1 * i === 8 ||
                                                      ii + 1 * i === 9 ? (
                                                        <td className="table__row without__border__row">
                                                          {ii + 1 * i}
                                                        </td>
                                                      ) : (
                                                        <td
                                                          className="table__row without__border__row font__small"
                                                          style={{
                                                            width: "22px",
                                                          }}
                                                        >
                                                          {ii + 1 * i}
                                                        </td>
                                                      )}
                                                      {item.value === "Yes" ||
                                                      item.value === "да" ? (
                                                        <>
                                                          <td className="table__row">
                                                            &#x2713;
                                                          </td>
                                                          <td className="table__row">
                                                            &nbsp;&nbsp;
                                                          </td>
                                                        </>
                                                      ) : (
                                                        <>
                                                          <td className="table__row">
                                                            &nbsp;&nbsp;
                                                          </td>
                                                          <td className="table__row">
                                                            &#x2713;
                                                          </td>
                                                        </>
                                                      )}
                                                    </th>
                                                  </>
                                                );
                                              })}
                                          </tr>
                                        </>
                                      )}
                                    </>
                                  )}
                                </>
                              );
                            })}
                        </table>
                      </PDFExport>
                    </IntlProvider>
                  </>
                ) : (
                  <>
                    <div className="box-content max-w-full">
                      <div style={{ marginBottom: "1rem" }}></div>
                      <div
                        style={{
                          position: "absolute",
                          right: "40px",
                          top: "20px",
                        }}
                      >
                        <p>{this.formatTime(this.state.time)}</p>
                      </div>
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
              </>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "40px",
                  marginTop: "50px",
                }}
              >
                {this.props.showResult !== true ? (
                  <>
                    <button
                      onClick={
                        this.props.currentQuestion > 0 && this.props.backHandle
                      }
                      disabled={this.props.currentQuestion <= 0}
                      style={{
                        backgroundColor: "#42b72a",
                        color: "white",
                        border: "none",
                        outline: "none",
                        height: "50px",
                        borderRadius: "8px",
                        cursor: "pointer",
                        width: "120px",
                        fontSize: "18px",
                      }}
                    >
                      {"<"}
                    </button>
                    <button
                      onClick={this.props.clickSubmit}
                      style={{
                        backgroundColor: "#0d6efd",
                        color: "white",
                        border: "none",
                        outline: "none",
                        height: "50px",
                        borderRadius: "8px",
                        cursor: "pointer",
                        width: "120px",
                      }}
                      disabled={
                        this.props.history.length <=
                        this.props.questions.length - 2
                      }
                    >
                      {this.props.language === "English"
                        ? "Submit"
                        : "Отправлено"}
                    </button>
                    <button
                      onClick={this.props.nextHandleQuestion}
                      disabled={
                        this.props.history.length >=
                        this.props.questions.length - 1
                      }
                      style={{
                        backgroundColor: "#42b72a",
                        color: "white",
                        border: "none",
                        outline: "none",
                        height: "50px",
                        borderRadius: "8px",
                        cursor: "pointer",
                        width: "120px",
                        fontSize: "18px",
                      }}
                    >
                      {">"}
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => {
                        console.log(1);
                        var result = document.getElementById("result");
                        html2canvas(document.getElementById("myTable")).then(
                          (canvas) => {
                            var img = canvas.toDataURL("image/png");
                            // const pdf = new jsPDF('l', 'pt', 'a4', true);
                            // var width = (pdf.internal.pageSize.getWidth() * 0.90);
                            // var height = (pdf.internal.pageSize.getHeight() * 0.90);
                            // pdf.addImage(img, 'PNG', 0, 0, width, height, '', 'FAST');
                            // pdf.save("download.pdf")
                            // console.log(pdf);
                            axios
                              .post(`${env.host}/auth/insertUsers`, {
                                img: img,
                                points: this.props.points,
                                email: this.props.email,
                                result: this.props.result,
                              })
                              .then((res) => {
                                console.log(res);
                              });
                          }
                        );
                      }}
                      style={{
                        backgroundColor: "#0d6efd",
                        color: "white",
                        border: "none",
                        outline: "none",
                        height: "50px",
                        borderRadius: "8px",
                        cursor: "pointer",
                        width: "120px",
                      }}
                    >
                      {this.props.language === "English" ? "Close" : "Закрыть"}
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Question;
