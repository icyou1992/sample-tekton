import React, { useState } from 'react'
import logo from './logo.png';
import arch from './arch.jpg';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const padding = 24;

  const styles = {
    app: {
      display: 'flex',
      // width: "100%",
      flex: 100,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: padding,
    },
    left: {
      display: 'flex',
      // width: "50%",
      flex: 50,
      flexDirection: 'column',
      alignItems: 'center',
      padding: padding,
    },
    right: {
      display: 'flex',
      // width: "50%",
      flex: 50,
      flexDirection: 'column',
      alignItems: 'center',
      padding: padding,
    },
    logoImage: {
      width: 250,
      height: 70,
      marginBottom: 100,
    },
    archImage: {
      width: 500,
    },
    input: {
      width: 100,
      marginRight: 8,
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <div style={styles.app}>
          <div style={styles.left}>
            <img style={styles.logoImage} src={logo} className="App-logo" alt="logo" />
            <img style={styles.archImage} src={arch} />
          </div>
          <div style={styles.right}>
            <p>
              <code>PFe DEMO APP</code> 
            </p>
            
            <div>
              <input style={styles.input} type="text" value={name} onChange={() => setName(name)}/>
              <input style={styles.input} type="text" value={phone} onChange={() => setPhone(phone)}/>
              <button onClick={() => {}}>입력</button>
              <button style={{marginLeft: 16}} onClick={() => {}}>목록</button>
            </div>
            <div style={styles.contents}>
              {items.map((item, index) => (
                <div key={index}>
                  <div>{item}</div>
                  <div>{item.name}</div>
                  <div>{item.phone}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}


export default App;
