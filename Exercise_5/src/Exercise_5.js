import React, { useEffect } from 'react';
import { useState } from 'react';

export function Exercise_5() {

    const[counter, setCounter] = useState(0);

    return (     
        <div>
            <h1>Contador= {counter};</h1>
            <button onClick={() => {
                setCounter(counter +1)
            }}>
                Sumar    
            </button>
        </div>
    );
};