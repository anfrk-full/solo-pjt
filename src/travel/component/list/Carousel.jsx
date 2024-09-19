import React, { useEffect } from "react";

function Carousel(props) {

    useEffect(() => {
        console.log("Carousel debug >>>> " , props.img);
    },[]) 

    return (
        <div id="food" className="carousel slide carousel-fade">
            <div className="carousel-inner">
                {
                props.img.map((image, index) => (
                    <div
                        key={index}
                        className={`carousel-item ${index == 0 ? 'active' : ''}`}>
                        <img src={image} className="d-block w-100" alt={`Slide ${index + 1}`} />
                    </div>
                ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#food" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#food" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default Carousel;
