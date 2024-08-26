import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function BoardViewPage(props) {

    const {id} = useParams();
    const [title, setTitle] = useState();
    const [content, setContent] = useState();
    const [writer , setWriter] = useState();
    const [writeDate, setWriteDate] = useState();

    useEffect(() => {
        const getInfo = async() => {
            try {
                const response = await axios.get(`http://localhost:8000/board?id=${id}`);
                console.log("debug BoardViewPage getInfo response data , " , response.data);
                setTitle(response.data[0].title);
                setContent(response.data[0].content);
                setWriter(response.data[0].writer);
                setWriteDate(new Date(response.data[0].date).toLocaleString());
            } catch (err) {
                console.log("BoardViewPage getInfo err , " , err);
            }
        }
        getInfo();
    }, [])

    return (
        <div class='container'>
            <div class='form-control'>
                <h4>제목</h4>
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
            </div>
        </div>
    );
}

export default BoardViewPage;