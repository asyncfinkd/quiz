/* 
  React -> Framework
  Shimmer -> File
  SkeletonElement -> File

  Framework || Package:
  React
*/

import React from "react";
import SkeletonElement from "./SkeletonElement";
import Shimmer from "./Shimmer";

class SkeletonQuiz extends React.Component {
  /* Skeleton for quiz component */
  render() {
    return (
      <>
        <div className="skeleton-wrapper">
          <div className="flex container">
            <div className="list-container" id="modal">
              {/* Map */}
              {[
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15,
                16,
                17,
                18,
                19,
                20,
                21,
                22,
                23,
                24,
                25,
                26,
                27,
                28,
                29,
                30,
              ].map((item) => {
                return (
                  <>
                    <SkeletonElement type="text list" key={item} />
                  </>
                );
              })}
            </div>
            <div style={{ maxWidth: "100%" }}>
              <div className="h-full full-display-flex">
                <div
                  className="relative box max-w-full"
                  style={{ width: "700px", height: "362px" }}
                >
                  <div className="box-content max-w-full">
                    <div style={{ marginBottom: "1rem" }}></div>
                    <SkeletonElement type="text" />
                    <div aria-label="Question Length" className="mt-3">
                      <SkeletonElement type="text styled" />
                    </div>
                    <div aria-label="Question" className="mt-3">
                      <SkeletonElement type="thumbnail sty" />
                    </div>
                    <div
                      role="button"
                      className="mt-6 questionContainer-button"
                      style={{ maxWidth: "100%", justifyContent: "center" }}
                    >
                      <SkeletonElement type="button-sty" />
                      <SkeletonElement type="button-sty" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Shimmer />
        </div>
      </>
    );
  }
}

export default SkeletonQuiz;
