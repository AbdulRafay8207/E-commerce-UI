import { Navigate } from "react-router";

const ProtectedRoute = ({children}:any) => {
    const isAuthenticated = localStorage.getItem("isLoggedIn")
  
    if (!isAuthenticated) {
      return <Navigate to="/" replace />
    }
    return children
}
export default ProtectedRoute
