import React from "react";
import { useNavigate } from "react-router-dom";

function TouristInfo(props) {

    const navigate = useNavigate();

    const format = (text) => {
        return text.replace(/\n/g, '<br />');
    }

    const moveHandler = () => {
        navigate(`/restaurant/${props.tour.id}`, )
    }

    return (
        <div className="mb-3" style={{ width: '100%', height: '100%' }}>
            <div class="row g-0">
                <div class="col-md-4">
                    <img src={props.tour.image} className="card-img-left img-fluid" alt={props.tour.title} />
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 className="btn btn-success" onClick={moveHandler}>{props.tour.title}</h5>
                        <p className="card-text">
                            {props.tour.location}
                        </p>
                        <a className="card-text" href={`${props.tour.link}`}>
                            {props.tour.link}
                        </a>
                        <div class="form-control">
                            이용시간 : <span dangerouslySetInnerHTML={{ __html: format(props.tour.time) }} />
                            <br/>
                            관람료 : {props.tour.fee}
                        </div>
                        <br/>
                        <p className="card-text">
                            {props.tour.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TouristInfo;
