import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Nav,Navbar,NavDropdown} from 'react-bootstrap';
import {Row, Col} from 'react-bootstrap';
import { useState } from 'react';

import data from './data.js';
import {Routes, Route, Link} from 'react-router-dom';

function App() {

  let [fruits] = useState(data)

  return (
    <div className="App">
      
       <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">프루티과수원</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Link to="/">home</Link>
    <Link to="/detail">detail</Link>
            {/* <Nav.Link href="#home">Home</Nav.Link> */}
            {/* <Nav.Link href="#link">Link</Nav.Link> */}
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <Routes>
      <Route path = "/" element={
        <>
         <div className='main-bg'></div>
         <div className='containter'>
           <div>{fruits.map((a,i)=>{
             return <Card fruits={fruits[i]} i={i}></Card>
           })}
           </div>
         </div>
         </>
      }/>
        <Route path = "/detail" element={<div>상세페이지입니다.</div>}/> 
      </Routes>
    </div>
  );
}

function Card(props){
  return (
    <div className="col-md-4">
    <h4>{props.fruits.title }</h4>
    <p>{ props.fruits.price }</p>
    </div>
  )
}



export default App;
