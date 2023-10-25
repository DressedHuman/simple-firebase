import { NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
    return (
        <div style={{display: "flex", gap: "28px", justifyContent: "space-between", alignItems: "center", fontSize: "32px", fontWeight: "bold", margin: "28px"}}>
            <NavLink className={({isActive, isPending}) => isActive ? "active" : isPending ? "pending" : "pending"} to={'/'}>Home</NavLink>
            <NavLink className={({isActive, isPending}) => isActive ? "active" : isPending ? "pending" : "pending"} to={'/login'}>Login</NavLink>
        </div>
    );
};

export default Header;