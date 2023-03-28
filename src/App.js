
  import './App.css';
  import About from './components/About';
  import Navbar from './components/Navbar';
  import TextForm from './components/TextForm';
  import React , { useState } from 'react';
  import Alert from './components/Alert';
  import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 import Error from './components/Error';


  function App() {
  const[darkMode, setDarkMode ] = useState('light');
  const[alert, setAlert] = useState(null);
  

  const showAlert = (message, type) =>{
    setAlert ({
      message : message,
      type : type,
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }


  const toggleDarkMode =() => {
    if(darkMode === 'light'){
      setDarkMode('dark')
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
      showAlert("Dark Mode Enabled" , 'success');
    }else{
      setDarkMode('light')
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light Mode Enabled" , 'success');
    }
  }

    return (
      <Router>
         <Navbar title = {"My-App-1"} darkMode={darkMode} toggleDarkMode={toggleDarkMode}  />
         <Alert alert={alert}/>
         
        <Routes>
        <Route exact path="/"  element={<TextForm  heading = {"Enter your text"} showAlert={showAlert}/>} />
         <Route exact path="/home"  element={<TextForm  heading = {"Enter your text"} showAlert={showAlert}/>} />
         <Route exact path="/about" element={  <About />} />
         <Route exact path="*" element={ <Error/>} />
             {/* <TextForm  heading = {"Enter your text"} showAlert={showAlert}/> */}
        </Routes>
      </Router>
    )
  }

  export default App;


