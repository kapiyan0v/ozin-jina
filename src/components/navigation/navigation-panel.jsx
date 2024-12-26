import './style.css'
import {navItems} from "../../shared/nav-items";
import {Link} from "react-router";
import {useState} from "react";

export const NavigationPanel = () => {
    const [activeIcon, setActiveIcon] = useState("comfort")

    const handleIconClick = (iconName) => {
        setActiveIcon(iconName)
    }

    return(
        <div className='nav'>
            {navItems.map((item) => (
                <Link className='nav-item' to={item.path} onClick={() => handleIconClick(item.path)}>
                    <img src={item.path === activeIcon ? item.iconActive : item.icon} alt="icon"/>
                    <p>{item.label}</p>
                </Link>
            ))}
        </div>
    )
}
