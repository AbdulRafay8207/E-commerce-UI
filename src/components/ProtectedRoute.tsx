import { Navigate } from "react-router";

const ProtectedRoute = ({children}:any) => {
    const isAuthenticated = sessionStorage.getItem("isLoggedIn") === "true";
  
    if (!isAuthenticated) {
      return <Navigate to="/" replace />
    }
    return children
}
export default ProtectedRoute
