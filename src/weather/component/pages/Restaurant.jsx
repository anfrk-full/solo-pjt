import { useLocation } from "react-router-dom";
import React from "react";

function Restaurant() {
    const location = useLocation();
    const selectedlocal = location.state.selectedlocal;

    return (
        <div class='container'>
            <h1>{selectedlocal}</h1>
        </div>
    );
}

export default Restaurant;