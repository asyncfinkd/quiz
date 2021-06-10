/* 
  React -> Framework

  Framework || Package:
  React
*/

import React, { Component } from "react";

/* Skeleton Type Indeitfy for good, beautiful component is render */
class SkeletonElement extends Component {
  render() {
    return (
      <>
        <div className={`skeleton ${this.props.type}`}></div>
      </>
    );
  }
}

export default SkeletonElement;
