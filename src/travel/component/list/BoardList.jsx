import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../context/LoginContext";

function BoardList(props) {
    const date = new Date(props.board.date).toLocaleString();
    const selectedlocal = props.local;
    const navigate = useNavigate();
    const { userId } = useLogin();

    const moveHandler = (id) => {
        navigate(`/board-view/${id}`, { state : {selectedlocal}});
    }

    const editHandler = (id, event) => {
        event.stopPropagation();
        navigate(`/board-edit/${id}`, { state : {selectedlocal}});
        
    }

    const deleteHandler = async(id, event) => {
        event.stopPropagation();
        try{
            await axios.delete(`http://localhost:8000/board/${id}`);
            alert('삭제되었습니다');
            navigate('/tourist', { state : {selectedlocal}});
        } catch (err) {
            console.log(err);
        }
    }

    const isSame = props.board.writer === userId;

    return (
        <div class='container d-flex align-items-center justify-content-between form-control mb-1'
            onClick={() => moveHandler(props.board.id)}>
            <h4 class='mb-0'>{props.board.id}</h4>
            <h4 class='mb-0'>{props.board.title}</h4>
            <h4 class='mb-0'>{date}</h4>
            <div>
                <button class='btn btn-secondary' type='button'
                        onClick={(event) => editHandler(props.board.id, event)}
                        disabled={!isSame}>수정</button>
                &nbsp;
                <button class='btn btn-danger' type='button'
                        onClick={(event) => deleteHandler(props.board.id, event)}
                        disabled={!isSame}>삭제</button>
            </div>
        </div>
    );
}

export default BoardList;