import "./Login.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom";

function Login() {
    const loginUrl = "http://localhost:4000/login";
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function emailChangeHandler(event) {
        setEmail(event.target.value);
    }

    function passwordChangeHandler(event) {
        setPassword(event.target.value);
    }

    const body = {
        email,
        password
    }

    function onSubmit(event) {
        event.preventDefault();

        fetch(loginUrl, {
            method:"POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body)
        })
        .then((response) => response.json())
        .then((response) => {
            window.localStorage.setItem("token", response.accessToken);
            window.localStorage.setItem("userId", response.user.id);
            navigate("/dashboard");
        })  
    }

  return (
    <div className="register">
        <div className="register__container">
            <div className="register__intro">
                <h2>Login into your account</h2>
                <h4>e-Commerce solutions made easy.</h4>
            </div>
            <form className="register__form" onSubmit={onSubmit}>
                <div>
                    <p><label htmlFor="email">Email</label></p>
                    <input type="email" name="email" id="email" onChange={emailChangeHandler} />
                </div>

                <div>
                <p><label htmlFor="password">Password</label></p>
                    <input type="password" name="password" id="password" onChange={passwordChangeHandler} />
                </div>

                <button type="submit" className="btn-form">Login</button>

            </form>
        </div>
    </div>
  )
}

export default Login