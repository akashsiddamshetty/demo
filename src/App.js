import './App.css';
import Container from '@mui/material/Container';
import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";

function App() {

  const [navbarOpen, setNavbarOpen] = useState(false)
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen)
  }

  return (

    <Container maxWidth="lg">
      <div className="header">

          <a href="/">
            <img src="https://i1.wp.com/www.writefromscratch.com/wp-content/uploads/2018/12/demo-logo.png?fit=539%2C244&ssl=1&w=640"></img>
          </a>
        
          <div className="navBar">
            <div className={`${navbarOpen ? "toggle__showMenu" : "menuNav"}`}>
              <a href="#">about</a>
              <a href="#">home</a>
              <a href="#">contacts</a>
            </div>
            <button className="toggle__button" onClick={handleToggle}>
              {navbarOpen ? (
                <MdClose style={{ color: "#fff", width: "20px", height: "20px" }} />
              ) : (
                <FiMenu style={{ color: "#7b7b7b", width: "20px", height: "20px" }} />
              )}
            </button>
          </div>
        </div>
    </Container>

  );
}

export default App;
