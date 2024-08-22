import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Header() {

    const navigate = useNavigate();
    const [selectedlocal, setSelectedlocal] = useState();
    const selectHandler = (event) => {
        setSelectedlocal(event.target.value);
    }

    return (
        <header>
            <div class='container'>
                <form class='form-control'>
                    <select class='form-select' value={selectedlocal} onChange={selectHandler}>
                        <option selected>Seoul</option>
                        <option value='Gwangju'>Gwangju</option>
                        <option value='Jeonju'>Jeonju</option>
                        <option value='Hwasun'>Hwasun</option>
                    </select>
                    <nav class='navbar'>
                        <form>
                            <button class='btn btn-outline-secondary me-2' 
                                    type='button'
                                    onClick={() => navigate('tourist', {state : {selectedlocal}})}>
                                관광지
                            </button>
                            <button class='btn btn-outline-secondary me-2' 
                                    type='button'
                                    onClick={() => navigate('restaurant', {state : {selectedlocal}})}>
                                맛집
                            </button>
                            <button class='btn btn-outline-secondary me-2' 
                                    type='button'
                                    onClick={() => navigate('board', {state : {selectedlocal}})}>
                                게시판
                            </button>
                        </form>
                    </nav>
                </form>
            </div>
            <nav>

            </nav>
        </header>
    )
}

export default Header;