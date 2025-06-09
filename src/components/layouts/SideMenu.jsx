import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SIDE_MENU_DATA, SIDE_MENU_USER_DATA } from "../../utilities/data";
import { userContext } from "../../context/userContext";

const SideMenu = ({ activeMenu }) => {
  const { user, clearUser } = useContext(userContext);
  // console.log("Current user object:", user);
  const [sideMenuData, setSideMenuData] = useState([]);

  // const navigate = useNavigate();
  // useEffect(() => {
  //   console.log("SideMenu - user object:", user);
  //   if (user) {
  //     console.log("SideMenu - user.role:", user.role);
  //     setSideMenuData(
  //       user?.role === "admin" ? SIDE_MENU_DATA : SIDE_MENU_USER_DATA
  //     );
  //   } else {
  //     console.log("SideMenu - user is null or undefined.");
  //     setSideMenuData(SIDE_MENU_USER_DATA); // Or a default empty state
  //   }
  // }, [user]);

  const handleClick = (route) => {
    if (route === "logout") {
      handelLogout();
      return;
    }

    navigate(route);
  };

  const handelLogout = () => {
    localStorage.clear();
    clearUser();
    navigate("/login");
  };

  useEffect(() => {
    if (user) {
      setSideMenuData(
        user?.role === "admin" ? SIDE_MENU_DATA : SIDE_MENU_USER_DATA
      );
    }
    return () => {};
  }, [user]);

  return (
    <div className="w-64 h-[calc(100vh-61px)] bg-white border-r border-gray-200/50 sticky top-[61px] z-20">
      <div className="flex flex-col items-center justify-center mb-7 pt-5">
        <div className="relative">
          <img
            src={user?.profileImageUrl || null}
            alt="Profile Image"
            className="w-25 h-25 bg-slate-400 rounded-full"
          />
        </div>

        {user?.role === "admin" && (
          <div className="text-[16px] font-medium text-white bg-green-800 px-3 py-0.5 rounded mt-5">
            Admin
          </div>
        )}

        <h5 className="text-gray-950 font-medium text-xl leading-6 mt-2">
          {user?.name || ""}
        </h5>

        <p className="text-[14px] text-gray-500">{user?.email || ""}</p>
      </div>
      {/*  display sidebar menu data with icons */}
      {sideMenuData.map((item, index) => (
        <button
          key={`menu_${index}`}
          className={`w-full flex items-center gap-4 text-[20px]  ${
            activeMenu == item.label
              ? "text-primary bg-linear-to-r from-blue-50/40 to-blue-100/50 border-r-3"
              : ""
          } py-3 px-6 mb-3 cursor-pointer`}
          onClick={() => handleClick(item.path)}
        >
          <item.icon className="text-xl" />
          {item.label}
        </button>
      ))}
    </div>
  );
};

export default SideMenu;
