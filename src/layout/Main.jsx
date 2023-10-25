import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from 'firebase/auth'
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import { createContext, useState } from 'react';
import { app } from '../firebase/firebase.init';


export const userStateContext = createContext();


const Main = () => {
    const [user, setUser] = useState(null);
    const auth = getAuth(app);
    const providerGoogle = new GoogleAuthProvider();
    const providerGitHub = new GithubAuthProvider();

    // handle sign in with google
    const handleSignIn = (provider, providerName) => {
        signInWithPopup(auth, provider)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setUser({ user: loggedUser, provide: providerName});
            })
            .catch(error => {
                console.log("Error: ", error.message);
            })
    }

    // handle sign out
    const handleSignOut = () => {
        signOut(auth)
        .then(() =>{
            setUser(null);
        })
        .catch(error=> console.log("Error : ", error.message))
    }

    return (
        <div>
            <userStateContext.Provider value={{user, setUser, handleSignIn, handleSignOut, providerGoogle, providerGitHub}}>
                <Header />
                <Outlet />
            </userStateContext.Provider>
        </div>
    );
};

export default Main;