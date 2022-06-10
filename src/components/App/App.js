import 'components/App/App.css';
import mainLogo from 'assets/brand/hamsoft-logo.gif'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={mainLogo} className="App-logo" alt="logo" />
        <p>HamSoft</p>
      </header>
    </div>
  );
}

export default App;
