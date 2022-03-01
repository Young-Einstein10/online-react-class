import React from "react";
import "./form.css";

const Form = () => {
  return (
    <form>
      <div className="form-control">
        <label>Title</label>

        <input type="text" />
      </div>

      <div className="form-control">
        <label>Descripition</label>

        <textarea />
      </div>

      <div className="btn-wrapper">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default Form;
