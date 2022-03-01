import Card from "./components/card/card";
import "./App.css";
import { useState } from "react";
import Form from "./components/form/form";

const App = () => {
  const [data, setData] = useState([
    {
      title: "Improve your front-end skills by building projects.",
      descripition:
        "Scan the QR code to visit Frontend Mentor and take your coding skill to the next level",
    },
  ]);

  return (
    <section>
      <Form />

      <div className="card-wrapper">
        {data.map((item) => (
          <Card title={item.title} description={item.descripition} />
        ))}
      </div>
    </section>
  );
};

export default App;
