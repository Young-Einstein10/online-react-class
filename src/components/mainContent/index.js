import React from "react";
import Card from "../card/card";

import "./maincontent.css";

const MainContent = ({ data }) => {
  return (
    <section className="main-content">
      <h2>Courses</h2>

      <div className="card-wrapper">
        {data.map((item) => (
          <Card
            key={item.title}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};

export default MainContent;
