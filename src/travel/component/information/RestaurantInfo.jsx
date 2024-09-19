import React from "react";
import { useNavigate } from "react-router-dom";

function RestaurantInfo(props) {

    const navigate = useNavigate();

    const moveHandler = () => {
        navigate(`/restaurant/view/${props.restaurant.id}`)
    }

    return (
        <div className="row g-0">
            <div className="col-md-4">
                <img src={props.restaurant.img} className="card-img-left img-fluid" alt={props.restaurant.title} />
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="btn btn-success" onClick={moveHandler}>{props.restaurant.title}</h5>
                    <div className="form-control">
                        주소 : {props.restaurant.location}
                        <br/>
                        전화번호 : {props.restaurant.phone}
                    </div>
                    <br/>
                    <p className="card-text">
                        {props.restaurant.description}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default RestaurantInfo;