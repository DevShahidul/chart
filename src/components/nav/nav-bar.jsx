import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

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
            font-thin
            p-2
            space-x-2
        ">
            {routes.map((route => (
                <NavButton 
                    key={route.path}
                    text={route.text}
                    path={route.path}
                />
            )))}
        </nav>
    )
}

const NavButton = ({ text, path }) => {
    return (
        <Link to={path}>
            <button className="
                hover:text-slate-800
                hover:bg-slate-100
                p-2
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