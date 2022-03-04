import React, { useState } from "react";
import "./form.css";

const ErrorMessage = ({ msg }) => <span className="error-msg">{msg}</span>;

const Form = ({ addNewCourse }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Clear Errors
    setError("");

    // Validate Title and Description Fields
    if (!title || !description) {
      return setError("Pls fill in all fields");
    }

    addNewCourse({ title, description });

    clearFormFields();
  };

  const clearFormFields = () => {
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <ErrorMessage msg={error} />}

      <div className="form-control">
        <label>Title</label>

        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </div>

      <div className="form-control">
        <label>Description</label>

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
