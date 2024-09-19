import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RestaurantInfo from "../information/RestaurantInfo";
import axios from "axios";

function Restaurant() {

    const {id} = useParams();
    const [restaurant, setRestaurant] = useState([]);

    //.json에서 데이터 가져오기
    useEffect(() => {
        const getTourist = async() => {
            try {
                // json-server로부터 tourist 데이터를 가져옴
                const response = await axios.get(`http://localhost:8000/restaurant?tourid=${id}`);
                console.log("response data: ", response.data);
                setRestaurant(response.data);
            } catch (err) {
                console.log("Error fetching tourist data: ", err);
            }
        };
        getTourist();
    }, []); // Dependency array는 비워두어 한번만 호출되게 함.

    return(
        <div className="container">
            <h1>음식점 목록</h1>
            <div className="form-control">
                <div >
                    {
                        restaurant.map((restaurant) => (
                            <div key={restaurant.title}>
                                <RestaurantInfo restaurant={restaurant} />
                                <br/>
                                <hr/>
                                <br/>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Restaurant;