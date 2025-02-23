import React, { useState } from "react";

// Define a functional component called TodoApp
const TodoApp = () => {
  // Declare a state variable called task and set it to an empty string
  const [task, setTask] = useState("");
  // Declare a state variable called taskList and set it to an empty array
  const [taskList, setTaskList] = useState([]);
  // Declare a state variable called editingIndex and set it to null
  const [editingIndex, setEditingIndex] = useState(null);

  // Define a function called handleAddTask
  const handleAddTask = () => {
    // If the task is empty, alert the user to enter a task
    if (task.trim() === "") {
      alert("Please enter a task");
      return;
    }
    // If the editingIndex is not null, update the taskList at the editingIndex with the new task
    if (editingIndex !== null) {
      const updatedTaskList = [...taskList];
      updatedTaskList[editingIndex] = task;
      setTaskList(updatedTaskList);
      setEditingIndex(null); // Reset editing index
    } else {
      // Otherwise, add the new task to the taskList
      setTaskList([...taskList, task]);
    }
    // Reset the task to an empty string
    setTask("");
  };

  // Function to handle editing a task
  const handleEditTask = (index) => {
    // Set the task to the task at the given index in the task list
    setTask(taskList[index]);
    // Set the editing index to the given index
    setEditingIndex(index);
  };

  // Function to handle deleting a task
  const handleDeleteTask = (index) => {
    // Set the task list to a new array that filters out the task at the given index
    setTaskList(taskList.filter((task, i) => i !== index));
  };

  return (
    <div className="max-w-md mx-auto bg-gray-200 text-gray-700 mt-10 p-4 rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-center">Todo App</h1>
      <div className="flex gap-2 items-center justify-center">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="w-full p-2 rounded-md bg-gray-100 outline-none focus:ring-2 focus:ring-gray-500"
          placeholder="Enter a  Task"
        />
        <button
          onClick={handleAddTask}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md  transition-all duration-300"
        >
          {editingIndex !== null ? "Update" : "Add"}
        </button>
      </div>
      <div>
        <ul>
          {taskList.length < 1 && (
            <p className="my-2 text-center font-semibold text-gray-700">
              No Tasks
            </p>
          )}
          {taskList &&
            taskList.map((task, index) => {
              return (
                <li
                  key={task}
                  className="flex justify-between items-center bg-gray-300 p-2 rounded-md my-2"
                >
                  <span className="font-medium text-gray-700 px-2">
                    {index}
                    {task}
                  </span>
                  <div className="space-x-2">
                    <button
                      onClick={() => handleEditTask(index)}
                      className="bg-yellow-400 hover:bg-yellow-500 rounded-md px-4 py-2 text-gray-700 transition-all duration-300"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteTask(index)}
                      className="bg-red-400 hover:bg-red-500 rounded-md px-4 py-2 text-gray-700 transition-all duration-300 "
                    >
                      Delete
                    </button>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default TodoApp;
