import { Link } from 'react-router-dom';
import NavItem from './NavItem.jsx';

export default function Header() {
    return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">React Router</Link>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-header" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbar-header">
                <ul className="navbar-nav">
                    <NavItem name="Sobre" to="/about" />
                </ul>
            </div>
        </div>
    </nav>
    )
}