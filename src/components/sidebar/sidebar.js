import React from "react";
import Form from "../form/form";

import "./sidebar.css";

const Sidebar = ({ addNewCourse }) => {
  return (
    <aside className="sidebar-wrapper">
      <div className="sidebar-content">
        <h2>Add New Course</h2>

        <Form addNewCourse={addNewCourse} />
      </div>
    </aside>
  );
};

export default Sidebar;
