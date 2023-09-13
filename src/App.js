
import { useState } from 'react';
import './App.css';

function App() {

  const [wei, setWei] = useState(0)
  const [tot, setTot] = useState(0)
  const [bott, setBot] = useState(0)
  const [tim, setTim] = useState(0)
  const [Gender, setGen] = useState(0)

const bottles = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27]
const time = [1,2,3,4,5,6,7,8,9,10,11,12]

const calculate = (e) => {
  e.preventDefault();
  let total = 0; 
  let litres = bott * 0.33;
  let grams = litres * 8 * 4.5;
  let burning = wei / 10;
  let grams_left = grams - (burning * tim);


  if (Gender === 'male') {
    total = grams_left / (wei * 0.7);
  } else {
    total = grams_left / (wei * 0.6);
  }

  setTot(total);
}
 
  return ( 
    <div id="container">
    <form onSubmit={calculate}>
      <h1>Calculate alcohol blood level</h1>
      <div>
        <label>Weight</label>
        <input type="number" value={wei} onChange={e => setWei(e.target.value)}/>
      </div>
      <div>
        <label>Bottles</label>
        <select value={bott} onChange={e => setBot(e.target.value)}>
         { 
          bottles.map(bottle => (
          <option>{bottle}</option>
         ))
         }
        </select>
      </div>
      <div>
        <label>Time</label>
        <select value={tim} onChange={e => setTim(e.target.value)}>
         { 
          time.map(time => (
          <option>{time} </option>
         ))
         }
        </select>
      </div>
      <div>
        <label>Gender</label>
        <input type='radio' name='gender' value='male' defaultChecked onChange={e => setGen(e.target.value)}/><label>Male</label>
        <input type='radio' name='gender' value='female' onChange={e => setGen(e.target.value)}/><label>Female</label>
      </div>
      <div>
      <output>{tot.toFixed(2)}</output>
      </div>
      <button>Calculate</button>
    </form>
  </div>
  );
}

export default App;