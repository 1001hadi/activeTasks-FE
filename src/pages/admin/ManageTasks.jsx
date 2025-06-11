import { useEffect, useState } from "react";
import DashboardLayout from "../../components/layouts/DashBoardLayout";
import axiosInstance from "../../utilities/axiosInstance";
import { API_PATHS } from "../../utilities/apiPaths";
import { useNavigate } from "react-router-dom";

const ManageTasks = () => {
  const [allTasks, setAllTasks] = useState([]);

  const [tabs, setTabs] = useState([]);
  const [filterStatus, setFilterStatus] = useState("All");

  const navigate = useNavigate();

  const getAllTasks = async () => {
    try {
      const response = await axiosInstance.get(API_PATHS.TASKS.GET_ALL_TASKS, {
        params: {
          status: filterStatus === "All" ? "" : filterStatus,
        },
      });

      setAllTasks(response.data?.tasks?.length > 0 ? response.data.tasks : []);

      // Map statusSummary data with fixed labels and order
      const statusSummary = response.data?.statusSummary || {};

      const statusArray = [
        { label: "All", count: statusSummary.all || 0 },
        { label: "Pending", count: statusSummary.pendingTasks || 0 },
        { label: "Progress", count: statusSummary.ProgressTasks || 0 },
        { label: "Complete", count: statusSummary.completeTasks || 0 },
      ];

      setTabs(statusArray);
    } catch (err) {
      console.error("can't fetch users:", err);
    }
  };

  const handleClick = (taskData) => {
    navigate(`/admin/create-task`, { state: { taskId: taskData._id } });
  };

  useEffect(() => {
    getAllTasks(filterStatus);
    return () => {};
  }, [filterStatus]);

  return <DashboardLayout activeMenu="Manage Tasks"></DashboardLayout>;
};

export default ManageTasks;
