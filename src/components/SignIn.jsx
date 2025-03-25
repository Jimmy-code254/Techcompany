import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const SignIn = () => {
    
    let [username, setUsername] = useState("")
    let [password, setPassword] = useState("")

    let [error, setError] = useState("")
    let [loading, setLoading] = useState("")
    let [success, setSuccess] = useState("")

    const navigate = useNavigate();
    const submitForm = async(e) =>{
        e.preventDefault();

        try {
            setLoading("Please wait...")

            const data = new FormData();
            data.append("username", username);
            data.append("password", password);

            const response = await axios.post("https://Jimmie.pythonanywhere.com/api/signin", data);
            setError("");
            setLoading("");
            setSuccess("Login successful" || response.data.success);
            setUsername("");
            setPassword("")

            if (setSuccess){
                localStorage.setItem("user",JSON.stringify(response.data.user))
                navigate("/")
            }else {
                setLoading("")
                setError(response.data.Message || "something went wrong.")
            }

        } catch (error) {
            setLoading("")
            setError(error.message)

        }
    }

    const togglePassword = () =>{
        const passwordInput=document.getElementById("passwords")
        const icon = document.getElementById("icon")


        let current_type = passwordInput.getAttribute("type")
        let new_type = ""
        if (current_type === "password"){
            new_type="text"
            icon.classList.add("bi-eye-fill")
            icon.classList.remove("bi-eye-slash-fill")
        }else{
            new_type="password"
            icon.classList.remove("bi-eye-fill")
            icon.classList.add("bi-eye-slash-fill")
        }
        passwordInput.setAttribute("type", new_type)
    }
    return ( 
        <div className="row justify-content-center mt-4">
            <div className="col-md-4 card shadow p-4" style={{background:'rgba(18,18,18,0.7)', color:'f0f0f0', border:'2px solid #000', borderRadius:'15px'}}>
                <b className="text-warning">{loading}</b>
                <b className="text-success">{success}</b>
                <b className="text-danger">{error}</b>
                <h3 className="text-secondary">Sign In</h3>
            <form onSubmit={submitForm} >
                <input type="text" placeholder="Enter Username" required value={username} onChange={(e)=>setUsername(e.target.value)} className="form-control" style={{background:'#007BFF', color:'#f0f0f0', border:'1px solid #8A2BE2 '}}/> <br />
                <div className="input-group"><input type="password"id="password"required placeholder="Enter Password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" style={{background:'#007BFF', color:'#f0f0f0', border:'1px solid #8A2BE2 '}}/>
                <span onClick={togglePassword} className="input-group-text"><i id="icon"class="bi bi-eye-fill"></i></span>
                </div>
                <button className="btn btn-primary" type="submit">Sign In</button>
            </form>
            </div>
        </div>
     );
}
 
export default SignIn;