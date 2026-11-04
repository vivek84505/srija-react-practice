import { NavLink } from "react-router-dom";

function Sidebar(){
    return(
        <aside className="sidebar">
            <h5>Admin Dashboard</h5>

            <ul>
                <li>
                    <NavLink to="/">
                        Dashboard
                    </NavLink>
                </li>


                <li>
                    <NavLink to="/refs">
                        Ref Demo
                    </NavLink>
                </li>
            </ul>

        </aside>
    )
}

export default Sidebar;