import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { login } from "../services/authService";

function LoginPage() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await login(username, password);

      localStorage.setItem("token", response.token);

      navigate("/books");
    } catch (error) {
      alert("Login failed");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Online Book Store</h1>

      <div>
        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <br />

      <div>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <br />

      <button onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default LoginPage;