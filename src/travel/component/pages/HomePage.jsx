import axios from "axios";
import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function HomePage() {

    const [signId, setSignId] = useState('');
    const [signPwd, setSignPwd] = useState('');
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const signIdHandler = (event) => {
        setSignId(event.target.value);
    }

    const signPwdHandler = (event) => {
        setSignPwd(event.target.value);
    }

    const signUp = async() => {
        const data = {
            id : signId,
            password : signPwd,
            signDate : Date.now()
        }
        try{
            const responseData = await axios.get(`http://localhost:8000/userinfo?id=${data.id}`);

            if(responseData.data.length > 0) {
                alert('이미 존재하는 ID입니다 다른걸 입력해주세요.');
                setSignId('');
                setSignPwd('');
                
            } else {
                const response = await axios.post(`http://localhost:8000/userinfo`, data);
                console.log("debug >>> signUp post response , " , response.data);
                setSignId('');
                setSignPwd('');
                alert('회원가입이 완료되었습니다.');
                handleClose();
            } 
        } catch (err){
            console.log("debug >>> signUp post err , " , err);
        }
        
    }

    return(
        <div class='container' >
            <form class='form-control d-flex flex-column align-items-center'>
            <Form.Label htmlFor="userid">Id</Form.Label>
                    <Form.Control
                        type="text"
                        id="userid"
                        style={{width : '100%'}}
                        onChange={signIdHandler}
                    />
                    <Form.Label htmlFor="password">Password</Form.Label>
                    <Form.Control
                        type="password"
                        id="password"
                        style={{width : '100%'}}
                        onChange={signPwdHandler}
                    />
                <br/>
                <div class='row' style={{width : '100%'}}>
                    <Button variant="primary">
                        로그인
                    </Button>
                    <hr />
                    <hr />
                    <Button variant="primary" onClick={handleShow}>
                        회원가입
                    </Button>
                </div>
            </form>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Label htmlFor="userid">Id</Form.Label>
                    <Form.Control
                        type="text"
                        id="userid"
                    />
                    <Form.Label htmlFor="password">Password</Form.Label>
                    <Form.Control
                        type="password"
                        id="password"
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        닫기
                    </Button>
                    <Button variant="primary" onClick={signUp}>회원가입</Button>
                </Modal.Footer>
            </Modal>

        </div>

        
        
    )
}

export default HomePage;