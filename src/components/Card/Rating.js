import React from "react";

/**
 * Produce a number of stars based on the rating.
 * @param {{num:number}} props
 */
export default function Rating(props) {
  const { num } = props;
  if (num === undefined) {
    return null;
  } else if (num === 0) {
    return <span className="rating-star">&#9734;</span>;
  } else if (num > 6) {
    return <span className="rating-star">Too Nice it Seems</span>;
  }
  return <>{Array(num).fill(<span>⭐</span>)}</>;
}
