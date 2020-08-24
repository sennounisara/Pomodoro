import React from 'react';
import './App.css';
import {Container, Form, Navbar} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {About} from './About';
import {Setting} from './Setting';
class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            color: 'rgb(240,111,174)',
            block:'rgb(250,125,183)',
            addTask : 'rgb(206,95,149)',
            minute : 25,
            second : '00',
            isStart: true
        };

        this.startBreak= this.startBreak.bind(this);
        this.pomodoro = this.pomodoro.bind(this);
        this.longBreak = this.longBreak.bind(this);
        this.start= this.start.bind(this);
    }
    start(){
        this.setState(state => ({
            isStart: !state.isStart
        }));
        if(this.state.isStart)
        this.timerID = setInterval(
            () => this.startT(),
            1000
        );
        else clearInterval(this.timerID);
    }
    startT(){
        if(!'00'.localeCompare(this.state.second)){
            if(this.state.minute < 10){
                this.setState(state => ({
                    minute: '0'+state.minute--,
                    second : 59
                }));
            }else
            this.setState(state => ({
                minute: state.minute--,
                second : 59
            }));
        }else{
            if(this.state.second <= 10){
                this.setState(state => ({
                    second: '0'+state.second--
                }));
            }else{
                this.setState(state => ({
                    second: state.second--
                }));
            }
        }
    }
    startBreak() {
        this.setState(state => ({
            color: 'rgb(76, 166, 169)',
            block :'rgb(85,185,188)',
            addTask : 'rgb(64,140,143)',
            minute : '05',
            second : '00'
        }));
    }
    longBreak() {
        this.setState(state => ({
            color: 'rgb(73, 143, 193)',
            block :'rgb(80,158,214)',
            addTask : 'rgb(66,130,175)',
            minute : 15,
            second : '00'
        }));
    }
    pomodoro(){
        this.setState(state => ({
            color: 'rgb(240,111,174)',
            block:'rgb(250,125,183)',
            addTask : 'rgb(206,95,149)',
            minute : 25,
            second : '00'
        }));
    }
    render() {
        return (
            <div style={{backgroundColor : this.state.color}}  className="page">
                <Navbar style={{backgroundColor : this.state.color}} variant="dark" className='shadow-lg'>
                    <Container>

                        <Navbar.Brand href="#home">Pomodoro</Navbar.Brand>
                        <Form inline>
                            <Setting/>
                            <About/>
                        </Form>
                    </Container>
                </Navbar>

                <div className="App" style={{backgroundColor : this.state.color}}>
                    <Container>
                        <Row>
                            <Col  lg={3}/>
                            <Col  lg={6}>
                                <div className="block" style={{backgroundColor : this.state.block}}>
                                    <Button style={{backgroundColor : this.state.block,
                                        borderColor: this.state.block,marginRight: 5}} size="sm" onClick={this.pomodoro}>Pomodoro</Button>
                                    <Button
                                        style={{backgroundColor : this.state.block,
                                            borderColor: this.state.block ,marginRight: 5}} size="sm" onClick={this.startBreak}>Short Break</Button>
                                    <Button style={{backgroundColor : this.state.block,
                                        borderColor: this.state.block}}  size="sm" onClick={this.longBreak}>Long Break</Button>
                                    <p className="timer">{this.state.minute}:{this.state.second}</p>
                                    <Button onClick={this.start} style={{backgroundColor:'#f8f8f8', color:this.state.block, width:150, borderColor:'white'}} size="lg">
                                        <b>{this.state.isStart ? 'START' : 'STOP'}</b>
                                    </Button>
                                </div>


                                <h6>Time to work!</h6>
                                <h4 className="task">Task </h4>
                                <hr className="bar"/>
                                <Button
                                    Button style={{backgroundColor:this.state.addTask,
                                    borderColor: '#bebebe', borderStyle:'dashed'}} size="lg" block>
                                    Add Task
                                </Button>
                            </Col>
                            <Col  lg={3}/></Row>
                    </Container>
                </div>
            </div>
        );
    }
}

export default App;
