import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function AuthGuard({ children }) {
  const { user, loading } = useAuth();

  // ⏳ WAIT until token is decoded
  if (loading) return null;

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  return children;
}
