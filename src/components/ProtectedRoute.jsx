
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function ProtectedRoute({ children, adminOnly = false }) {
  const { admin, customer } = useAuth();
  const location = useLocation();

  // Admin routes require an admin session
  if (adminOnly && !admin) {
    return (
      <Navigate
        to="/login"
        replace
        state={{ from: location, role: "admin" }}
      />
    );
  }

  // Customer routes require a customer session
  if (!adminOnly && !customer) {
    return (
      <Navigate
        to="/login"
        replace
        state={{ from: location, role: "customer" }}
      />
    );
  }

  return children;
}

export default ProtectedRoute;
