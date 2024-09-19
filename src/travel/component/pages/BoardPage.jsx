import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import BoardList from "../list/BoardList";
import axios from "axios";

function BoardPage() {

    const location = useLocation();
    const navigate = useNavigate();
    const selectedlocal = location.state.selectedlocal;

    const [board, setBoard] = useState([]);

    useEffect(() => {
        const getBoardList = async() => {
            try{
                console.log("selectedLocal = " , selectedlocal);
                const response = await axios.get(`http://localhost:8001/board/list/${selectedlocal}`);
                console.log("response data local, " , response.data);
                setBoard(response.data);
            } catch (err) {
                console.log("get err , " , err);
            }
        }
        getBoardList();
    }, [selectedlocal])

    return (
        <div class='container'>
            <div class='row'>
                <h1>게시판</h1>
                <button class='btn btn-primary'
                        onClick={() => navigate('/board-write' , {state : {selectedlocal}})}>
                    글 작성하기
                </button>
            </div>
            <div>
                {board.length > 0 ?(
                    board.map((board) => {
                        return (
                            <div>
                                <BoardList board={board} key={board.id} local={selectedlocal} writer={board.writer}/>
                            </div>
                        )
                    })
                    ) : (
                    <div>
                        <h2>게시판에 글이 없습니다.</h2>
                    </div>
                    )
                }
            </div>
        </div>
    );
}

export default BoardPage;