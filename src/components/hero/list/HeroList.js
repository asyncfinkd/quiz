import React from "react";

class HeroList extends React.Component {
  render() {
    return (
      <>
        <div className="list-container" id="modal">
          <ul>{this.props.listItem}</ul>
        </div>
      </>
    );
  }
}

export default HeroList;
