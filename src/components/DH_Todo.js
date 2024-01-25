// Todo.js
import React, { useState } from 'react';

const Todo = ({ id, value, onDelete, onUpdate, color }) => {
  const [editedValue, setEditedValue] = useState(value);

  const handleInputChange = (e) => {
    setEditedValue(e.target.value);
  };

  const handleSaveEdit = () => {
    onUpdate(id, editedValue);
  };

  return (
    <div className={`contentsContainer`} style={{ backgroundColor: color }}>
      <div className='contents'>
        <div>
          {value}
          <button className={`delBtn`} onClick={() => onDelete(id) }>삭제</button>
          <button className={`saveBtn`} onClick={handleSaveEdit}>저장</button>
        </div>
        <div>
          <input value={editedValue} onChange={handleInputChange} />
        </div>
      </div>
    </div>
  );
};

export default Todo;
