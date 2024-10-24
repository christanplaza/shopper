'use client';

import { useState } from 'react';
import Cookies from 'js-cookie';

export default function TextChanger() {
  const [text, setText] = useState("Hello World!");

  function changeText() {
    setText("State Changed!");
  }

  function changeTextFromCookie() {
    let textFromCookie = Cookies.get('cookie_information');
    setText(textFromCookie);
  }

  return <>
    <h1>{text}</h1>
    <button onClick={changeText}>Click me to change text!</button>
    <button onClick={changeTextFromCookie}>Click me to change text from cookie!</button>
  </>;
}


// 1. Create a State with the name text
// 2. Set it's default value to "Hello World!"
// 3. Make a button that changes the state when I click it into "State Changed!"
// 4. Challenge: Add another button that changes the text back to "Hello World!"
// 5. Extra Challenge: Add more buttons that change the text to different messages!