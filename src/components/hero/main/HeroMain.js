/* import:
  React -> Framework
  Question -> Component -> Location -> src/components/data
  HeroList -> Component -> Location -> src/components/hero/list

  Files:
  HeroList, Question

  Package || Framework:
  React
*/

import React from "react";
import HeroList from "../list/HeroList";
import Question from "../question/Question";

class HeroMain extends React.Component {
  /* 
    In this file we use the class component. To better do object-oriented programming.
  */
  render() {
    return (
      <>
        {/* A file container where I attach props. And I export */}
        <HeroList
          questions={this.props.questions}
          history={this.props.history}
          currentQuestion={this.props.currentQuestion}
          listItem={this.props.listItem}
          buttonList={this.props.buttonList}
          closeModal={this.props.closeModal}
        />
        <Question
          showResult={this.props.showResult}
          currentQuestion={this.props.currentQuestion}
          questions={this.props.questions}
          showButtons={this.props.showButtons}
          clickSubmit={this.props.clickSubmit}
          nextQuestion={this.props.nextQuestion}
          backHandle={this.props.backHandle}
          returnQuestions={this.props.returnQuestions}
          result={this.props.result}
          language={this.props.language}
          nextHandleQuestion={this.props.nextHandleQuestion}
          points={this.props.points}
        />
      </>
    );
  }
}

export default HeroMain;
