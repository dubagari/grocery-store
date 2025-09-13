import { Navigate, Outlet } from "react-router-dom";

import { useSelector } from "react-redux";

const PriviteRoute = () => {
  const { currentUser } = useSelector((state) => state.user);
  return currentUser ? <Outlet /> : <Navigate to="/login" />;
};

export default PriviteRoute;
