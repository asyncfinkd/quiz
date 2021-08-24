import React, { useContext } from "react";
import "./AdminSidebar.css";
import { Link } from "react-router-dom";
import { ApplicationContext } from "../../../context/App/ApplicationContext";

export default function AdminSidebar({ language }) {
  const { clicked, setClicked } = useContext(ApplicationContext);
  return (
    <>
      <div className={clicked ? "sidebar__none" : "sidebar__container"}>
        <ul className="sidebar__container-ul">
          <li className="sidebar__container-li__prev"></li>
          <Link to="/admin" className="sidebar__container-li">
            <div className="sidebar__container-li__content">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="Layer_1"
                className="sidebar__container-li__contentSVG"
                viewBox="0 0 20 20"
              >
                <path
                  id="dashboard"
                  d="M3,5.222A2.222,2.222,0,0,1,5.222,3H9.667a2.222,2.222,0,0,1,2.222,2.222V9.667a2.222,2.222,0,0,1-2.222,2.222H5.222A2.222,2.222,0,0,1,3,9.667Zm6.667,0H5.222V9.667H9.667Zm4.444,0A2.222,2.222,0,0,1,16.333,3h4.444A2.222,2.222,0,0,1,23,5.222V9.667a2.222,2.222,0,0,1-2.222,2.222H16.333a2.222,2.222,0,0,1-2.222-2.222Zm6.667,0H16.333V9.667h4.444ZM3,16.333a2.222,2.222,0,0,1,2.222-2.222H9.667a2.222,2.222,0,0,1,2.222,2.222v4.444A2.222,2.222,0,0,1,9.667,23H5.222A2.222,2.222,0,0,1,3,20.778Zm6.667,0H5.222v4.444H9.667Zm4.444,0a2.222,2.222,0,0,1,2.222-2.222h4.444A2.222,2.222,0,0,1,23,16.333v4.444A2.222,2.222,0,0,1,20.778,23H16.333a2.222,2.222,0,0,1-2.222-2.222Zm6.667,0H16.333v4.444h4.444Z"
                  transform="translate(-3 -3)"
                ></path>
              </svg>
              <p className="sidebar__container-li__paragraph">
                {language === "English" ? "Home" : "Дом"}
              </p>
            </div>
          </Link>
        </ul>
      </div>
    </>
  );
}
