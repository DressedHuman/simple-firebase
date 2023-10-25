import { useContext } from "react";
import { userStateContext } from "../../layout/Main";

const Home = () => {
    const { user, handleSignOut } = useContext(userStateContext);

    return (
        <div>
            { user ?
                <div>
                <img src={user.user.photoURL} alt="" />
                <h2>Welcome, <span style={{color: "green"}}>{user.user.displayName}</span></h2>
                {user.user.email && <p>Email: <i><small>{user.user.email}</small></i></p>}
                <br />
                <button className="button logout" onClick={handleSignOut}>Log Out</button>
            </div> :
                <h2>This is home!</h2>
            }
        </div>
    );
};

export default Home;