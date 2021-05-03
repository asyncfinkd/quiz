/* 
  React -> Framework

  Framework || Package:
  React
*/

import React from "react";

/* Skeleton Type Indeitfy for good, beautiful component is render */
export default function SkeletonElement({ type }) {
  return (
    <>
      <div className={`skeleton ${type}`}></div>
    </>
  );
}
