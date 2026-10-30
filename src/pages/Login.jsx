
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {
  LockKeyhole,
  Mail,
  Eye,
  EyeOff,
  ArrowRight,
} from "lucide-react";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const result = login(formData.email.trim(), formData.password);

    if (!result.success) {
      setError(result.message);
      return;
    }

    // Send admin and customer users to their correct pages
    const destination =
      result.role === "admin"
        ? "/admin"
        : location.state?.from?.pathname || "/products";

    navigate(destination, { replace: true });
  };

  return (
    <main className="sn-login-page">
      <div className="sn-login-card">
        <div className="sn-login-icon">
          <LockKeyhole size={30} />
        </div>

        <span className="sn-login-eyebrow">WELCOME BACK</span>
        <h1>Login to <span>Style Nest</span></h1>
        <p className="sn-login-description">
          Sign in to discover your favourite finds.
        </p>

        <form onSubmit={handleSubmit}>
          <label className="sn-login-label">
            Email Address
            <div className="sn-login-input-wrap">
              <Mail size={19} />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>
          </label>

          <label className="sn-login-label">
            Password
            <div className="sn-login-input-wrap">
              <LockKeyhole size={19} />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                className="sn-login-eye"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
              </button>
            </div>
          </label>

          {error && <p className="sn-login-error">{error}</p>}

          <button type="submit" className="sn-login-button">
            Login <ArrowRight size={18} />
          </button>
        </form>

        <p className="sn-login-register">
          Don't have an account? <Link to="/register">Create Account</Link>
        </p>
      </div>
    </main>
  );
}

export default Login;
