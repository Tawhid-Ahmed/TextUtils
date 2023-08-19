import "./App.css";
import Alert from "./Components/Alert";
import About from './Components/About';
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React, { useState } from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#343a40";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtil Dark mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtil Light mode";
    }
  };
  return (
    <>
    <Router>
      <Navbar
        title="TextUtils"
        About="About TextUtils"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert Alert={alert} />
      <div className="container my-3">
         
      <Routes>
          <Route exact path="/" element={<TextForm
          header="Enter the text for analysis"
          mode={mode}
          showAlert={showAlert}
        />}>
          
          </Route>
          <Route exact path="/about" element={<About />}>
            
          </Route>
        </Routes>



       
        {/* <About/> */}
      </div>
      </Router>
    </>
  );
}

export default App;
