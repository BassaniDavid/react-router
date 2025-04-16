// importo gli elementi da react-router per utilizzare NavLink(Link con classe active ) e outlet
import { Outlet, NavLink } from "react-router-dom";


export default function DefaultLayout() {
    return (
        <>
            {/* navbar */}
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

            {/* elemento che verrà sostituito da ciò che è presente nelle varie pagine */}
            <Outlet />
        </>


    )
}