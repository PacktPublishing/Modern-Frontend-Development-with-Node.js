import * as React from "react";
import { Link } from "react-router-dom";
import river from "./river.webp";
import snow from "./snow.jpg";

const Home = () => {
  return (
    <>
      <div className="teaser">
        <Link to="/video">
          <img src={river} />
        </Link>
      </div>
      <div className="teaser">
        <Link to="/audio">
          <img src={snow} />
        </Link>
      </div>
    </>
  );
};

export default Home;
