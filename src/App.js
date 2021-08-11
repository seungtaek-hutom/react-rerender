import './App.css';
import React, { useState } from 'react'
import Checkbox from './components/checkbox';
import { List, ListItem } from './components/list';

const numbers = Array.from(Array(100)).map((value, index) => index);

function App() {
  const [checkedSet, setCheckedSet] = useState(new Set());

  const handleCheck = (e, number) => {
    if (e.target.checked) {
      setCheckedSet(prev => {
        prev.add(number);
        return new Set(prev);
      });
    } else {
      setCheckedSet(prev => {
        prev.delete(number);
        return new Set(prev);
      });
    }
  };

  return (
    <div className="App">
      <div id="container-list">
        <List>
          {numbers.map(number => {
            return (
              <ListItem key={number}>
                <Checkbox
                  checked={checkedSet.has(number)}
                  onChange={e => handleCheck(e, number)}
                />
                {number}
              </ListItem>
            )
          })}
        </List>
      </div>
    </div>
  );
}

export default App;
