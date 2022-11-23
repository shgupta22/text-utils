import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=> {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = ()=> {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode';
    }
  }

  return (
    <>
        {/* <Router> */}
          <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
          {/* <Navbar/> */}
          <Alert alert={alert}/>
          <div className="container my-3">
            {/* <Routes>
              <Route exact path="/about" element={<About/>}>
              </Route>
              <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>}>
              </Route>
            </Routes> */}
            <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
          </div>
        {/* </Router> */}
    </>
  );
}

export default App;
 