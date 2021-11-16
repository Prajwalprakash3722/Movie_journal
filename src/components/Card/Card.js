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

export default function Card({ props }) {
  const id = Math.floor(Math.random() * 100000 + 1).toString();
  const star = Math.floor(Math.random() * 5) + 1;
  return (
    <>
      <Link to={`movie?id=${id}`}>
        <div className="flex flex-col items-center bg-gray-lightest p-5 rounded-lg m-2">
          <img
            src="https://api.time.com/wp-content/uploads/2018/06/dinosaurs-jurassic-world-fact-check-3.jpg?w=824&quality=100"
            alt="Hero"
            className="w-full rounded-lg m-2 p-2"
          />
          <h2 className="text-xl font-bold text-gray-cool">
            Jurassic World: Fallen Kingdom
          </h2>
          <h2 className="text-xl font-bold text-gray-cool">
            Your Rating: <Rating num={star} />
          </h2>
          <p className="leading-relaxed text-gray-cool">
            Jurassic World: Fallen Kingdom is a 2018 American science fiction
            adventure film directed by J. A. Bayona and written by J. A. Bayona
            and Michael Crichton. It is the second installment in the Jurassic
            World film series, and the sequel to Jurassic Park. The film is
            based on the book Jurassic Park by Michael Crichton.....
          </p>
        </div>
      </Link>
    </>
  );
}
