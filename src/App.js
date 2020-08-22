import React from 'react';
import './App.css';
import {Container, Form, FormControl, InputGroup, Navbar} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function App() {
  return (
      <div>

          <Navbar style={{backgroundColor : '#ff4c20'}} variant="dark">
              <Container>

              <Navbar.Brand href="#home">Pomodoro</Navbar.Brand>
              <Form inline>
                  <Button variant="outline-light" style={{marginRight:5}}>Report</Button>
                  <Button variant="outline-light" style={{marginRight:5}}>Setting</Button>
                  <Button variant="outline-light">Login</Button>
              </Form>
              </Container>
          </Navbar>

          <div className="App">
            <Container>
                <Row>
                <Col  lg={3}/>
                <Col  lg={6}>
                <div className="block">
                    <Button style={{backgroundColor:'#ff8653',
                    borderColor: '#ff8653',marginRight: 5}} size="sm">Pomodoro</Button>
                    <Button
                        style={{backgroundColor:'#ff8653',
                            borderColor: '#ff8653',marginRight: 5}} size="sm">Short Break</Button>
                    <Button style={{backgroundColor:'#ff8653',
                        borderColor: '#ff8653'}}  size="sm">Long Break</Button>
                    <p className="timer">05:00</p>
                    <Button style={{backgroundColor:'#f8f8f8', color:'#ff8653', width:150, borderColor:'white'}} size="lg">
                        Start
                    </Button>
                </div>


            <h6>Time to work!</h6>
            <h4 className="task">Task </h4>
                <hr className="bar"/>
            <Button
                Button style={{backgroundColor:'#dc7648',
                borderColor: '#bebebe', borderStyle:'dashed'}} size="lg" block>
                Add Task
            </Button>
                </Col>
                <Col  lg={3}/></Row>
            </Container>
        </div>
          <Container>
          <h1>An online Pomodoro Timer to boost your productivity</h1>
          <h3>What is Pomofocus?</h3>
          <hr/>
          <p>
              Pomofocus is a customizable pomodoro timer that works
              on desktop & mobile browser. The aim of this app is
              to help you focus on any task you are working on,
              such as study, writing, or coding. This app is inspired
              by Pomodoro Technique which is a
              time management method developed by Francesco Cirillo.
          </p>
          </Container>
      </div>
  );
}

export default App;
