import React, { useState } from "react";
import {useHistory} from "react-router-dom"

export const Register = () => {
    const history = useHistory()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const  handleEmail = (e)=> {
    setEmail(e.target.value)
  }
  const  handlePassword = (e)=> {
    setPassword(e.target.value)
}


  function handleRegister() {
    console.log(email, password)
    // Accounts.createUser(
    //     { email: email, password: password },
    //     error => {
    //       console.log(error);
    //       // if not error
    //       // After register code goes here
    //     }
    //   );
    Meteor.call("user.insert",email,password)
    history.push("/")

  }

  return (
    <form>
      <div className="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
          type="email"
          value={email}
          onChange={(e)=>handleEmail(e)}
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
      </div>
      <div className="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          type="password"
          value={password}
          className="form-control"
          onChange={(e)=>handlePassword(e)}
          id="exampleInputPassword1"
          placeholder="Password"
        />
      </div>
      <button type="submit" onClick={handleRegister} className="btn btn-primary">
        Register
      </button>
    </form>
  );
};