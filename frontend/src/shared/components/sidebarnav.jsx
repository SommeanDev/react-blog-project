import { Link } from "react-router-dom"
function SideBarNav() {
    const menuItems = [
        { path: "Home", to: "/" },
        { path: "User List", to: "/users" },
        { path: "Login", to: "/login" },
    ];
    return (
        <div className="flex">
            sidebar
            <ul>
                {
                    menuItems.map(item => (
                        <li key={item.path}>
                            <Link to = {item.to}> {item.path} </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default SideBarNav;