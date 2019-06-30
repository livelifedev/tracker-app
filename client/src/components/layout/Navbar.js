import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navWrapper">
            <nav>
                <p className="navRank"><span className="bold">Encounters: 10</span></p>
                <p className="navLinks"><Link to="/pigeons">Index</Link> | <Link to="/login">Login</Link> | <Link to="/logout">Logout</Link></p>
                <p className="navUser"><span className="bold">Rank:</span> Pigeon Watcher | <Link to="/dashboard"><span className="bold">John Rubio</span></Link></p>
            </nav>
        </div>
    );
};


export default Navbar;