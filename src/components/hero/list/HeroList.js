/* import:
  React -> Framework

  Package || Framework:
  React
*/

import React from "react";

class HeroList extends React.Component {
  /* 
    In this file we use the class component. To better do object-oriented programming.
  */

  render() {
    return (
      <>
        {/* Here I just have one props that will render the entire component at the receiver time */}
        <div className="list-container" id="modal">
          <ul>
            {this.props.listItem}
            <button
              className="question-button button-primary"
              style={{
                width: "360px",
                marginLeft: "0px",
                marginTop: "1rem",
                height: "44px",
              }}
            >
              Submit
            </button>
          </ul>
        </div>
      </>
    );
  }
}

export default HeroList;
