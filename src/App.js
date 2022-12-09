import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = ()=>{
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark Mode Enabled","success");
      document.title = 'Textutils - Dark Mode';
      }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Enabled","success");
      document.title = 'Textutils - Light Mode';
    }
  }
  return (
    <Router>
          <Navbar brand_name="Learning React" about="About Us" toggleMode={toggleMode} mode={mode}/>
          <Alert alert={alert}/>
          <Routes>
            <Route exact path='/textutils/' element={<TextForm showAlert={showAlert} alert={alert} heading="Enter the text to analze" mode={mode} />} />
            <Route exact path='/textutils/about' element={<About mode={mode}/>} />
          </Routes>
    </Router>
  );
}

export default App;
