import React from "react";
import "./Home.css";
import Login from "../Login/Login";
import Player from "../Player/Player";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Home = () => {
  const [childData, setChildData] = useState();
  const { isLoading, error, data } = useQuery(["songs"], async () => {
    const response = await axios.get("http://localhost:5000/songs", {
      withCredentials: true,
    });

    return response.data;
  });

  if (isLoading) console.log("Loading...");
  if (error) console.log("An error has occurred: " + error.message);

  return (
    <div className="home">
      {childData === undefined ? (
        <Login passChildData={setChildData} />
      ) : (
        <>
          <p>{childData}</p>
          <Player songs={data} />
        </>
      )}
    </div>
  );
};

export default Home;
