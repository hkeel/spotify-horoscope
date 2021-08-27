import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import Song from './pages/Song';

function App() {
  const [userSign, setUserSign] = useState();

  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/Song"><Song setUserSign={setUserSign} userSign={userSign} component={Song}/></Route>
        <Route exact path="/"><Home setUserSign={setUserSign} component={Home}/></Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
