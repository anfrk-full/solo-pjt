import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "./travel/component/context/LoginContext";

function Header() {

    const navigate = useNavigate();
    const [selectedlocal, setSelectedlocal] = useState();
    const {isLogin, logout} = useLogin();

    const selectHandler = (event) => {
        setSelectedlocal(event.target.value);
    }

    const logoutHandler = () => {
        logout();
        navigate('/');
    }

    return (
        <header>
            {isLogin && (
                <>
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
                                            {/*
                                            <button class='btn btn-outline-secondary me-2' 
                                                    type='button'
                                                    onClick={() => navigate('restaurant', {state : {selectedlocal}})}>
                                                맛집
                                            </button>
                                            */}
                                            <button class='btn btn-outline-secondary me-2' 
                                                    type='button'
                                                    onClick={() => navigate('board', {state : {selectedlocal}})}>
                                                게시판
                                            </button>
                                            <button class='btn btn-outline-danger' 
                                                    type='button'
                                                    onClick={logoutHandler}>
                                                로그아웃
                                            </button>
                                        
                                    
                                </form>
                            </nav>
                        </form>
                    </div>
                </>
            )}
        </header>
    )
}

export default Header;