import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-light bg-light px-4">
            {/* Logo */}
            <Link to="/" className="navbar-brand">
                <img src="/images/logo1.jpg" alt="Primrose Tech Logo" width="150" />
            </Link>

            {/* Toggler for mobile view */}
            <button 
                className="navbar-toggler" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#prada" 
                aria-controls="prada" 
                aria-expanded="false" 
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            {/* Collapsible nav links */}
            <div className="collapse navbar-collapse" id="prada">
                <div className="navbar-nav me-auto">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/addproduct" className="nav-link">Add Product</Link>
                </div>
                <div className="navbar-nav ms-auto">
                    <Link to="/signin" className="nav-link">Log In</Link>
                    <Link to="/signup" className="nav-link">Sign Up</Link>
                    <Link to="/cart" className="nav-link">Cart</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
