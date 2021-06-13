import React from "react";

class HeroTable extends React.Component {
  render() {
    return (
      <>
        {this.props.lastResult.map((item) => {
          return <p>{item.id}</p>;
        })}
      </>
    );
  }
}

export default HeroTable;
