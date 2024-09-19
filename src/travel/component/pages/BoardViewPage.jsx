import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function BoardViewPage(props) {

    const {id} = useParams();
    const [title, setTitle] = useState();
    const [content, setContent] = useState();
    const [writer , setWriter] = useState();
    const [writeDate, setWriteDate] = useState();
    const [viewCount, setViewCount] = useState();
    const location = useLocation();
    const selectedlocal = location.state.selectedlocal;
    const navigate = useNavigate();

    useEffect(() => {
        const getInfo = async() => {
            try {
                const response = await axios.get(`http://localhost:8001/board/view/${id}`);
                console.log("debug BoardViewPage getInfo response data , " , response.data);
                setTitle(response.data.title);
                setContent(response.data.content);
                setWriter(response.data.writer);
                setWriteDate(new Date(response.data.date).toLocaleString());
                setViewCount(response.data.viewcount);
            } catch (err) {
                console.log("BoardViewPage getInfo err , " , err);
            }
        }
        getInfo();
    }, [])

    const backHandler = () => {
        navigate('/board' , {state : {selectedlocal}});
    }

    return (
        <div class='container'>
            <div class='form-control'>
                <h4>제목  <span class="badge text-bg-primary">조회수 {viewCount}</span></h4> 
                <div class='form-control'>
                    <h3>{title}</h3>
                </div>
                
                <h4>작성자</h4>
                <div class='form-control'>
                    <h4>{writer}</h4>
                </div>

                <h4>작성 일자</h4>
                <div class='form-control'>
                    <h4>{writeDate}</h4>
                </div>

                <h4>내용</h4>
                <div class='form-control' style={{height : 300}}>
                    <h4>{content}</h4>
                </div>
                
                <div class="d-flex justify-content-end mt-3">
                
                &nbsp;&nbsp;&nbsp;
                <button class='btn btn-secondary' type='button'
                        onClick={backHandler}>
                    뒤로 가기
                </button>
                </div>
            </div>
        </div>
    );
}

export default BoardViewPage;