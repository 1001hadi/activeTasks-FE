import { useContext, useEffect, useState } from "react";
import { useUserAuth } from "../../hooks/useUserAuth";
import { userContext } from "../../context/userContext";
import DashboardLayout from "../../components/layouts/DashBoardLayout";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../utilities/axiosInstance";
import { API_PATHS } from "../../utilities/apiPaths";
import moment from "moment";

const Dashboard = () => {
  useUserAuth();

  const { user } = useContext(userContext);
  const navigate = useNavigate;
  const [dashboardData, setDashboardData] = useState(null);
  const [pieChartData, setPieChartData] = useState([]);
  const [barChartData, setBarChartData] = useState([]);

  const getDashboardData = async () => {
    try {
      const res = await axiosInstance.get(API_PATHS.TASKS.GET_DASHBOARD_DATA);
      if (res.data) {
        setDashboardData(res.data);
      }
    } catch (err) {
      console.error("error on fetch to get data", err);
    }
  };

  useEffect(() => {
    getDashboardData();

    return () => {};
  }, []);

  return (
    <DashboardLayout activeMenu="Dashboard">
      <div className="card my-5">
        <div>
          <div className="col-span-3">
            <h2 className="text-xl font-small md:text-2xl">
              Hello {user?.name}
            </h2>
            <p className="text-xs md:text-[13px] text-gray-600 mt-1.5">
              {moment().format("dddd Do MMM YYYY")}
            </p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
