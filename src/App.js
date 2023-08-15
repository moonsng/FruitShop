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

    <div className='container'>
      <div className='row'>
        <div className='col-md-4'>
        <img src="https://cdn.imweb.me/upload/S202104263584dd527ccd5/ca1e00d7b4648.jpg" width={"80%"}/>
        <h4>{fruits[0].title}</h4>
        <p>{fruits[0].price}</p>
        </div>
       
        <div className='col-md-4'>
        <img src="https://kormedi.com/wp-content/uploads/2023/06/gettyimages-1400556472.jpg" width={"80%"}/>
        <h4>수박</h4>
        <p>씨가 별로 없고 과육이 단단합니다.</p>
        </div>
        <div className='col-md-4'>
        <img src="https://www.ekr.or.kr/Kkrpub/webzine/2022/06/img/002season/season-1.jpg" width={"80%"}/>
        <h4>참외</h4>
        <p>참 외롭다.</p>
        </div>
      </div>
    </div>
    
    </div>
  );
}

export default App;
