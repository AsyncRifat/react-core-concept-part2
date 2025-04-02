import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    const newCount = count + 1;
    setCount(newCount);
  };

  const handleClose = () => {
    const newCount = count - 1;
    setCount(newCount);
  };

  const counterStyle = {
    border: '1.5px solid aqua',
    marginTop: '10px',
    borderRadius: '15px',
    padding: '8px',
  };
  return (
    <div style={counterStyle}>
      <h3>Count: {count}</h3>
      <button style={{ marginRight: '10px' }} onClick={handleAdd}>
        Plus
      </button>
      <button onClick={handleClose}>Minus</button>
    </div>
  );
}
