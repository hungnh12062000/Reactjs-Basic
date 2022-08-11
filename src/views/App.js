import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/MyComponent';
// import = require 

// Arrow Function component
const App = () => {
// function App() { 
  return (

    // jsx
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Downgrade React 18 to 17
        </p>
        
        <MyComponent/>

      </header>
    </div>

  );
}

export default App;
