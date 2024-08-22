import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import RestaurantInfo from "./information/RestaurantInfo";
import axios from "axios";

function Restaurant() {
    const location = useLocation();
    const selectedlocal = location.state.selectedlocal;

    const [food, setFood] = useState([]);

    useEffect(() => {
        const getTourist = async() => {
            try{
                const response = await axios.get(`http://localhost:8000/restaurant?local=${selectedlocal}`);
                console.log("response data local, " , response.data);
                setFood(response.data);
            } catch (err) {
                console.log("get err , " , err);
            }
        }
        getTourist();
    }, [selectedlocal])

    return (
        <div class='container'>
            <h1>{selectedlocal}</h1>
            <div className="form-control">
                <div class='row'>
                    {
                        food.map((food) => {
                            return (
                                <div class='col-md-4 mb-4' >
                                    <RestaurantInfo food={food} key={food.id}/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Restaurant;