import './css/App.css';
import React from "react";
import Container from '@mui/material/Container';
import Header from './js/Header';
import Feature from './js/Feature';
import Testimonials from './js/Testimonials';
import Aboutus from './js/Aboutus';

function App() {
  return (

    <Container maxWidth="md">
      <Header/>
      <Feature/>
      <Testimonials/>
      <Aboutus/>
    </Container>

  );
}

export default App;
