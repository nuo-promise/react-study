import React from 'react';
import Counter from './Counter';
import Timer from './Timer';
import './App.css';

const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee'
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222'
  }
};

const ThemeContext = React.createContext(themes.light);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello React Typescript!</h1>
        <ThemeContext.Provider value={themes.dark}>
          <Timer title={'庆余年'} />
          <Counter />
        </ThemeContext.Provider>
      </header>
    </div>
  );
}

export default App;
