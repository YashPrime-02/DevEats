import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import AdminDashboard from "./AdminDashboard";
import Layout from "../../components/Layouts/Layouts";

export default function AdminWrapper() {
  const { user, loading } = useAuth();

  // ⏳ Wait for auth check
  if (loading) return null;

  // 🔒 Not logged in
  if (!user) return <Navigate to="/" replace />;

  // 🚫 Not admin
  if (user.role !== "admin") return <Navigate to="/" replace />;

  // ✅ Authorized
  return (
    <Layout>
      <AdminDashboard />
    </Layout>
  );
}
