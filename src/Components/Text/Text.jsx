import React from "react";
import { CgClose, CgInfo } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

import "./Text.css";

const Text = ({ text, handleTaskClick, handleTaskDelete }) => {
  const navigate = useNavigate();

  const handleTaskDetailsClick = () => {
    navigate(`/${text.title}`);
  };

  return (
    <div
      className="taskContainer"
      style={text.completed ? { borderLeft: "6px solid chartreuse" } : {}}
    >
      <div className="taskTitle" onClick={() => handleTaskClick(text.id)}>
        {text.title}
      </div>
      <div className="buttonContainer">
        <button onClick={handleTaskDetailsClick} className="seeDetailsButton">
          <CgInfo />
        </button>

        <button
          className="removeTaskButton"
          onClick={() => handleTaskDelete(text.id)}
        >
          <CgClose />
        </button>
      </div>
    </div>
  );
};

export default Text;
