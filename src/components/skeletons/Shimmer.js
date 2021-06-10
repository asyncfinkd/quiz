/* 
  React -> Framework

  Framework || Package:
  React
*/

import React, { Component } from "react";

class Shimmer extends Component {
  /* Animation for skeleton */
  render() {
    return (
      <>
        <div className="shimmer-wrapper">
          <div className="shimmer"></div>
        </div>
      </>
    );
  }
}

export default Shimmer;
