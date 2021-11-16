import React from "react";

function AddNew() {
  return (
    <>
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
                  Mode
                </label>
                <div>
                  <select
                    class="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded"
                    id="mode"
                  >
                    <option>Private</option>
                    <option>Public</option>
                  </select>
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
              />
            </div>
            <div class="-mx-3 md:flex mt-2">
              <div class="md:w-full px-3">
                <button class="md:w-full bg-gray-900 text-white font-bold py-2 px-4 border-b-4 rounded-full">
                  Button
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
