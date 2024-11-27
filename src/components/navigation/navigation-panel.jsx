import './style.css'
import {navItems} from "../../shared/nav-items";
import {Link} from "react-router";

export const NavigationPanel = () => {
    return(
        <div className='nav'>
            {navItems.map((item) => (
                <Link className='nav-item' to={item.path}>
                    <img src={item.icon} alt="icon"/>
                    <p>{item.label}</p>
                </Link>
            ))}
        </div>
    )
}
