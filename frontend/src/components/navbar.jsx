        import React from 'react';
        import { Link } from 'react-router-dom';
        import './navbar.css';
        import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
        import { faUser } from '@fortawesome/free-solid-svg-icons';
        import MultilingualSelector from './language';
        import { useSelector } from 'react-redux';

        const Navbar = ({scrollToFooter}) => {
            const user = useSelector((state) => state.auth.user);
            console.log(user);
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    <Link className="nav-link active" aria-current="page" to="/learn">Learn</Link>
                    <Link className="nav-link" to="/assess">Assessment</Link>
                    <Link className="nav-link" onClick={scrollToFooter} >Contact</Link>
                    {user && (user.role=="trainer" || user.role=="admin") && <Link className="nav-link" to="/dashboard">Dashboard</Link>}
                </div>
                <div className="navbar-nav ms-auto">
                    <div className="dropdown d-none d-lg-block">
                    <button className="profile-btn">
                        <FontAwesomeIcon icon={faUser} />
                    </button>
                    <div className="dropdown-content">
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Signup</Link>
                    </div>
                    </div>
                    <div className="d-lg-none">
                    <Link className="nav-link" to="/login">Login</Link>
                    <Link className="nav-link" to="/signup">Signup</Link>
                    </div>
                </div>
                </div>
                <MultilingualSelector/>
            </div>
            </nav>
        );
        };

        export default Navbar;