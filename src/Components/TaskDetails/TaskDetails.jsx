import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Button from "../Button/Button";

import "./TaskDetails.css";

const TaskDetails = () => {
  const params = useParams();
  const navigate = useNavigate();

  const handleBackButtonClick = () => {
    navigate("/");
  };

  return (
    <>
      <div className="backButtonContainer">
        <Button onClick={handleBackButtonClick}>Voltar</Button>
      </div>
      <div className="taskDetailsContainer">
        <h2>{params.taskTitle}</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, culpa.
          Error saepe eum amet dolores commodi recusandae quasi delectus illum
          suscipit, ea, veritatis quidem neque temporibus labore nostrum dolorem
          corrupti.
        </p>
      </div>
    </>
  );
};

export default TaskDetails;
