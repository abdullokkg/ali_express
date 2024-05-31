import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Sign-up.scss"
import { loadFromLocalStorage, saveToLocalStorage } from "../../../db/utils";

function Sign_up() {
    const [userDatatoken, setUserDatatoken] = useState(null);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()
    const handleSignUp = () => {
        const user = loadFromLocalStorage('user') || [];
        if (user) {
            saveToLocalStorage('user', { username, password, userDatatoken })
            navigate("/login")
        } else {
            alert('User already exists')
        }
    }
    useEffect(() => {
        fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: 'kminchelle',
                password: '0lelplR',
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
    }, []);

    return (
        <div className="sign_up">
            <div className="txt">
                <h1>Create an account</h1>
            </div>
            <br />
            <br />
            <br />
            <br />
            <form className="form" >
                <input onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Your username" />
                <br />
                <br />
                <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Your password" />
                <br />
                <br />
                <br />
                <br />
                <button onClick={handleSignUp}>Sign Up</button>
            </form>
        </div>
    );
}

export default Sign_up;
