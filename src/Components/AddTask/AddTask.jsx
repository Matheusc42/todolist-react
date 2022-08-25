import React, { useState } from "react";

import Button from "../Button/Button";
import "./AddTask.css";

const AddTask = ({ handleTaskAddition }) => {
  const [inputData, setInputData] = useState("");

  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };

  const handleTaskClick = () => {
    handleTaskAddition(inputData);
    setInputData("");
  };

  return (
    <div className="addTaskContainer">
      <input
        onChange={handleInputChange}
        value={inputData}
        className="addTaskInput"
        type="text"
      />
      <div className="addTaskButtonContainer">
        <Button onClick={handleTaskClick}>Add Task</Button>
      </div>
    </div>
  );
};

export default AddTask;
