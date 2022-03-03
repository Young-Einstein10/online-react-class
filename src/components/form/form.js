import React, { useState } from "react";
import "./form.css";

const Form = ({ addNewCourse }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addNewCourse({ title, description });

    clearFormFields();
  };

  const clearFormFields = () => {
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-control">
        <label>Title</label>

        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </div>

      <div className="form-control">
        <label>Descripition</label>

        <textarea
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
      </div>

      <div className="btn-wrapper">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default Form;
