
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {
  UserRound,
  Mail,
  LockKeyhole,
  Eye,
  EyeOff,
  ArrowRight,
} from "lucide-react";

function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
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

    if (formData.password.length < 6) {
      setError("Password must contain at least 6 characters.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const result = register(
      formData.name.trim(),
      formData.email.trim(),
      formData.password
    );

    if (!result.success) {
      setError(result.message);
      return;
    }

    navigate("/products", { replace: true });
  };

  return (
    <main className="sn-login-page">
      <div className="sn-login-card">
        <div className="sn-login-icon">
          <UserRound size={30} />
        </div>

        <span className="sn-login-eyebrow">JOIN STYLE NEST</span>
        <h1>Create Your <span>Account</span></h1>
        <p className="sn-login-description">
          Create your account and explore your favourite finds.
        </p>

        <form onSubmit={handleSubmit}>
          <label className="sn-login-label">
            Full Name
            <div className="sn-login-input-wrap">
              <UserRound size={19} />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />
            </div>
          </label>

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
                placeholder="Create a password"
                minLength={6}
                required
              />
              <button
                type="button"
                className="sn-login-eye"
                onClick={() => setShowPassword(!showPassword)}
                aria-label="Toggle password visibility"
              >
                {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
              </button>
            </div>
          </label>

          <label className="sn-login-label">
            Confirm Password
            <div className="sn-login-input-wrap">
              <LockKeyhole size={19} />
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                required
              />
            </div>
          </label>

          {error && <p className="sn-login-error">{error}</p>}

          <button type="submit" className="sn-login-button">
            Create Account <ArrowRight size={18} />
          </button>
        </form>

        <p className="sn-login-register">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </main>
  );
}

export default Register;
