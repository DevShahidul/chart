import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { DarkModeSwitch } from "@theme/dark-switch";

export const NavBar = () => {
    const routes = [
        {
            text: 'Home',
            path: '/'
        },
        {
            text: 'Test',
            path: '/test'
        },
    ]
    return (
        <nav className="
            bg-slate-200
            dark:bg-slate-700
            dark:text-slate-200
            font-thin
            p-2
            space-x-2
            grid
            grid-cols-2
            items-center
        ">
            <div>
            {routes.map((route => (
                <NavButton 
                    key={route.path}
                    text={route.text}
                    path={route.path}
                />
            )))}
            </div>
            <div className="text-right">
                <DarkModeSwitch />
            </div>
            
        </nav>
    )
}

const NavButton = ({ text, path }) => {
    return (
        <Link to={path}>
            <button className="
                hover:text-slate-800
                hover:bg-slate-100
                dark:hover:text-slate-100
                dark:hover:bg-slate-600
                p-2
                rounded-lg
            ">
                {text}
            </button>
        </Link>        
    )
}
NavButton.propTypes = {
    text: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired
}