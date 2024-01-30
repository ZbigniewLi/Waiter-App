import React from 'react';
import Footer from './Components/Views/Footer'
import Header from './Components/Views/Header'
import Home from './Components/Pages/Home' 
import SingleTable from './Components/Pages/SingleTable'
import EditTable from './Components/Pages/EditTable'
import NotFound from './Components/Pages/NotFound'
import { Container } from 'react-bootstrap'
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom'

const App = () => {
  return (
    <div className="App">
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/table/:id" element={<EditTable />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Container>
  </div>
  );
}

export default App;
