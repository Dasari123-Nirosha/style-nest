
import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const AuthContext = createContext(null);

const ADMIN_EMAIL = "admin@stylenest.com";
const ADMIN_PASSWORD = "Admin@123";

export function AuthProvider({ children }) {
  const [customer, setCustomer] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("style-nest-customer")) || null;
    } catch {
      return null;
    }
  });

  const [admin, setAdmin] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("style-nest-admin")) || null;
    } catch {
      return null;
    }
  });

  const [activeRole, setActiveRole] = useState(() => {
    return localStorage.getItem("style-nest-active-role") || "";
  });

  useEffect(() => {
    if (customer) {
      localStorage.setItem("style-nest-customer", JSON.stringify(customer));
    } else {
      localStorage.removeItem("style-nest-customer");
    }
  }, [customer]);

  useEffect(() => {
    if (admin) {
      localStorage.setItem("style-nest-admin", JSON.stringify(admin));
    } else {
      localStorage.removeItem("style-nest-admin");
    }
  }, [admin]);

  useEffect(() => {
    if (activeRole) {
      localStorage.setItem("style-nest-active-role", activeRole);
    } else {
      localStorage.removeItem("style-nest-active-role");
    }
  }, [activeRole]);

  const user =
    activeRole === "admin"
      ? admin
      : activeRole === "customer"
        ? customer
        : null;

  const isAdmin = Boolean(admin);
  const isCustomer = Boolean(customer);
  const isLoggedIn = Boolean(user);

  const login = (email, password) => {
    const normalizedEmail = email.trim().toLowerCase();

    if (
      normalizedEmail === ADMIN_EMAIL &&
      password === ADMIN_PASSWORD
    ) {
      const adminUser = {
        name: "Style Nest Admin",
        email: ADMIN_EMAIL,
        role: "admin",
      };

      setAdmin(adminUser);
      setActiveRole("admin");

      return { success: true, role: "admin" };
    }

    let savedUsers = [];

    try {
      savedUsers = JSON.parse(
        localStorage.getItem("style-nest-users") || "[]"
      );
    } catch {
      savedUsers = [];
    }

    const matchedUser = savedUsers.find(
      (item) =>
        item.email?.toLowerCase() === normalizedEmail &&
        item.password === password
    );

    if (!matchedUser) {
      return {
        success: false,
        message: "Invalid email or password.",
      };
    }

    const customerUser = {
      name: matchedUser.name,
      email: matchedUser.email,
      role: "customer",
    };

    setCustomer(customerUser);
    setActiveRole("customer");

    return { success: true, role: "customer" };
  };

  const register = (name, email, password) => {
    let savedUsers = [];

    try {
      savedUsers = JSON.parse(
        localStorage.getItem("style-nest-users") || "[]"
      );
    } catch {
      savedUsers = [];
    }

    const normalizedEmail = email.trim().toLowerCase();

    const alreadyExists = savedUsers.some(
      (item) => item.email?.toLowerCase() === normalizedEmail
    );

    if (alreadyExists) {
      return {
        success: false,
        message: "An account with this email already exists.",
      };
    }

    const newUser = {
      name: name.trim(),
      email: normalizedEmail,
      password,
    };

    localStorage.setItem(
      "style-nest-users",
      JSON.stringify([...savedUsers, newUser])
    );

    const customerUser = {
      name: newUser.name,
      email: newUser.email,
      role: "customer",
    };

    setCustomer(customerUser);
    setActiveRole("customer");

    return { success: true, role: "customer" };
  };

  const switchRole = (role) => {
    if (role === "admin" && admin) {
      setActiveRole("admin");
    } else if (role === "customer" && customer) {
      setActiveRole("customer");
    }
  };

  const logout = () => {
    if (activeRole === "admin") {
      setAdmin(null);
    } else if (activeRole === "customer") {
      setCustomer(null);
    }

    setActiveRole("");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        customer,
        admin,
        activeRole,
        isLoggedIn,
        isAdmin,
        isCustomer,
        login,
        register,
        logout,
        switchRole,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return context;
}
