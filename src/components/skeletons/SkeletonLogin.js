import React from "react";
import Shimmer from "./Shimmer";
import SkeletonElement from "./SkeletonElement";

export default function SkeletonLogin() {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <div className="skeleton-wrapper">
          <div className="skeleton-wrapper-child">
            <SkeletonElement type="text styled" />
            <SkeletonElement type="text styled-child" />
            <SkeletonElement type="input" />
            <SkeletonElement type="button" />
            <SkeletonElement type="text styled mt-3" />
            <Shimmer />
          </div>
        </div>
      </div>
    </>
  );
}
