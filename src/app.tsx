import React, { useState } from 'react';

export function App() {
  return (
    <div style={{ backgroundColor: 'red' }}>
      This is React{' '}
      <MyComponent
        value={4}
        onChangeColor={(color) => {
          console.log(color);
        }}></MyComponent>
    </div>
  );
}

function MyComponent(props: { value: number; onChangeColor?: (color: string) => void }) {
  const [color, setColor] = useState('red');
  return (
    <div
      style={{ backgroundColor: color }}
      onClick={() => {
        setColor('green');
        if (props.onChangeColor) {
          props.onChangeColor(color);
        }
      }}>
      {props.value}
    </div>
  );
}
