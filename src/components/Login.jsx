import { useState } from "react";
import axios from "axios";
import { LoginContainer } from "./Styled-Components/LoginStyled";

const Login = ({token, setToken}) => {
  const handleNavigate = () => {
    window.location.assign('/register')
  }

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const fetchUser = () => {
    axios({
      method: "POST",
      url: "https://fakestoreapi.com/auth/login",
      data: {
        username: username,
        password: password,
      },
    })
      .then((res) => {
        console.log(res);
        localStorage.setItem("userToken", res.data.token);
        setToken(res.data.token);
        window.location.assign('/')
      })
      .catch((err) => {
        console.log(err);
        setError("Invalid Credentials");
      });
  };

  return (
    <LoginContainer>
      <h1>Login</h1>
      <form onSubmit={(e) => e.preventDefault() }>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit" onClick={fetchUser}>Login</button>
      </form>

      {/* <p>Or 
        <span onClick={handleNavigate}> Register</span>
      </p> */}

      <p>Username: mor_2314</p>
      <p>Password: 83r5^_ </p>
    </LoginContainer>
  );
};

export default Login;
