import axios from "axios";
import { useState } from "react";
const AddProducts = () => {
    let [product_name, setProductName] = useState("");
    let [product_desc, setProductDesc] = useState("");
    let [product_cost, setProductCost] = useState("");
    let [product_cat, setProductCat] = useState("");
    let [product_photo, setProductPhoto] = useState("");

    let [loading, setLoading] = useState("");
    let [error, setError] = useState("");
    let [success, setSuccess] = useState("")
    
    const submitForm = async(e) => {
        e.preventDefault();

        try {
            setLoading("Please wait...");
            setError("");
            setSuccess("")
            
            const data = new FormData();
            data.append("product_name", product_name);
            data.append("product_desc", product_desc);
            data.append("product_cost", product_cost);
            data.append("product_cat", product_cat)
            data.append("product_photo", product_photo);

            const response =await axios.post("https://Jimmie.pythonanywhere.com/api/addproduct", data);
            setLoading("");
            setSuccess("Product added successfuly");

            setProductName("");
            setProductDesc("");
            setProductCost("");
            setProductCat("");
            setProductPhoto("");
            
        } catch (error) {
            setLoading("");
            setError(error.message);
        }
    }
    
    return ( 
        <div className="row justify-content-center mt-4">
            <div className="col-md-4 card shadow p-4" style={{background:'rgba(18,18,18,0.7)', color:'f0f0f0', border:'2px solid #000', borderRadius:'15px'}}>
                <h2>Add Product</h2>
                <b className="text-warning">{loading}</b>
                <b className="text-danger">{error}</b>
                <b className="text-success">{success}</b>
               
                <form onSubmit={submitForm}>
                    <input type="text" value={product_name} required placeholder="Product Name" className="form-control" onChange={(e)=>setProductName(e.target.value)} style={{background:'#e65d0e', color:'#f0f0f0', border:'1px solid #E600FF '}}/><br />
                    <textarea name="" id="" value={product_desc} className="form-control" placeholder="Product Description" required onChange={(e)=>setProductDesc(e.target.value)} style={{background:'#e65d0e', color:'#f0f0f0', border:'1px solid #E600FF '}}></textarea><br />
                    <input type="number" value={product_cost} required placeholder="Product Cost" className="form-control" onChange={(e)=>setProductCost(e.target.value)} style={{background:'#e65d0e', color:'#f0f0f0', border:'1px solid #E600FF '}}/><br />
                    <input type="text" value={product_cat} required placeholder="Product Category" className="form-control" onChange={(e)=>setProductCat(e.target.value)} style={{background:'#e65d0e', color:'#f0f0f0', border:'1px solid #E600FF '}}/><br />

                    <p>Product Photo</p>
                    <input type="file" className="form-control" required  onChange={(e)=>setProductPhoto(e.target.files[0])} style={{background:'#e65d0e', color:'#f0f0f0', border:'1px solid #E600FF '}}/> <br />
                    <button className="btn btn-primary">Add Product</button>

                </form>
            </div>
        </div>
     );
}
 
export default AddProducts;