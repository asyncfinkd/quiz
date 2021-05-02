import React from "react";

export default function SkeletonElement({ type }) {
  return (
    <>
      <div className={`skeleton ${type}`}></div>
    </>
  );
}
