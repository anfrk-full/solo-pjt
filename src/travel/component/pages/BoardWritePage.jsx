import axios from "axios";
import React from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useLogin } from "../context/LoginContext";

function BoardWritePage() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const selectedlocal = location.state.selectedlocal;
    const { userId } = useLogin();

    const titleHandler = (event) => {
        setTitle(event.target.value);
    }

    const contentHandler = (event) => {
        setContent(event.target.value)
    }

    const cancelHandler = () => {
        alert('글 작성을 취소합니다');
        navigate('/board' , {state : {selectedlocal}});
    }

    const createHandler = async() => {
        const data = {
            title : title,
            content : content,
            writer : userId,
            local : selectedlocal,
            date : Date.now()
        }

        try {
            const response = await axios.post(`http://localhost:8001/board/save`, data);
            console.log("debug >>> signUp post response , " , response.data);
            alert('작성이 완료되었습니다.');
            navigate('/board' , {state : {selectedlocal}});
        } catch (err) {
            console.log("debug >>> axios post err , " , err);
        }
    }

    return(
        <div class='container'>
            <div class='form-control'>
                <div class="mb-3">
                    <h4>제목</h4>
                    <input type="text" class="form-control" onChange={titleHandler}/>
                </div>
                <div class="mb-3">
                    <h4>내용</h4>
                    <textarea class="form-control" onChange={contentHandler}/>
                </div>

                <div className='d-flex justify-content-end mt-3'>
                    <button className='btn btn-primary me-2'
                    onClick={createHandler}>
                        글 작성하기
                    </button>
                    <button className='btn btn-danger' onClick={cancelHandler}>
                        글 작성취소
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BoardWritePage;