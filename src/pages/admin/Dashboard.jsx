import React, { useContext } from "react";
import { useUserAuth } from "../../hooks/useUserAuth";
import { userContext } from "../../context/userContext";
import DashboardLayout from "../../components/layouts/DashBoardLayout";

const Dashboard = () => {
  useUserAuth();
  const { user } = useContext(userContext);
  return <DashboardLayout></DashboardLayout>;
};

export default Dashboard;
