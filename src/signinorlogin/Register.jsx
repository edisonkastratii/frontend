import axios from "axios";
import { useState } from "react";

function Register() {
  
  const [firstName, setfirstName] = useState("");
  const [email, setEmail] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");

  async function save(event) {
      event.preventDefault();
      try {
        await axios.post("http://localhost:8080/auth/register", {
          firstName: firstName,
          email: email,
          lastName : lastName,
          password: password,
        });
        alert("Employee Registation Successfully");
      } catch (err) {
        alert(err);
      }
    }
  return (
  <div>
  <div className="container mt-4" >
  <div className="card">
          <h1>User Registation</h1>
  
  <form>
      <div className="form-group">
        <label>Name</label>
        
        <input type="text"  className="form-control" id="employeename" placeholder="Enter Name"
        
        value={firstName}
        onChange={(event) => {
          setfirstName(event.target.value);
        }}
        />
      </div>
      <div className="form-group">
        <label>Surname</label>
        <input type="text"  className="form-control" id="employeename" placeholder="Enter Surname"
        
        value={lastName}
        onChange={(event) => {
          setLastName(event.target.value);
        }}
        />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input type="email"  className="form-control" id="email" placeholder="Enter Email"
        
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        
        />

      </div>
      <div className="form-group">
          <label>Password</label>
          <input type="password"  className="form-control" id="password" placeholder="Enter password"
          
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          
          />
        </div>
      <button type="submit" className="btn btn-primary mt-4" onClick={save} >Save</button>
    </form>
    <a href="/Login">I Have an account</a>
  </div>
  </div>
   </div>
  );
}

export default Register;