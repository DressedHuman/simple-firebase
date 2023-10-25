import { useContext, useEffect } from 'react';
import './Login.css'
import { userStateContext } from '../../layout/Main';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const { user, handleSignIn, providerGoogle, providerGitHub } = useContext(userStateContext);
    const navigate = useNavigate();

    useEffect(()=>{
        if(user){
            navigate('/');
        }
    },[user, navigate])


    return (
        <div>
            {
                user ? 
                <h3 id='redirect'>You&apos;re logged in! Redirecting to homepage!</h3> :
                <div style={{display: 'flex', gap: "21px", justifyContent: 'center', alignItems: 'center', margin: "0 auto"}}>
                    <button className="button login" onClick={() => handleSignIn(providerGoogle)}>Google Login</button>
                    <button className="button login" onClick={() => handleSignIn(providerGitHub)}>GitHub Login</button>
                </div>
            }
        </div>
    );
};

export default Login;