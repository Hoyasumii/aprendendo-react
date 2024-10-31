// React Imports
import PropTypes from 'prop-types';

// Components
import { Link } from 'react-router-dom';

export default function NavItem({ name, to }) {
    return (
        <li className="nav-item">
            <Link className="nav-link" to={to}>{name}</Link>
        </li>
    )
}

NavItem.propTypes = {
    name: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
}