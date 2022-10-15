import React from 'react';

const textJSX = "Hello, JSX";
const ElementH1 = <h1>{textJSX}</h1>;

export default function App() {
  return (
    <div className="App">{ElementH1}</div>
  )
}