import { useState } from 'react';

let nextId = 0;

export default function List() {
  const [userInput, setUserinputs] = useState('');
  const [texts, setTexts] = useState([]);

  return (
    <>
      <input
        value={userInput}
         onChange={e => setUserinputs(e.target.value)}
      />
      <button onClick={() => {
        setUserinputs('');
        setTexts([
          ...texts,
          { id: nextId++, value: userInput }
        ]);
      }}>Add</button>
      
        {texts.map(text => (
           <div key={text.id}>{text.value}</div>
        ))}
      
    </>
  );
}
