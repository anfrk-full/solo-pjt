import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useLogin } from "../context/LoginContext";

function BoardEditPage() {
    const {id} = useParams();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const selectedlocal = location.state.selectedlocal;

    useEffect( () => {
        patchBoard();
    }, [])

    const patchBoard = async() => {
        try {
            const response = await axios.get(`http://localhost:8001/board/view/${id}`);
            console.log("debug BoardEditPage getInfo response data , " , response.data);
            setTitle(response.data.title);
            setContent(response.data.content);
        } catch (err) {
            console.log(err);
        }
    }

    const titleHandler = (event) => {
        setTitle(event.target.value);
    }

    const contentHandler = (event) => {
        setContent(event.target.value)
    }

    const cancelHandler = () => {
        alert('글 수정을 취소합니다');
        navigate('/board' , {state : {selectedlocal}});
    }

    const editHandler = async() => {
        try {
            const response = await axios.patch(`http://localhost:8001/board/update/${id}`, {
                date : Date.now(),
                title : title,
                content : content
            });
            console.log("debug >>> signUp post response , " , response.data);
            alert('수정이 완료되었습니다.');
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
                    <input type="text" class="form-control" onChange={titleHandler} value={title}/>
                </div>
                <div class="mb-3">
                    <h4>내용</h4>
                    <textarea class="form-control" onChange={contentHandler} value={content}/>
                </div>

                <div className='d-flex justify-content-end mt-3'>
                    <button className='btn btn-primary me-2'
                    onClick={editHandler}>
                        글 수정하기
                    </button>
                    <button className='btn btn-danger' onClick={cancelHandler}>
                        글 수정취소
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BoardEditPage;