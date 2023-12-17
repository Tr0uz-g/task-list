import React, { createContext, useContext, useState } from 'react';

const TaskListContext = createContext();

export const useTaskListContext = () => {
  const context = useContext(TaskListContext);
  if (!context) {
    throw new Error('useTaskListContext debe usarse dentro de un TaskListProvider');
  }
  return context;
};

export const TaskListProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addTask = (title, description) => {
    if (title.trim() !== '' && description.trim() !== '') {
      setItems([...items, { title, description, completed: false }]);
    }
  };

  const deleteTask = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  const updateTask = (index, updatedTitle, updatedDescription) => {
    if (updatedTitle.trim() !== '' && updatedDescription.trim() !== '') {
      const updatedItems = [...items];
      updatedItems[index].title = updatedTitle;
      updatedItems[index].description = updatedDescription;
      setItems(updatedItems);
    }
  };

  const contextValue = {
    items,
    addTask,
    deleteTask,
    updateTask,
  };

  return (
    <TaskListContext.Provider value={contextValue}>
      {children}
    </TaskListContext.Provider>
  );
};
