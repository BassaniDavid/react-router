import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <nav>
            <NavLink to="/">Homepage</NavLink>
            <NavLink to="/posts">Post</NavLink>
            <NavLink to="/chi-siamo">Chi siamo</NavLink>
        </nav>
    )
}