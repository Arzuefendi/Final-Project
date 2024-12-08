import React, { useContext, useEffect, useState } from "react";
import "../style/adminLogin.css";
import { ThemeContext } from "../ModeContext/Mode";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
const AdminLogin = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const savedCredentials = localStorage.getItem("adminCredentials");
    if (!savedCredentials) {
      localStorage.setItem(
        "adminCredentials",
        JSON.stringify({
          email: "arzuefendi0@gmail.com",
          password: "arzuefendi123",
        })
      );
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const savedCredentials = JSON.parse(
      localStorage.getItem("adminCredentials")
    );

    if (!email || !password) {
      setError("All fields are required!");
      return;
    }
    if (
      email !== savedCredentials.email ||
      password !== savedCredentials.password
    ) {
      setError("Invalid email or password!");
      return;
    }
    setError("");
    
    localStorage.setItem("isAdmin", "true");
    localStorage.setItem("username", "Admin");
    navigate("/adminpanel");
    navigate("/adminpanel");
  };
  return (
    <div className={`admin-login ${isDarkMode ? "dark-mode" : "light-mode"} `}>
      <form onSubmit={handleSubmit}>
        <h2 className="text-center">{t("Admin Login")}</h2>
        {error && <div className="error-message">{error}</div>}
        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="floatingInput">{t("Email address")}</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="floatingPassword">{t("Password")}</label>
        </div>
        <button className="admin-button w-100 py-2" type="submit">
          {t("Login")}
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;