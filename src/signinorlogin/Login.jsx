import {  useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../AuthContext";


function Login() {
   
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const { login } = useAuth();
 
  async function loginUser(event) {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/auth/authenticate", {
        email: email,
        password: password,
      });

      console.log(response.data);

      if (response.data === null) {
        alert("Email not exists");
      } else if (response.data.token != null) {
        login(response.data.token);
        history.push('/vehicle');
      } else {
        alert("Incorrect Email and Password not match");
      }
    } catch (err) {
      console.error(err);
      alert("Error during login");
    }
  }
    return (
       <div>
            <div class="container">
            <div class="row">
                <h2>Login</h2>
             <hr/>
             </div>
             <div class="row">
             <div class="col-sm-6">
 
            <form onSubmit={loginUser}>
        <div class="form-group">
          <label>Email</label>
          <input type="email"  class="form-control" id="email" placeholder="name"
          
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          
          />
        </div>
        <div class="form-group">
            <label>password</label>
            <input type="password"  class="form-control" id="password" placeholder="password"
            
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            
            />
          </div>
                  <button type="submit" class="btn btn-primary" >Login</button>
              </form>
              <a href="/register">Go to register</a>
            </div>
            </div>
            </div>
            
     </div>
    );
  }
  
  export default Login;