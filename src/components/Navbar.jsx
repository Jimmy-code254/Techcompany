import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <section className="row-jm">
            <div className="col-md-12">
                <div className="navbar navbar-expand-md navbar-light bg-light fixed-top">
                    
                    <Link to="/" className="navbar-brand">
                        <img src="/images/logo1.jpg" alt="Primrose Tech Logo" width="150" height="auto" />
                    </Link>

                    <button className="navbar-toggler" data-bs-target="#prada" data-bs-toggle="collapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="prada">
                        <div className="navbar-nav">
                            <Link to="/" className="link1">Home</Link>
                            <Link to="/addproduct" className="link2">Add Product</Link>
                            <Link to="/aboutus" className="link2">About Us</Link>
                        </div>

                        <div className="navbar-nav ms-auto">
                            <Link to="/signin" className="link3">Log In</Link>
                            <Link to="/signup" className="link4">Sign Up</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Navbar;
