import React from "react";
import Question from "../question/Question";

class HeroMain extends React.Component {
  render() {
    return (
      <>
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
