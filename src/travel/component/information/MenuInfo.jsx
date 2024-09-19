import React from "react";

function MenuInfo(props) {
    return(
        <div class='card' style={{width : '100%', height : '100%'}}>
            <img src={`${props.food.img}`} class='card-img-top' alt=''/>
            <div class='card-body'>
                <h5 class='card-title'>{props.food.name}</h5>
                <p class='card-text'>{props.food.content}</p>
                <p class='card-text'>{props.food.price}</p>
            </div>
        </div>
    );
}

export default MenuInfo;