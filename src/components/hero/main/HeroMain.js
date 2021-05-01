import React from "react";
import HeroList from "../list/HeroList";
import Question from "../question/Question";

class HeroMain extends React.Component {
  render() {
    return (
      <>
        <HeroList
          questions={this.props.questions}
          history={this.props.history}
          currentQuestion={this.props.currentQuestion}
          listItem={this.props.listItem}
        />
        <Question
          showResult={this.props.showResult}
          currentQuestion={this.props.currentQuestion}
          questions={this.props.questions}
          showButtons={this.props.showButtons}
          nextQuestion={this.props.nextQuestion}
        />
      </>
    );
  }
}

export default HeroMain;
