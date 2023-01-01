import "./Register.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom";

function Register() {
    const registerUrl = "http://localhost:4000/users";
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [birthday, setBirthday] = useState("");
    const [gender, setGender] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");

    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    function nameChangeHandler(event) {
        setName(event.target.value);
    }

    function emailChangeHandler(event) {
        setEmail(event.target.value);
    }

    function birthdayChangeHandler(event) {
        setBirthday(event.target.value);
    }

    function genderChangeHandler(event) {
        setGender(event.target.value);
    }

    function phoneChangeHandler(event) {
        setPhone(event.target.value);
    }

    function passwordChangeHandler(event) {
        setPassword(event.target.value);
    }

    const body = {
        name,
        email,
        birthday,
        gender,
        phone,
        password
    }

    function onSubmit(event) {
        event.preventDefault();
        setEmailError("");
        setPasswordError("");

        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

        const emailValid = emailRegex.test(email);
        const passwordValid = validatePassword(password);

        if(!emailValid) {
            setEmailError("Please enter a valid email!")
        }

        if(!passwordValid) {
            setPasswordError("You must enter a password that is longer than 6 characters, has at least one uppercase letter, has a number and has a special character (!,@, #,$,%,^,&,*)")
        }

        if(!emailValid || !passwordValid) {
            return;
        }

        fetch(registerUrl, {
            method:"POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body)
        })
        .then((response) => {
            alert("Account created succesfully! Please login.");
            navigate("/login");
        })  
    }

    function validatePassword(password) {
        const specialCharacterList = ["!", "@", "#", "$", "%", "^", "&", "*"];


        if(password.length >= 6) {
            return true;
        }

        let hasUpperCaseCharacter = false;
        let hasNumberCharacter = false;
        let hasSpecialCharacter = false;
        let letter;

        for(let letter of password) {
            if(letter === letter.toUpperCase()) {
                hasUpperCaseCharacter = true;
            }
        }

        if(typeof Number(letter) === "number") {
            hasNumberCharacter = true;
        }

        if(specialCharacterList.includes(letter)) {
            hasSpecialCharacter = true;
        }

        if(hasUpperCaseCharacter && hasNumberCharacter && hasSpecialCharacter) {
            return true;
        }

        return false;
    }

  return (
    <div className="register">
        <div className="register__container">
            <div className="register__intro">
                <h2>Create an account</h2>
                <h4>Your online shop available anywhere, anytime.</h4>
            </div>
            <form className="register__form" onSubmit={onSubmit}>
                <div>
                    <p><label htmlFor="name">Name</label></p>
                    <input type="text" name="name" id="name" onChange={nameChangeHandler} />
                </div>

                <div>
                    <p><label htmlFor="email">Email</label></p>
                    <input type="email" name="email" id="email" onChange={emailChangeHandler} />
                    <p className="register__error">{emailError}</p>
                </div>

                <div>
                <p><label htmlFor="birthday">Birthday</label></p>
                    <input type="date" name="birthday" id="birthday" onChange={birthdayChangeHandler} />
                </div>

                <div>
                <p><label htmlFor="gender">Gender</label></p>
                    <select id="gender" name="gender" onChange={genderChangeHandler}>
                        <option name="category"></option>
                        <option name="category" value="Man">Man</option>
                        <option name="category" value="Woman">Woman</option>
                    </select>
                </div>

                <div>
                <p><label htmlFor="phone">Phone</label></p>
                    <input type="text" name="number" id="number" onChange={phoneChangeHandler}/>
                </div>

                <div>
                <p><label htmlFor="password">Password</label></p>
                    <input type="password" name="password" id="password" onChange={passwordChangeHandler} />
                    <p className="register__error">{passwordError}</p>
                </div>

                <button type="submit" className="btn-form">Create account</button>

            </form>
        </div>
    </div>
  )
}

export default Register