import { useState } from "react";

const AuthPage = () => {
    
    const [isLogin, setisLogin] = useState(true);
    const [isForgot, setisForgot] = useState(false);

    return(

        <h1>Auth Page</h1>

    );
};

export { AuthPage };