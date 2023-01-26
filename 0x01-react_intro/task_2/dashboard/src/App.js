import logo from './logo.svg';
import './App.css';
import {getFullYear,getFooterCopy} from './utile'
function App() {
  return (
    <div className="App">
    <div className="App-header">
    <img src={logo} className="App-logo "alt= "logo"/>
      <h1>School dashboard</h1>
    </div>
    <div className="App-body">
      <p>Login to access the full dashboard</p>
      <form>
      <label htmlFor='email'>Email</label>
      <input type='email' id ="email"></input>
      <label htmlFor='password'>password</label>
      <input type='password' id='pass'></input>
      <button>OK</button>
      </form>
    </div>
    <div className="App-footer">
      <p>Copyright {getFullYear} - {getFooterCopy}</p>
    </div>
    </div>
  );
}

export default App;
