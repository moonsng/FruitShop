import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Nav,Navbar,NavDropdown} from 'react-bootstrap';
import {Row, Col} from 'react-bootstrap';
import { useState } from 'react';

import data from './data.js';

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
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
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
    <div className='main-bg'></div>
<List fruits = {fruits} />
     <Container>
        <Row>
          {fruits.map((fruit, index) => (
            <Col key={index} md={4}>
              <img src={fruit.image} alt={fruit.title} width="80%" />
              <h4>{fruit.title}</h4>
              <p>{fruit.price}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

function List({ fruits }) {
  return null;
}
  
export default App;
