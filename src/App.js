import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

//Components
import MainPage from './pages/MainPage';
function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Router basename="/AlexFront">
         <Route path="/" component={MainPage} />
         <Route />
         <Route />
       </Router>
      </header>
    </div>
  );
}

export default App;
