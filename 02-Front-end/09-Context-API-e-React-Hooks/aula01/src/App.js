import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound';
import './App.css';
import Header from './components/Header';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true); // [ state , setter]
  const [gitData, setGitData] = useState(null);
  // const [name, setName] = useState('');
  // const [count, setCount] = useState(0);

  // const [state, setState] = useState({
  //   isDarkTheme: true,
  //   name: '',
  //   count: 0,
  // });

  // setName("Luanderson")
  // setState({ ...state, isDarkTheme: false});
  // setState((prevState) => ({ ...prevState, isDarkTheme: false}))

  return (
    <div className={isDarkTheme ? 'App__Dark' : 'App__Light'}>
      <Header setIsDarkTheme={setIsDarkTheme} isDarkTheme={isDarkTheme} />
      <Switch>
        <Route
          exact
          path="/"
          // component={ Login }
          render={(props) => <Login {...props} setGitData={setGitData} />}
        />
        <Route
          path="/home"
          // component={ Home }
          render={(props) => <Home {...props} gitData={gitData} />}
        />
        <Route path="*" component={PageNotFound} exact />
      </Switch>
    </div>
  );
}

export default App;
