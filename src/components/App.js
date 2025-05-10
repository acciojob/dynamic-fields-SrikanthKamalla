import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [fields, setFields] = useState([{ name: "", age: "" }]);

  const handleChange = (e, idx) => {
    let { name, value } = e.target;
    const updatedFields = [...fields];
    updatedFields[idx][name] = value;
    setFields(updatedFields);
  };

  const addField = () => {
    setFields([...fields, { name: "", age: "" }]);
  };

  const removeField = (idx) => {
    const updatedFields = fields.filter((ele, i) => i !== idx);
    setFields(updatedFields);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fields);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {fields.map((field, idx) => (
          <div key={idx}>
            <input
              type="text"
              placeholder="Name"
              name="name"
              onChange={(e) => handleChange(e, idx)}
            />
            <input
              type="number"
              placeholder="Age"
              name="age"
              onChange={(e) => handleChange(e, idx)}
            />
            <button onClick={() => removeField(idx)}>Remove</button>
          </div>
        ))}

        <button type="button" onClick={addField}>
          Add More..
        </button>
        <button type="submit">Submit</button>
      </form>
      <p>After cicking submit check console for dat</p>
    </>
  );
};

export default App;
