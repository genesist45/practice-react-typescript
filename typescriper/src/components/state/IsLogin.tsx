import { useState } from 'react';

function IsLogin() {
    const [isLogin, setIsLogin] = useState(false);

    const handleLogin = () => {
        setIsLogin(false);
    };
   
    const handleLogOut = () => {
        setIsLogin(true);
    };
   
    return (
        <>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogOut}>Logout</button>
            <p>{isLogin ? "Logout" : "Login"}</p>
        </>
    );
}

export default IsLogin;
