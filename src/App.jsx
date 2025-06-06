import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import PrivateRoute from "./routes/PrivateRoute";
import Dashboard from "./pages/admin/Dashboard";
import CreateTask from "./pages/admin/CreateTask";
import ManageTasks from "./pages/admin/ManageTasks";
import ManageUsers from "./pages/admin/ManageUsers";
import UserDashboard from "./pages/user/UserDashboard";
import UserTasks from "./pages/user/UserTasks";
import UserTaskDetails from "./pages/user/UserTaskDetails";

function App() {
  return (
    <div>
      <Routes>
        {/* authentication routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* admin only routes */}
        <Route element={<PrivateRoute allowedRoles={["admin"]} />}>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/create-task" element={<CreateTask />} />
          <Route path="/admin/tasks" element={<ManageTasks />} />
          <Route path="/admin/users" element={<ManageUsers />} />
        </Route>
        {/* user routes */}
        <Route element={<PrivateRoute allowedRoles={["admin"]} />}>
          <Route path="/user/dashboard" element={<UserDashboard />} />
          <Route path="/user/tasks" element={<UserTasks />} />
          <Route path="/user/task-details/:id" element={<UserTaskDetails />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
