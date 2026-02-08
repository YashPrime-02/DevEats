import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function AuthGuard({ children }) {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <p style={{ textAlign: "center", padding: "40px" }}>
        Checking session...
      </p>
    );
  }

  if (!user) return <Navigate to="/auth" replace />;

  return children;
}
