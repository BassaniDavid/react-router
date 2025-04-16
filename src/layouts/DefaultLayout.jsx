import { Outlet, NavLink } from "react-router-dom";


export default function DefaultLayout() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Homepage</NavLink>
                    </li>
                    <li>
                        <NavLink to="/posts">Post</NavLink>
                    </li>
                    <li>
                        <NavLink to="/chi-siamo">Chi siamo</NavLink>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>


    )
}