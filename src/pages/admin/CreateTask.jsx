import React, { useState } from "react";
import DashboardLayout from "../../components/layouts/DashBoardLayout";
import { useLocation, useNavigate } from "react-router-dom";
import { API_PATHS } from "../../utilities/apiPaths";
import { PRIORITY_DATA } from "../../utilities/data";
import axiosInstance from "../../utilities/axiosInstance";
import toast from "react-hot-toast";
import moment from "moment";
import { LuTrash2 } from "react-icons/lu";
import SelectDropdown from "../../components/inputs/SelectDropdown";
import SelectUsers from "../../components/inputs/SelectUsers";
import CheckListInput from "../../components/inputs/CheckListInput";

const CreateTask = () => {
  const location = useLocation();
  const { taskId } = location.state || {};
  const navigate = useNavigate();

  const [taskData, setTaskData] = useState({
    title: "",
    description: "",
    priority: "Low",
    dueDate: null,
    assignedTo: [],
    checklist: [],
    attachments: [],
  });
  const [currentTask, setCurrentTask] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [DeleteAlert, setDeleteAlert] = useState(false);

  const handleValueChange = (key, value) => {
    setTaskData((prevData) => ({ ...prevData, [key]: value }));
  };

  //reset the form
  const clearData = () => {
    setTaskData({
      title: "",
      description: "",
      priority: "Low",
      dueDate: null,
      assignedTo: [],
      checklist: [],
      attachments: [],
    });
  };

  const createTask = async () => {
    setLoading(true);

    try {
      const checklist = taskData.checklist?.map((item) => ({
        text: item,
        completed: false,
      }));

      const res = await axiosInstance.post(API_PATHS.TASKS.CREATE_TASK, {
        ...taskData,
        dueDate: new Date(taskData.dueDate).toISOString(),
        checklist: checklist,
      });

      toast.success("Task Created Successfully");

      clearData();
    } catch (error) {
      console.error("Error creating task:", error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout activeMenu="Create Task">
      <div className="mt-5">
        <div className="grid grid-cols-1 md:grid-cols-4 mt-4">
          <div className="form-card col-span-3">
            <div className="flex items-center justify-between">
              <h2 className="text-xl md:text-xl font-medium">
                {taskId ? "Update Task" : "Create Task"}
              </h2>

              {taskId && (
                <button
                  className="flex items-center gap-1.5 text-[13px] font-medium text-rose-500 bg-rose-50 rounded px-2 py-1 border border-rose-100 hover:border-rose-300 cursor-pointer"
                  onClick={() => setDeleteAlert(true)}
                >
                  <LuTrash2 className="text-base" /> Delete
                </button>
              )}
            </div>

            <div className="mt-4">
              <label className="text-xs font-medium text-slate-600">
                Task Title
              </label>

              <input
                placeholder="Create App UI"
                className="form-input"
                value={taskData.title}
                onChange={({ target }) =>
                  handleValueChange("title", target.value)
                }
              />
            </div>
            <div className="mt-3">
              <label className="text-xs font-medium text-slate-600">
                Description
              </label>

              <textarea
                placeholder="Describe task"
                className="form-input"
                rows={4}
                value={taskData.description}
                onChange={({ target }) =>
                  handleValueChange("description", target.value)
                }
              />
            </div>
            <div className="grid grid-cols-12 gap-4 mt-2">
              <div className="col-span-12 md:col-span-3">
                <label className="text-xs font-medium text-slate-600">
                  Assign To
                </label>

                <SelectUsers
                  selectedUsers={taskData.assignedTo}
                  setSelectedUsers={(value) => {
                    handleValueChange("assignedTo", value);
                  }}
                />
              </div>
              <div className="col-span-6 md:col-span-4">
                <label className="text-xs font-medium text-slate-600">
                  Priority
                </label>

                <SelectDropdown
                  options={PRIORITY_DATA}
                  value={taskData.priority}
                  onChange={(value) => handleValueChange("priority", value)}
                  placeholder="Select Priority"
                />
              </div>
              <div className="col-span-6 md:col-span-4">
                <label className="text-xs font-medium text-slate-600">
                  Due Date
                </label>

                <input
                  placeholder="Create App UI"
                  className="form-input"
                  value={taskData.dueDate}
                  onChange={({ target }) =>
                    handleValueChange("dueDate", target.value)
                  }
                  type="date"
                />
              </div>
            </div>
            <div className="mt-3">
              <label className="text-xs font-medium text-slate-600">
                Task Checklist
              </label>

              <CheckListInput
                checklist={taskData?.checklist}
                setCheckList={(value) => handleValueChange("checklist", value)}
              />
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CreateTask;
