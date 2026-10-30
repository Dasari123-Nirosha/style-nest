
import { useAuth } from "../context/AuthContext";
import {
  UserRound,
  Mail,
  ShieldCheck,
  Store,
  LayoutDashboard,
} from "lucide-react";
import { Link } from "react-router-dom";

function AdminProfile() {
  const { user } = useAuth();

  return (
    <main className="sn-admin-profile">
      <header className="sn-admin-profile-header">
        <span>STYLE NEST ADMINISTRATION</span>
        <h1>Admin Profile</h1>
        <p>Manage and view your administrator information.</p>
      </header>

      <section className="sn-admin-profile-card">
        <div className="sn-admin-profile-cover" />

        <div className="sn-admin-profile-details">
          <div className="sn-admin-profile-avatar">
            <UserRound size={38} />
          </div>

          <h2>{user?.name || "Style Nest Admin"}</h2>
          <span className="sn-admin-role">
            <ShieldCheck size={15} />
            Store Administrator
          </span>

          <div className="sn-admin-profile-info">
            <div>
              <Mail size={20} />
              <section>
                <small>Email Address</small>
                <strong>{user?.email || "Not available"}</strong>
              </section>
            </div>

            <div>
              <ShieldCheck size={20} />
              <section>
                <small>Account Role</small>
                <strong>Administrator</strong>
              </section>
            </div>

            <div>
              <Store size={20} />
              <section>
                <small>Store Name</small>
                <strong>Style Nest</strong>
              </section>
            </div>
          </div>

          <Link to="/admin" className="sn-admin-profile-button">
            <LayoutDashboard size={18} />
            Go to Dashboard
          </Link>
        </div>
      </section>
    </main>
  );
}

export default AdminProfile;
