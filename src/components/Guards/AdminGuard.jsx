import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function AdminGuard({ children }) {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <p style={{ textAlign: "center", padding: "40px" }}>
        Checking admin access...
      </p>
    );
  }

  if (!user) return <Navigate to="/auth" replace />;
  if (user.role !== "admin") return <Navigate to="/" replace />;

  return children;
}
