import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
const Counter = () => {
  
  const [count, setCount] = useState(0);
  const buttonStyle = {
      color: '#ffffff',
      fontSize: '15px',
      width: 'auto',
      borderRadius: '15px',
      padding: '10px',
      margin: '10px',
      backgroundColor: '#007bff',
      border: '1px solid transparent'
  };

  return (
      <div className="Counter" >
        <h2>{count}</h2>        
        <button style={buttonStyle} onClick={() => count > 100 ? "" : setCount(count + 1)}><FaPlus /></button>
        <button style={buttonStyle} onClick={() => count < 1 ? "" : setCount(count - 1)}><FaMinus /></button>
      </div>
  );
}

export default Counter;
