import React from "react";
import moment from "moment";

const TasksTable = ({ tableData }) => {
  const handleStatusColor = (status) => {
    switch (status) {
      case "Complete":
        return "bg-green-700 text-white  ";
      case "Pending":
        return "bg-orange-500 text-white  ";
      case "Progress":
        return "bg-yellow-500 text-white  ";
      default:
        return "bg-gray-100 text-gray-500  ";
    }
  };

  const handlePriorityColor = (priority) => {
    switch (priority) {
      case "High":
        return "bg-red-600 text-white";
      case "Medium":
        return "bg-orange-300 text-white";
      case "Low":
        return "bg-teal-600 text-white";
      default:
        return "bg-gray-100 text-gray-500";
    }
  };

  return (
    <div className="overflow-x-auto p-0 rounded-lg mt-3">
      <table className="min-w-full">
        <thead>
          <tr className="text-left">
            <th className="py-3 px-4 text-gray-800 font-medium text-[13px]">
              Name
            </th>
            <th className="py-3 px-4 text-gray-800 font-medium text-[13px]">
              Status
            </th>
            <th className="py-3 px-4 text-gray-800 font-medium text-[13px]">
              Priority
            </th>
            <th className="py-3 px-4 text-gray-800 font-medium text-[13px] hidden md:table-cell">
              Created On
            </th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((task) => (
            <tr key={task._id} className="border-t border-gray-200">
              <td className="my-3 mx-4 text-gray-700 text-[13px] line-clamp-1 overflow-hidden">
                {task.title}
              </td>
              <td className="py-4 px-4">
                <span
                  className={`px-2 py-1 text-xs rounded inline-block ${handleStatusColor(
                    task.status
                  )}`}
                >
                  {task.status}
                </span>
              </td>
              <td className="py-4 px-4">
                <span
                  className={`px-2 py-1 text-xs rounded inline-block ${handlePriorityColor(
                    task.priority
                  )}`}
                >
                  {task.priority}
                </span>
              </td>
              <td className="py-4 px-4 text-gray-700 text-[13px] text-nowrap hidden md:table-cell">
                {task.createdAt
                  ? moment(task.createdAt).format("Do MMM YYYY")
                  : "N/A"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TasksTable;
