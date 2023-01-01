import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AdminMenu from "../AdminMenu/AdminMenu";
import Footer from "../../../footer/Footer";

function UserProfile() {
    const userIdFromLocalStorrage = window.localStorage.getItem("userId");
    const[email, setEmail] = useState("");
    const[name, setName] = useState("");
    const[birthday, setBirthday] = useState("");
    const[gender, setGender] = useState("");
    const[phone, setPhone] = useState("");
    const[password, setPassword] = useState("");

    useEffect(() => {
        fetch(`http://localhost:4000/users/${userIdFromLocalStorrage}`)
        .then((response) => {
            return response.json();
        }).then((data) => {
            setEmail(data.email);
            setName(data.name);
            setBirthday(data.birthday);
            setGender(data.gender);
            setPhone(data.phone);
            setPassword(data.password);
            
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);

    function handleSubmit(event) {
      event.preventDefault();
      const profileInfo = {email, name, birthday, gender, phone, password};

      fetch("http://localhost:4000/users/"+userIdFromLocalStorrage, {
          method:"PUT",
          headers:{"content-type":"application/json"},
          body:JSON.stringify(profileInfo)
      }).then((response) => {
          alert("Saved succesfully!")
      })

  }

  return (
    <>
      <AdminMenu />
      <div className="create-product">
        <div className="create-product__container">
          <h2>Profile Info</h2>
          <form className="create-product__form">
            <div className="form-field">
              <p>
                <label htmlFor="name">Name</label>
              </p>
              <input type="text" name="name" id="name" value={name} onChange={event => setName(event.target.value)}/>
            </div>

            <div className="form-field">
              <p>
                <label htmlFor="email">Email</label>
              </p>
              <input type="text" name="email" id="email" value={email} onChange={event => setEmail(event.target.value)} />
            </div>

            <div className="form-field">
              <p>
                <label htmlFor="birthday">Birthday</label>
              </p>
              <input type="date" name="birthday" id="birthday" value={birthday} onChange={event => setBirthday(event.target.value)} />
            </div>

            <div className="form-field">
              <p>
                <label htmlFor="gender">Gender</label>
              </p>
              <select id="gender" name="gender" value={gender} onChange={event => setGender(event.target.value)}>
                <option name="gender"></option>
                <option name="gender" value="Man">Man</option>
                <option name="gender" value="Woman">Woman</option>
              </select>
            </div>

            <div className="form-field">
              <p>
                <label htmlFor="phone">Phone</label>
              </p>
              <input type="text" name="phone" id="phone" value={phone} onChange={event => setPhone(event.target.value)}/>
            </div>

            <div className="form-field">
              <p>
                <label htmlFor="name">Password</label>
              </p>
              <input type="text" name="password" id="password" value={password} onChange={event => setPassword(event.target.value)}/>
            </div>

            <button className="btn-form" type="submit" onClick={handleSubmit}>Update Information</button>

            <Link to="/dashboard" className="btn btn--delete">Back</Link>

          </form>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default UserProfile