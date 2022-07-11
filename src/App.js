import React from 'react'
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Newsfeed from "./components/Newsfeed/Newsfeed";
import Widjet from "./components/Widget/Widget"
function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <Sidebar />
      </div>

      <div className='newsfeed'>
        <Newsfeed />
      </div>

      <div className='widget'>
        <Widjet />
      </div>
    </div>
  );
}

export default App;
