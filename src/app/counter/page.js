'use client'

import { useState } from 'react';
import Cookies from 'js-cookie';

export default function Counter() {
  const [count, setCount] = useState(0);
  const [numberList, setNumberList] = useState([]);

  function onButtonClick() {
    setCount(count + 1);
  }

  function onNumberClick(number) {
    let oldList = numberList;

    setNumberList([...oldList, number]);
  }

  function saveToCookie() {
    Cookies.set('cookie_information', "I like cookies!", { expires: 1 }); // Cookie expires in 1 day
  }

  return <>
    <div className="container">
      <h1>{count}</h1>
      <button onClick={onButtonClick} className="btn btn-success">+1</button>

      {/* Create buttons for numbers 0-9 */}
      <div>
        {Array.from({ length: 10 }, (_, index) => (
          <button
            key={index}
            onClick={() => onNumberClick(index)}
            className="btn btn-primary m-2"
          >
            {index}
          </button>
        ))}
      </div>

      {/* Display the number list */}
      <h2>Number List: {numberList.join('')}</h2>

      <button onClick={saveToCookie}>Click me to save something in cookie!</button>
    </div>
  </>;
}