import { useEffect, useState } from "react"
import "./Login.scss"
import { loadFromLocalStorage } from "../../../db/utils";
import { Link, useNavigate } from "react-router-dom";

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()
    const [userDatatoken, setUserDatatoken] = useState(null);
    const user = loadFromLocalStorage('user')
    const handleLogin = () => {
        if (user.username === username && user.password === password) {
            window.location.href = "/"
            navigate("/")
        } else {
            alert("Wrong username or password")
            navigate("/sign_up")
        }
    }
    
    useEffect(() => {
        fetch('https://dummyjson.com/auth/refresh', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${user.userDatatoken}`, },
            body: JSON.stringify({
                expiresInMins: 90,
            })
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    throw new Error('Failed to login');
                }
            })
            .then(data => {
                setUserDatatoken(data.token);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });

    return (
        <div className="sign_up2">
            <div className="txt2">
                <h1>Hello</h1>
                <br />
                <strong>Sign in to eBay or <Link className="link" to={"/sign_up"}></Link></strong>
            </div>
            <br />
            <br />
            <br />
            <br />
            <form className="form2" >
                <input onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Your username" />
                <br />
                <br />
                <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Your password" />
                <br />
                <br />
                <br />
                <br />
                <button className="login_btn" onClick={handleLogin}>Sign Up</button>
            </form>
        </div>
    )
}

export default Login