import React from 'react'
import { userService } from '../../services/user.service';

export const LogInPage = () => {
    
    const handleLogin = async () => {
        const response: any = await userService.login();
        console.log(response);
    }

    return (
        <>
            <div>
                <button onClick={() => handleLogin()}>Login</button>
            </div>
        </>
    )
}

