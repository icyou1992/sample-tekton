import React, { useState, useEffect } from 'react'
import logo from './logo.png';
import arch from './arch.jpg';
import './App.css';

function App() {
  const items = useState([]);
  const padding = 8;

  const styles = {
    app: {
      display: 'flex',
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: padding,
    },
    left: {
      display: 'flex',
      flex: .5,
      flexDirection: 'column',
      alignItems: 'center',
      padding: padding,
    },
    right: {
      display: 'flex',
      flex: .5,
      flexDirection: 'column',
      alignItems: 'center',
      padding: padding,
    },
  }

  return (
    <div className="App">
      <header className="App-header">
        <div style={styles.app}>
          <div style={styles.left}>
            <img src={logo} className="App-logo" alt="logo" />
            <img src={arch} />
          </div>
          <div style={styles.right}>
            <p>
              <code>PFe DEMO APP</code> 
            </p>
            <div style={styles.contents}>
              {items.map((item, index) => (
                <div key={index}>{item}</div>
              ))}
            </div>
            <div>qwerqwer</div>
            <div>qwerqwer</div>
            <div>qwerqwer</div>
            <div>qwerqwer</div>
          </div>
        </div>
      </header>
    </div>
  );
}


export default App;
