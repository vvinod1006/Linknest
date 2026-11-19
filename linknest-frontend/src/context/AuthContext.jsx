import { createContext, useContext, useState } from "react";
import api from "../services/api";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try { return JSON.parse(localStorage.getItem("linknest_user")) || null; }
    catch { return null; }
  });

  async function signUp({ username, email, password }) {
    const normalizedEmail = email.trim().toLowerCase();
    const existing = await api.get("/users", { params: { email: normalizedEmail } });
    if (existing.data.length) throw new Error("An account with this email already exists.");
    const response = await api.post("/users", {
      username: username.trim(), email: normalizedEmail, password,
      createdAt: new Date().toISOString(),
    });
    return response.data;
  }

  async function login({ email, password }) {
    const response = await api.get("/users", { params: { email: email.trim().toLowerCase() } });
    const found = response.data.find((item) => item.password === password);
    if (!found) throw new Error("Invalid email or password.");
    const safeUser = { id: String(found.id), username: found.username, email: found.email };
    setUser(safeUser);
    localStorage.setItem("linknest_user", JSON.stringify(safeUser));
    return safeUser;
  }

  function logout() {
    setUser(null);
    localStorage.removeItem("linknest_user");
  }

  return <AuthContext.Provider value={{ user, signUp, login, logout }}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const value = useContext(AuthContext);
  if (!value) throw new Error("useAuth must be used within AuthProvider");
  return value;
}
