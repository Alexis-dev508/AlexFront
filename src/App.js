import logo from './logo.svg';
import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

//Components
import MainPage from './pages/MainPage';
//Styles
import './App.css';

//Responsive styles
import './components/styles/mobile.css';
import './components/styles/tablet.css';
import './components/styles/desktop.css';
import './components/styles/monitor.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Router basename="/AlexFront">
         <Route path="/" component={MainPage} />
         <Route path="/certificate-html" component="" />
         <Route />
       </Router>
      </header>
    </div>
  );
}

export default App;
