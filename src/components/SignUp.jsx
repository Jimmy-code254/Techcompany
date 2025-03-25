import axios from "axios";
import { useState } from "react";


const SignUp = () => {
    let [username, setUsername] = useState("");
    let [email, setEmail] = useState("");
    let [phone, setPhone] = useState("");
    let [password, setPassword] = useState("");
    let [error, setError] = useState("");
    let [loading, setLoading] = useState("");
    let [success, setSuccess] = useState("");

    const submitForm = async(e)=>{
        e.preventDefault();
        try {
            setLoading("Please wait...")

            const data = new FormData();
            data.append("username", username)
            data.append("email", email)
            data.append("phone", phone)
            data.append("password", password)

            const response = await axios.post("https://Jimmie.pythonanywhere.com/api/signup", data)

            setError("")
            setLoading("")
            setSuccess(response.data.success)
            setUsername("")
            setEmail("")
            setPhone("")
            setPassword("")
        } catch (error) {
            setLoading("")
            setError(error.message)
        }
    }
    
    return (
        <div className="row justify-content-center mt-4 form-container">
        <div className="col-md-4 card shadow p-4" style={{background:'rgba(18,18,18,0.7)', color:'f0f0f0', border:'2px solid #000', borderRadius:'15px'}}>
            <b className="text-warning">{loading}</b>
            <b className="text-danger">{error}</b>
            <b className="text-success">{success}</b>
            <h3 className="text-secondary">Sign Up</h3>
            <form onSubmit={submitForm} className="form-container" >
            <input type="text" placeholder="Enter Username" required value={username} onChange={(e) => setUsername(e.target.value)} className="form-control" style={{background:'#007BFF', color:'#f0f0f0', border:'1px solid #8A2BE2 '}} /> <br />
            <input type="email" placeholder="Enter Email" required value={email} onChange={(e) =>setEmail(e.target.value)} className="form-control" style={{background:'#007BFF', color:'#f0f0f0', border:'1px solid #8A2BE2 '}}/> <br />
            <input type="tel" placeholder="Enter Phone No." required value={phone} onChange={(e) =>setPhone(e.target.value)} className="form-control" style={{background:'#007BFF', color:'#f0f0f0', border:'1px solid #8A2BE2 '}}/> <br />
            <input type="password" placeholder="Enter Password" required value={password} onChange={(e) =>setPassword(e.target.value)} className="form-control" style={{background:'#007BFF', color:'#f0f0f0', border:'1px solid #8A2BE2 '}}/> <br />
            <button className="btn btn-primary" type="submit">Sign Up</button>
            </form>
        </div>
        </div>
     );
}
 
export default SignUp;