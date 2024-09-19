import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MenuInfo from "../information/MenuInfo";
import Carousel from "../list/Carousel";


function DetailRestaurant() {

    const [food, setFood] = useState([]);
    const [img, setImg] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        if(img.length > 0) {
            console.log("response data img, ", img);
        }
        getTourist();
        getImage();
    }, []);

    const getTourist = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/restaurantdetail?restaurantId=${id}`);
            console.log("response data local, ", response.data);
            setFood(response.data);
        } catch (err) {
            console.log("get err , ", err);
        }
    }
    const getImage = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/restaurantImage?id=${id}`);
            console.log("response data response.img, ", response.data[0].img);
            setImg(response.data[0].img);
        } catch (err) {
            console.log("get err , ", err);
        }
    }

    return (
        <div className='container'>
            <h1>음식점 상세 정보</h1>
            <div className='form-control'>
                <Carousel img={img}/>
                <br />
                <hr />
                <br />
                <div className='row'>
                    {
                        food.map((food) => {
                            return (
                                <div className='col-md-4 mb-4' key={food.id}>
                                    <MenuInfo food={food} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default DetailRestaurant;
