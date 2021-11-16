import React from "react";
import "./Timeline.css";
function Timeline() {
  return (
    <>
      <h1 className="text-5xl font-serif text-gray-500">How Does this work ?</h1>
      <div class="timeline">
        <div class="timeline__item">
          <h3 class="timeline__title">Register</h3>
        </div>

        <div class="timeline__item">
          <h3 class="timeline__title">Login</h3>
        </div>

        <div class="timeline__item">
          <h3 class="timeline__title">Watch a Movie</h3>
        </div>

        <div class="timeline__item">
          <h3 class="timeline__title">
            <span class="timeline__title--highlight">Rate</span>
          </h3>
        </div>

        <div class="timeline__item">
          <h3 class="timeline__title">Write a Review</h3>
        </div>

        <div class="timeline__item">
          <h3 class="timeline__title">Decide Private or Public </h3>
        </div>

        <div class="timeline__item">
          <h3 class="timeline__title">Submit</h3>
        </div>
      </div>
    </>
  );
}

export default Timeline;
