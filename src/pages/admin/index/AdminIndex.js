import React, { useContext } from "react";
import AdminNavbar from "../../../components/admin/navbar/AdminNavbar";
import AdminSidebar from "../../../components/admin/sidebar/AdminSidebar";
import { ApplicationContext } from "../../../context/App/ApplicationContext";
import "./AdminIndex.css";

export default function AdminIndex({ language }) {
  const { clicked, setClicked } = useContext(ApplicationContext);
  return (
    <>
      <AdminNavbar language={language} />
      <AdminSidebar language={language} />
      <div
        className={
          clicked ? "admin__wrapper__full admin__wrapper" : "admin__wrapper"
        }
      >
        <div className="admin__wrapper__content">Home Content</div>
      </div>
    </>
  );
}
