import "./App.css";
import { useState } from "react";
import Sidebar from "./components/sidebar/sidebar";
import MainContent from "./components/mainContent";

const App = () => {
  const [data, setData] = useState([]);

  const addNewCourse = (newCourse) => {
    setData([...data, newCourse]);
  };

  return (
    <section>
      <Sidebar addNewCourse={addNewCourse} />

      <MainContent data={data} />
    </section>
  );
};

export default App;
