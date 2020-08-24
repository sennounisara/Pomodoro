import React, {useState} from "react";
import {Button, Modal} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
export function Setting () {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button variant="outline-light" style={{marginRight:5}} onClick={handleShow}>Setting</Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Timer Setting</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h5>Timer (minute)</h5>
                    <Row>
                        <Col>
                            Pomodoro
                            <Button variant="light" size="md" block>0</Button>
                        </Col>
                        <Col>short Break<Button variant="light" size="md" block>0</Button></Col>
                        <Col>Long Break<Button variant="light" size="md" block>0</Button></Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        SAVE
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
