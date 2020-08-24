import React, {useState} from "react";
import {Button, Modal} from "react-bootstrap";

export function About (){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
        return (
            <>
                <Button variant="outline-light" onClick={handleShow}>About</Button>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Online Pomodoro Timer to boost your productivity</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h3>What is Pomodoro Technique?</h3>
                        <p>The Pomodoro Technique is created by Francesco Cirillo for a more productive
                        way to work and study. The technique uses a timer to break down work into intervals,
                        traditionally 25 minutes in length, separated by short breaks. Each interval is known as a pomodoro,
                        from the Italian word for 'tomato', after the tomato-shaped kitchen timer that Cirillo
                            used as a university student. - <b>Wikipedia</b>.</p>
                        <br/>
                        <h3>How to use the Pomodoro Timer?</h3>
                        <ul>
                            <li>Add tasks to work on today</li>
                            <li>Set estimate pomodoros (1 = 25min of work) for each tasks</li>
                            <li>Start timer and focus on the task for 25 minutes</li>
                            <li>Take a break for 5 minutes </li>
                        </ul>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
}
