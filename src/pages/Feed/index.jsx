import React from "react";
import FeedCard from "../../components/FeedCard";
import MainHeader from "../../components/MainHeader";
import "./style.css";

export default function Feed() {
  return (
    <div>
      <MainHeader />
      <div className="feedCard">
        {[...Array(10)].map(() => (
          <FeedCard />
        ))}
      </div>
    </div>
  );
}
