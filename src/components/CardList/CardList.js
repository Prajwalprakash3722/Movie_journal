import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import axios from "axios";
import Timeline from "../Timeline/Timeline";
function CardList() {
  const [token, setToken] = useState("");
  const [props, setProps] = useState([]);

  useEffect(() => {
    setToken(localStorage.getItem("token"));
    if (token) {
      axios
        .get("http://localhost:3001/api/movies", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setProps(res.data);
          console.log(props.length);
        });
    }
  }, [token]);
  return (
    <>
      {props.length > 0 && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 min-h-screen">
          {props.length > 0 &&
            props.map((item) => (
              <>
                <Card
                  key={item.id}
                  id={item._id}
                  title={item.title}
                  // poster={item.poster}
                  year={item.year}
                  date={item.date}
                  review={item.review}
                  rating={item.rating}
                  genre={item.genre}
                />
              </>
            ))}
        </div>
      )}
      {props.length === 0 && (
        <div className="min-h-screen mt-5">
          <center>
            <span className="text-5xl font-serif text-gray-500 text-center">
              You haven't added any movies yet
            </span>
          </center>
          <Timeline />
        </div>
      )}
    </>
  );
}
export default CardList;
