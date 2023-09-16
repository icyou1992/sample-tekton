import logo from './logo.png';
import arch from './arch.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <img src={logo} className="App-logo" alt="logo" />
          <img src={arch} />
        </div>
        <div>
          <p>
            <code>PFe DEMO APP</code> 
          </p>
          <div>asdasd</div>
          <div>qwerqwer</div>
        </div>
      </header>
    </div>
  );
}

const styles = {
  app: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  left: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  right: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
}

export default App;
