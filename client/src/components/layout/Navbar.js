import React from "react";

const Navbar = () => {
    return (
        <div className="navWrapper">
            <nav>
                <p class="navRank"><span className="bold">Encounters: 10</span></p>
                <p class="navLinks"><a href="/pigeons">Index</a> | <a href="/login">Login</a> | <a href="/logout">Logout</a></p>
                <p class="navUser"><span className="bold">Rank:</span> Pigeon Watcher | <a href="/dashboard"><span className="bold">John Rubio</span></a></p>
            </nav>
        </div>
    );
}


export default Navbar;