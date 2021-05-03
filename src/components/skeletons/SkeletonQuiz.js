import React from "react";
import SkeletonElement from "./SkeletonElement";
import Shimmer from "./Shimmer";

export default function SkeletonQuiz() {
  return (
    <>
      <div className="skeleton-wrapper">
        <div className="flex">
          <div className="list-container" id="modal">
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
          <div className="container">
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
                    <span className="question-span">
                      When you are in a community (at a party with fellow
                      workers or fellow practitioners), you usually prefer
                    </span>
                  </div>
                  <div
                    role="button"
                    className="mt-6 questionContainer-button"
                    style={{ maxWidth: "100%" }}
                  >
                    <button
                      type="submit"
                      className="question-button button-primary h-70"
                    >
                      participate in a general conversation or
                    </button>
                    <button
                      type="submit"
                      className="question-button button-primary h-70"
                    >
                      talking with each separately
                    </button>
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
