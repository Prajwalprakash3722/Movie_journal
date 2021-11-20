import React from "react";
import { Link } from "react-router-dom";
import Rating from "../Card/Rating";

/**
 * Param for cards
 * @params {string} title
 * @params {string} description
 * @params {string} image
 * @params {number} rating
 */

export default function Card({
  key,
  id,
  title,
  date,
  review,
  rating,
  genre,
}) {
  var localDate = new Date(date).toLocaleDateString();
  return (
    <>
      <Link to={`movie?id=${id}`}>
        <div className="flex flex-col items-center bg-gray-lightest p-5 rounded-lg m-3">
          <img
            // src="https://api.time.com/wp-content/uploads/2018/06/dinosaurs-jurassic-world-fact-check-3.jpg?w=800&quality=100"
            src="https://source.unsplash.com/random/824x600"
            alt="Hero"
            className="w-full rounded-lg m-2 p-2"
          />
          <h2 className="text-xl font-bold text-gray-cool">
            {title}
          </h2>
          <h2 className="text-xl font-bold text-gray-cool">
            Your Rating: <Rating num={rating} />
          </h2>
          <h2 className="text-xl font-bold text-gray-cool">Genre: {genre}</h2>
          <h2 className="text-xl font-bold text-gray-cool">
            Date: {localDate}
          </h2>
          <p className="leading-relaxed text-gray-cool">{review.slice(0,200)}...</p>
        </div>
      </Link>
    </>
  );
}
