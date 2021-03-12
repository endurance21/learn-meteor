import { Meteor } from 'meteor/meteor';
import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const submit = e => {
    e.preventDefault();

    Meteor.loginWithPassword(username, password);
  };

  return (
<form>
      <div className="form-group">
        <label for="exampleInputEmail1">UserName</label>
        <input
          type="email"
          value={username}
          onChange={(e)=>setUsername(e.target.value)}
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter Username"
        />
      </div>
      <div className="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          type="password"
          value={password}
          className="form-control"
          onChange={(e)=>setPassword(e.target.value)}
          id="exampleInputPassword1"
          placeholder="Password"
        />
      </div>
      <button type="submit" onClick={submit} className="btn btn-primary ml-2">
        Login
      </button>
      <Link to="/register" className="btn btn-secondary ml-2" > Register</Link>

    </form>
  );
};