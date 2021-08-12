import './App.css';
import React, { useState } from 'react'
import Checkbox from './components/checkbox';
import { List, ListItem } from './components/list';

const valueCount = 100;
const values = Array.from(Array(valueCount)).map((_, index) => index.toString());

function App() {
  const [checkedSet, setCheckedSet] = useState(new Set());

  const handleCheck = (e, value) => {
    const checked = e.target.checked
    checked
      ? setCheckedSet(prev => {
        prev.add(value);
        return new Set(prev);
      })
      : setCheckedSet(prev => {
        prev.delete(value);
        return new Set(prev);
      });
  };

  const list = values.map(value => {
    return (
      <ListItem key={value}>
        <Checkbox
          checked={checkedSet.has(value)}
          onChange={e => handleCheck(e, value)}
        />
        {value}
      </ListItem>
    );
  });

  return (
    <div className="App">
      <div id="container-list">
        <List>
          {list}
        </List>
      </div>
    </div>
  );
}

export default App;
