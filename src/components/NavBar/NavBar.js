import { Link } from "react-router-dom";
import { React, useEffect, useState } from "react";
import axios from "axios";
export default function Nav() {
  const [token, setToken] = useState("");
  const [user, setUser] = useState({});
  const [logged, setLoggedIn] = useState(false);
  const handleLogout = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
    window.location.pathname = "/";
  };
  useEffect(() => {
    setToken(localStorage.getItem("token"));
    if (token) {
      axios
        .get("http://localhost:3001/api/user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setUser(res.data[0]);
          setLoggedIn(true);
        });
    }
  }, [token]);
  return (
    <>
      <header className="text-gray-800 bg-gray-50 shadow-md body-font min-w-full bg-gray-cool">
        <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
          <Link
            className="flex title-font font-medium items-center text-white mb-2 md:mb-0"
            to="/"
          >
            <img
              src="https://ui-avatars.com/api/?name=Movie+Journal"
              className="w-16 h-16 rounded-full"
              alt="logo"
            />
            <span className="m-3 text-xl text-gray-800 text-gray-lightest">
              {user.name ? user.name + "'s" : ""} Movie Journal
            </span>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <h2 className="text-xl last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-gray-700 active:text-blue-400">
              <Link
                to="/"
                className="m-5 text-gray-lightest hover:text-gray-dark"
              >
                Home
              </Link>
            </h2>

            {!token ? (
              <>
                <h2
                  key={3}
                  className="text-xl last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-gray-700 active:text-blue-400"
                >
                  <Link
                    to="/register"
                    className="m-5 text-gray-lightest hover:text-gray-dark"
                  >
                    Register
                  </Link>
                </h2>
                <h2
                  key={2}
                  className="text-xl last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-gray-700 active:text-blue-400"
                >
                  <Link
                    to="/login"
                    className="m-5 text-gray-lightest hover:text-gray-dark"
                  >
                    Login
                  </Link>
                </h2>
              </>
            ) : (
              <>
                <h2
                  key={3}
                  className="text-xl last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-gray-700 active:text-blue-400"
                >
                  <Link
                    to="/add"
                    className="m-5 text-gray-lightest hover:text-gray-dark"
                  >
                    Add
                  </Link>
                </h2>
                <h2
                  key={5}
                  className="text-xl last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-gray-700 active:text-blue-400"
                >
                  <Link
                    onClick={handleLogout}
                    className="m-5 text-gray-lightest hover:text-gray-dark"
                  >
                    Logout
                  </Link>
                </h2>
                <>
                  <Link
                    to="/profile"
                    className="m-5 hover:text-blue-dark flex flex-col items-center justify-center"
                  >
                    <img
                      src={`https://ui-avatars.com/api/?name=${
                        user.name ? user.name : "Movie Journal"
                      }`}
                      alt="logo"
                      className="w-16 h-16 rounded-full"
                      title="profile"
                    />
                  </Link>
                </>
              </>
            )}
          </nav>
        </div>
      </header>
    </>
  );
}
