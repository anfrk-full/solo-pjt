import React from "react";
import { useNavigate } from "react-router-dom";

function BoardList(props) {
    const date = new Date(props.board.date).toLocaleString();

    const navigate = useNavigate();

    const moveHandler = (id) => {
        navigate(`/board-view/${id}`);
    }

    const editHandler = (event) => {
        event.stopPropagation();
        //수정 로직
    }

    const deleteHandler = (event) => {
        event.stopPropagation();
        //삭제 로직
    }

    return (
        <div class='container d-flex align-items-center justify-content-between form-control mb-1'
            onClick={() => moveHandler(props.board.id)}>
            <h4 class='mb-0'>{props.board.id}</h4>
            <h4 class='mb-0'>{props.board.title}</h4>
            <h4 class='mb-0'>{date}</h4>
            <div>
                <button class='btn btn-secondary' type='button'
                        onClick={editHandler}>수정</button>
                <button class='btn btn-danger' type='button'
                        onClick={deleteHandler}>삭제</button>
            </div>
        </div>
    );
}

export default BoardList;