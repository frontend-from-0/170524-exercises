import './App.css';
import {Button} from './components/Button';
import {useState} from 'react';

export function App() {

  // In react, we use JSX to define the structure of our components
  // State for background color
  const [bgColor, setBgColor] = useState("rgb(180, 180, 180)");
  const [textColor, setTextColor] = useState("black");
 

  // Functions to change background color
  const pinkBackground = () => {
    setBgColor("pink");
    setTextColor("darkRed");
  };
const blackBackground = () => {
  setBgColor("black");
  setTextColor("pink");
};

  return (
    <div className='App' style={{backgroundColor: bgColor,color: textColor}}>
      <h1>Demo app</h1>
      <p>This is a demo react application.</p>
      <div className='row'>
      <Button label='pink' handleClick={pinkBackground} buttonColor='pink' borderColor='black'/>
      <Button label='black' handleClick={blackBackground} buttonColor='black' borderColor='pink'/>
      </div>

      <p>Click the buttons above to change the color of the box!</p>
    </div>
  );
}
