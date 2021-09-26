import React, { useState, useEffect } from 'react';

const Number = () => {
    const [number, setNumber] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setNumber(number => number + 1);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
       <span style={{ fontSize: '32px',fontWeight: 'bold'}}>{number}</span> 
    );
};

export default Number;