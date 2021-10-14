import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import LoginForm from './components/LoginForm/LoginForm';
import useToken from './components/useToken';

function App() {
  const { token, setToken } = useToken();

  if(!token) {
    return <LoginForm setToken={setToken} />
  }

  console.log("token",token);
  

  return (
    <div className="App">
     
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard">
          <Home/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
