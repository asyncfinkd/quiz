import React from "react";

class List extends React.Component {
  componentDidMount = () => {
    this.loop();
  };
  loop = () => {
    this.props.questions.map((item, i) => {
      for (let j = 0; j < 30; j++) {
        if (i == j) {
          return (
            <>
              <li className="bg-active">asdadsa</li>
            </>
          );
        } else {
          return (
            <>
              <li>asdadsa</li>
            </>
          );
        }
      }
    });
  };
  render() {
    return (
      <>
        <div className="list-container">
          <ul></ul>
        </div>
      </>
    );
  }
}

export default List;
