import React from "react";

function TouristInfo(props) {
    return (
        <div class='card' style={{width : '100%', height : '100%'}}>
            <img src={`${props.tour.img}`} class='card-img-top' alt=''/>
            <div class='card-body'>
                <h5 class='card-title'>{props.tour.name}</h5>
                <p class='card-text'>{props.tour.content}</p>
            </div>
        </div>
    );
}

export default TouristInfo;