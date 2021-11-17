import React from "react";
import { Link } from "react-router-dom";

import CardList from "../components/CardList/CardList";
import Timeline from "../components/Timeline/Timeline";
function HomePage() {
  const token = localStorage.getItem("token");
  return (
    <>
      {token && <CardList />}
      {!token && (
        <>
          <section className="text-gray-600 body-font min-h-screen">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
              <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                  Welcome to
                  <br className="inline-block" />
                  <span className="text-5xl lg:text-9xl font-serif text-gray-500">
                    Movie Journal
                  </span>
                </h1>
                <div className="min-w-screen">
                  <p className="text-left lg:text-center mb-8 leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolore, provident. Nobis soluta laudantium at animi nesciunt
                    velit quae, maiores consectetur, aliquam, reiciendis
                    eveniet. Eaque,
                    <br className="inline-block lg:hidden" />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolore, provident. Nobis soluta laudantium at animi nesciunt
                    velit quae, maiores consectetur, aliquam, reiciendis
                    eveniet. Eaque,
                    <br className="inline-block lg:hidden" />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolore, provident. Nobis soluta laudantium at animi nesciunt
                    velit quae, maiores consectetur, aliquam, reiciendis
                    eveniet. Eaque,
                  </p>
                </div>
                <div className="flex justify-center">
                  {!token && (
                    <>
                      <Link to="/login">
                        <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                          Login
                        </button>
                      </Link>
                      <Link to="/register">
                        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                          Register
                        </button>
                      </Link>
                    </>
                  )}
                </div>
              </div>
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/rvision-fd77e.appspot.com/o/Exams-bro%20(1).png?alt=media&token=478ca041-9c98-4b2d-ba0e-24cf62d0307f"
                  className="object-cover object-center rounded"
                  alt="hero"
                />
              </div>
            </div>
            <h1 className="text-5xl font-serif text-gray-500">
              How Does this work ?
            </h1>

            <Timeline />
          </section>
        </>
      )}
    </>
  );
}

export default HomePage;


