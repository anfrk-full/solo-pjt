import { createContext, useContext, useState } from 'react';

// Context 생성
const LoginContext = createContext();

export function useLogin() {
    return useContext(LoginContext);
}

export function LoginProvider({ children}) {
    const [isLogin, setIsLogin] = useState(false);
    const [userId, setUserId] = useState('');

    const login = (id) => {
        setIsLogin(true);
        setUserId(id);
    };
    const logout = () => {
        setIsLogin(false);
        setUserId('');
    };

    return (
        <LoginContext.Provider value={{isLogin, userId, login, logout}}>
            {children}
        </LoginContext.Provider>
    );
}
