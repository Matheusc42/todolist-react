import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";

import "./App.css";

import Tasks from "./Components/Tasks/Tasks";
import AddTask from "./Components/AddTask/AddTask";
import Header from "./Components/Header/Header";
import TaskDetails from "./Components/TaskDetails/TaskDetails";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTask = async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.cypress.io/todos?_limit=10"
      );
      setTasks(data);
    };

    fetchTask();
  }, []);

  const handleTaskAddition = (taskTitle) => {
    const newTask = [
      ...tasks,
      {
        title: taskTitle,
        id: uuidv4(),
        completed: false,
      },
    ];
    setTasks(newTask);
  };

  const handleTaskDelete = (taskId) => {
    const newTasks = tasks.filter((tasks) => tasks.id !== taskId);
    setTasks(newTasks);
  };

  const handleTaskClick = (taskId) => {
    const newTask = tasks.map((task) => {
      if (task.id === taskId) return { ...task, completed: !task.completed };

      return task;
    });
    setTasks(newTask);
  };

  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <>
                <AddTask handleTaskAddition={handleTaskAddition} />
                <Tasks
                  tasks={tasks}
                  handleTaskClick={handleTaskClick}
                  handleTaskDelete={handleTaskDelete}
                />
              </>
            }
          />
          <Route path="/:taskTitle" exact element={<TaskDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
