import React from "react";
import "./Tasks.css";

import Text from "../Text/Text";

const Tasks = ({ tasks, handleTaskClick, handleTaskDelete }) => {
  return (
    <>
      {tasks.map((text) => (
        <Text
          key={text.id}
          text={text}
          handleTaskClick={handleTaskClick}
          handleTaskDelete={handleTaskDelete}
        />
      ))}
    </>
  );
};

export default Tasks;
