import React, { useState } from 'react';
import logo from './logo.png';
import arch from './arch.jpg';
import './App.css';

import axios from 'axios';

function App() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const padding = 24;

  // const url = "http://localhost:8080"
  const url = "http://k8s-default-ingressd-68f7a0df95-1821759015.ap-northeast-2.elb.amazonaws.com"

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
  const setTeam = async () => {
    try {
      await axios.post(url + "/team", { name: name, phone: phone, withCredentials: true })
      .then((res) => console.log(res))
    } catch (err) {
      console.log(err)
    }
  }

  const getTeam = async () => { 
    try {
      const rslt = await axios.get(url + "/team")
      console.log(rslt)
      setItems(rslt.data)
    } catch (err) {
      console.log(err)
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
              <code>PFe DEMO APP sadfwq</code> 
            </p>
            
            <div>
              <input style={styles.input} type="text" value={name} onChange={(e) => setName(e.target.value)}/>
              <input style={styles.input} type="text" value={phone} onChange={(e) => setPhone(e.target.value)}/>
              <button onClick={setTeam}>입력</button>
              <button style={{marginLeft: 16}} onClick={getTeam}>목록</button>
            </div>
            <div style={styles.contents}>
              {items.map((item, index) => (
                <div key={index}>
                  {item.name}, {item.phone}
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
