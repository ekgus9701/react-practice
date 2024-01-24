// TodoList.js
import React, { useState } from 'react';
import TodoItem from './TodoItem';
import './Todo.css';

let nextId = 0;

const TodoList = () => {
  const [userInput, setUserInput] = useState('');
  const [texts, setTexts] = useState([]);
  const [selectedColor, setSelectedColor] = useState('');

  const handleDelete = (id) => {
    const updatedTexts = texts.filter((text) => text.id !== id);
    setTexts(updatedTexts);
  };

  const handleUpdate = (id, updatedValue) => {
    const updatedTexts = texts.map((text) =>
      text.id === id ? { ...text, value: updatedValue, color: selectedColor } : text
    );
    setTexts(updatedTexts);
  };

  return (
    <div className='Everything'>
      <input style={{ backgroundColor: selectedColor }}
        className='inputs'
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button
        onClick={() => {
          setUserInput('');
          setTexts([
            ...texts,
            { id: nextId++, value: userInput, color: selectedColor },
          ]);
        }}
      >
        Add
      </button>
      <div className="btnContainer">
        <button className='lightGreen' onClick={() => setSelectedColor('#B5C8BC')}>"</button>
        <button className='green' onClick={() => setSelectedColor('#778b86')}>"</button>
        <button className='darkGreen' onClick={() => setSelectedColor('#919497')}>"</button>
        <button className='grey' onClick={() => setSelectedColor('#C4C5C5')}>"</button>
        <button className='lightGrey' onClick={() => setSelectedColor('#E6E3E3')}>"</button>
      </div>
      {texts.map((text) => (
        <TodoItem
          className='contents'
          key={text.id}
          id={text.id}
          value={text.value}
          color={text.color}
          onDelete={handleDelete}
          onUpdate={handleUpdate}
        />
      ))}
    </div>
  );
};

export default TodoList;
