import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from 'firebase/auth'
import './Login.css'
import { app } from '../../firebase/firebase.init';
import { useState } from 'react';

const Login = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const [user, setUser] = useState(null);

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const loggedUser = result.user;
                setUser(loggedUser);
            })
            .catch(error => {
                console.log("Error: ", error.message);
            })
    }


    const handleGoogleSignOut = () => {
        signOut(auth)
        .then(() =>{
            setUser(null);
        })
        .catch(error=> console.log("Error : ", error.message))
    }


    return (
        <div>
            {
                user ? <div>
                    <img src={user.photoURL} alt="" />
                    <h2>Welcome, {user.displayName}</h2>
                    <p>Email: <i><small>{user.email}</small></i></p>
                    <br />
                    <button className="button" onClick={handleGoogleSignOut}>Log Out</button>
                </div> : <button className="button" onClick={handleGoogleSignIn}>Google Login</button>
            }
        </div>
    );
};

export default Login;