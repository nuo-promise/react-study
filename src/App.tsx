import React, { useState, useCallback, useContext } from 'react';
import Counter from './Counter';
import Timer from './Timer';
import StateTimer from './StateTimer'
import './App.css';
import MyCounter from './MyCounter';

type styleTypeProps = {
  foreground?: string;
  background?: string
};

type themesProps = {
  [propName: string]: styleTypeProps
};

const themes: themesProps = {
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

  const [theme, setTheme] = useState("light");

  const handleChangeTheme = useCallback(() => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello React Typescript!</h1>
        <ThemeContext.Provider value={themes[theme]}>
          <button onClick={handleChangeTheme} >切换主题</button>
          <Toolbar />
          <p>----------------------</p>
          <br />
          <StateTimer title={'林婉儿'} />
          <p>----------------------</p>
          <br />
          <Timer title={'庆余年'} />
          <p>----------------------</p>
          <br />
          <Counter />
          <p>----------------------</p>
          <br />
          <MyCounter title={"自定义Hooks"} step={10} />
        </ThemeContext.Provider>
      </header>
    </div>
  );
}

function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  const theme = useContext(ThemeContext);

  return (
    <button style={{
      background: theme.background,
      color: theme.foreground
    }}>
      I am styled by theme context!
    </button>
  );
}

export default App;
