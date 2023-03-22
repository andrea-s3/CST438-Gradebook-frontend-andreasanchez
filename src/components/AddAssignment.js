import React, { useState } from 'react';
import Button from '@mui/material/Button';
const AddAssignment = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(inputs));
  };

  return (
    <main>
      <h3>Create New Assignment</h3>
      <form onSubmit={handleSubmit} className="formSpacing">
        <div>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={inputs.name || ''}
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label>
            Due Date:
            <input
              type="date"
              name="dueDate"
              value={inputs.dueDate || ''}
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label>
            Course:
            <input
              type="text"
              name="courseID"
              value={inputs.courseID || ''}
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <Button class = "button" type="submit" variant="outlined" style={{ margin: 8}}>
            Add Assignment
          </Button>
        </div>
      </form>
    </main>
  );
};

export default AddAssignment;