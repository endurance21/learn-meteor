import React, { useState } from 'react';
import { tasksCollection } from '/imports/api/task';
 
export const TaskForm = ({user}) => {
  const [text, setText] = useState("");
  const userFilter = user ? { userId: user._id } : {};

  
  const handleSubmit = e => {
    e.preventDefault();

    if (!text) return;

    tasksCollection.insert({
      text: text.trim(),
      userId:user._id,
      createdAt: new Date()
    });

    setText("");
  };
 
  return (
    <form className=" d-flex task-form shadow-sm p-3 mb-1 bg-body rounded justify-content-evenly "  onSubmit={handleSubmit}>
      <input
      className="mr-1"
    style={{flex:"3"}}
        type="text"
        placeholder="Type to add new tasks"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
 
      <button type="submit" className="text-white bg-success" style={{flex:"1"}}>Add Task</button>
    </form>
  );
};