import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import TouristInfo from "../information/TouristInfo";
import axios from "axios";

function Tourist(props) {

    const location = useLocation();
    const selectedlocal = location.state.selectedlocal;

    const [tour, setTour] = useState([]);

    useEffect(() => {
        const getTourist = async() => {
            try{
                const response = await axios.get(`http://localhost:8000/tourist?local=${selectedlocal}`);
                console.log("response data local, " , response.data);
                setTour(response.data);
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
                        tour.map((tourist) => {
                            return (
                                <div class='col-md-4 mb-4' >
                                    <TouristInfo tour={tourist} key={tourist.id}/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Tourist;