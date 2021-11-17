import React, { useEffect, useState } from "react";
import axios from "axios";

function AddNew() {
  const [title, setTitle] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(1);
  const [image, setImage] = useState("");
  const [genre, setGenre] = useState([]);
  const [language, setLanguage] = useState("");
  const [error, setError] = useState("");
  const [watched, setWatched] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [token, setToken] = useState("");
  const [errorMessage, setErrormessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);
  const headers = {
    contentType: "application/json",
    Authorization: `Bearer ${token}`,
  };
  var data = {
    title,
    review,
    rating,
    image,
    genre,
    language,
    watched,
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/api/movies", data, {
        headers: headers,
      })
      .then((res) => {
        setSuccess(true);
        setLoading(false);
        if (res.data.message === "Movie added successfully") {
          setError(true);
          setLoading(false);
          setSuccessMessage(res.data.message);
        } else if (res.data.message === "Movie already exists") {
          setError(true);
          setLoading(false);
          setErrormessage(res.data.message);
        } else {
          setError(true);
          setLoading(false);
          setErrormessage("Something is Wrong Please try again later!!");
        }
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
        setErrormessage(err.message);
      });
  };

  return (
    <>
      {error && (
        <div
          className="mt-2 bg-red-100 border-t border-b border-r border-l border-red-500 text-red-700 px-4 py-3 rounded-lg"
          role="alert"
        >
          <p className="font-bold">Error</p>
          <p className="text-sm">{errorMessage}</p>
        </div>
      )}
      {success && (
        <div
          className="mt-2 bg-green-100 border-t border-b border-r border-l border-green-500 text-green-dark px-4 py-3 rounded-lg"
          role="alert"
        >
          <p className="font-bold">Success</p>
        </div>
      )}
      <div class="bg-gray-100 mx-auto max-w-6xl  py-20 px-12 lg:px-24 shadow-xl mb-24">
        <form>
          <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
            <div class="-mx-3 md:flex mb-6">
              <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="uppercase tracking-wide text-black text-xs font-bold mb-2"
                  for="movie_name"
                >
                  Movie Name:
                </label>
                <input
                  class="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                  id="movie_name"
                  type="text"
                  placeholder="..."
                  onChange={(e) => setTitle(e.target.value)}
                />
                <div></div>
              </div>
              <div class="md:w-1/2 px-3">
                <label
                  class="uppercase tracking-wide text-black text-xs font-bold mb-2"
                  for="rating"
                >
                  Rating
                </label>
                <input
                  class="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                  id="rating"
                  type="text"
                  onChange={(e) => setRating(e.target.value)}
                />
              </div>
            </div>
            <div class="-mx-3 md:flex mb-6">
              <div class="md:w-full px-3">
                <label
                  class="uppercase tracking-wide text-black text-xs font-bold mb-2"
                  for="poster"
                >
                  Movie Poster
                </label>
                <input
                  class="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                  id="poster"
                  type="file"
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </div>
            </div>
            <div class="-mx-3 md:flex mb-2">
              <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="uppercase tracking-wide text-black text-xs font-bold mb-2"
                  for="genre"
                >
                  Genre
                </label>
                <div>
                  <select
                    class="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded"
                    id="genre"
                    onChange={(e) => setGenre(e.target.value)}
                  >
                    <option>Action</option>
                    <option>Comedy</option>
                    <option>Thriller</option>
                  </select>
                </div>
              </div>
              <div class="md:w-1/2 px-3">
                <label
                  class="uppercase tracking-wide text-black text-xs font-bold mb-2"
                  for="language"
                >
                  Language
                </label>
                <div>
                  <select
                    class="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded"
                    id="language"
                    onChange={(e) => setLanguage(e.target.value)}
                  >
                    <option>Kannada</option>
                    <option>English</option>
                    <option>Hindi</option>
                  </select>
                </div>
              </div>
              <div class="md:w-1/2 px-3">
                <label
                  class="uppercase tracking-wide text-black text-xs font-bold mb-2"
                  for="mode"
                >
                  watched
                </label>
                <div>
                  {/* <select
                    class="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded"
                    id="mode"
                  > */}
                  <input
                    type="checkbox"
                    onChange={(e) => setWatched(e.target.checked)}
                  />
                  {/* <option>Private</option>
                    <option>Public</option>
                  </select> */}
                </div>
              </div>
            </div>
            <div class="px-3">
              <label
                class="uppercase tracking-wide text-black text-xs font-bold mb-2"
                for="review"
              >
                Review*
              </label>
              <textarea
                rows="4"
                cols="24"
                class="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                id="review"
                type="text"
                placeholder="..."
                onChange={(e) => setReview(e.target.value)}
              />
            </div>
            <div class="-mx-3 md:flex mt-2">
              <div class="md:w-full px-3">
                <button
                  class="md:w-full bg-gray-900 text-white font-bold py-2 px-4 border-b-4 rounded-full"
                  onClick={handleSubmit}
                >
                  {loading ? "Loading...." : "Add Movie"}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddNew;
