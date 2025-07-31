
const Navbar = () => {
    return (
        <nav className="navbar">
        <div className="navbar__logo">
            <h1>Movie-Wallah</h1>
        </div>
        <div className="navbar__search">
        <ul style={{listStyleType: 'none'}} className="navbar__links">
            <li><h1>Home</h1></li>
            <li><h1>About Us</h1></li>
            <li><h1>Services</h1></li>
            <button>Search</button>
        </ul>
        </div>
        </nav>
    );
    }
export default Navbar;