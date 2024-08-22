import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import BoardList from "../list/BoardList";
import axios from "axios";

function BoardPage() {

    const location = useLocation();
    const selectedlocal = location.state.selectedlocal;

    const [board, setBoard] = useState([]);

    useEffect(() => {
        const getTourist = async() => {
            try{
                const response = await axios.get(`http://localhost:8000/board?local=${selectedlocal}`);
                console.log("response data local, " , response.data);
                setBoard(response.data);
            } catch (err) {
                console.log("get err , " , err);
            }
        }
        getTourist();
    }, [selectedlocal])

    return (
        <div class='container'>
            <div class='row'>
                <h1>{selectedlocal}</h1>
                <button class='btn btn-primary'>글 작성하기</button>
            </div>
            <div className="form-control">
                    {board.length > 0 ?(
                    board.map((board) => {
                        return (
                            <div>
                                <BoardList board={board} key={board.id}/>
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