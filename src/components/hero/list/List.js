import React from "react";

class List extends React.Component {
  render() {
    return (
      <>
        <div className="list-container">
          <ul>
            {this.props.questions.map((item) => {
              return (
                <>
                  <li>{item.question}</li>
                </>
              );
            })}
          </ul>
        </div>
      </>
    );
  }
}

export default List;
