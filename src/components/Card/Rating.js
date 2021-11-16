import React from "react";

/**
 * Produce a number of stars based on the rating.
 * @param {{num:number}} props
 */
export default function Rating(props) {
  const { num } = props;
  return <>{Array(num).fill(<span>⭐</span>)}</>;
}
