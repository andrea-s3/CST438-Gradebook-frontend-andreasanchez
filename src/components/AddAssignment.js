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

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: inputs.name,
        dueDate: inputs.dueDate,
      }),
    };

    fetch(`http://localhost:8081/gradebook/addAssignment/${inputs.courseID}`, requestOptions)
      .then((response) => {
        if (response.status === 200) {
          alert('Assignment added successfully');
        } else {
          alert('Assignment was unable to be added');
        }
      })
      .catch((error) => {
        console.error(error);
        alert('There was an error adding the assignment');
      });
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
          <Button class="button" type="submit" variant="outlined" style={{ margin: 8 }}>
            Add Assignment
          </Button>
        </div>
      </form>
    </main>
  );
};

export default AddAssignment;