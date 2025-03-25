import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Carousel from "./Carousel";

const GetProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  

  const img_url = "https://Jimmie.pythonanywhere.com/static/images/";
  const navigate = useNavigate();

  const getProducts = async () => {
    setError(null);
    setLoading("Please wait... Fetching products");

    try {
      const response = await axios.get("https://Jimmie.pythonanywhere.com/api/getproducts");
      setProducts(response.data);
      setLoading(null);
    } catch (error) {
      setLoading(null);
      setError("Failed to fetch products. Please try again.");
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  // Group products by category
  const groupProductsByCategory = () => {
    return products.reduce((acc, product) => {
      const { product_cat } = product;
      if (!acc[product_cat]) {
        acc[product_cat] = [];
      }
      acc[product_cat].push(product);
      return acc;
    }, {});
  };

  // Apply search filter
  const filteredProducts = products.filter((product) =>
    product.product_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const groupedProducts = groupProductsByCategory();

  return (
    <div className="container mt-4">
          <Carousel/>
     
      {/* SEARCH BAR */}
      <div className="row justify-content-center mt-4">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control border border-primary"
            placeholder="🔍 Search for a product..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ display: "block", visibility: "visible", border: "2px solid red" }}
          />
        </div>
      </div>
    
      <h3 className="text-success mt-4">Available Products</h3>
      {error && <b className="text-danger">{error}</b>}
      {loading && <b className="text-warning">{loading}</b>}

      {Object.keys(groupedProducts).map((category) => {
        // Filter products within the category
        const categoryProducts = groupedProducts[category].filter((product) =>
          filteredProducts.includes(product)
        );

        if (categoryProducts.length === 0) return null;

        return (
          <div key={category} className="category-section mt-4">
            <h3 className="text-primary">{category}</h3>
            <div className="row">
              {categoryProducts.map((product) => (
                <div key={product.product_name} className="col-md-3 mb-4">
                  <div className="card shadow-sm">
                    <img
                      src={img_url + product.product_photo}
                      alt={product.product_name}
                      className="card-img-top"
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                    <div className="card-body">
                      <h5 className="text-warning">{product.product_name}</h5>
                      <h6>{product.product_cat}</h6>
                      <p className="text-muted">
                        {product.product_desc.slice(0, 10)}...
                      </p>
                      <b className="text-success">Ksh {product.product_cost}</b>
                      <div className="mt-3">
                        <button
                          className="btn btn-success w-100"
                          onClick={() => navigate("/singleproduct", { state: { product } })}
                        >
                          View Product
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default GetProducts;
