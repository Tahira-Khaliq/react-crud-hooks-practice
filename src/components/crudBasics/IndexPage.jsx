import React from "react";
import { useNavigate, Outlet } from "react-router-dom";
import "./styles.css";
import { IoIosAddCircle } from "react-icons/io";
import { MdChromeReaderMode } from "react-icons/md";
import { GrUpdate } from "react-icons/gr";
import { MdDeleteForever } from "react-icons/md";

function IndexPage() {
  const navigate = useNavigate();

  return (
    <div className="index-container">
      <h1>Category Management</h1>
      <p className="index-subtitle">
        Use the options below to manage your categories
      </p>

      <div className="index-actions">
        <button
          onClick={() => navigate("/categories/create")}
          className="index-btn create"
        >
          <IoIosAddCircle size={28}/> Add Category
        </button>

        <button
          onClick={() => navigate("/categories/read")}
          className="index-btn read"
        >
          <MdChromeReaderMode size={28}/> Read Categories
        </button>

        <button
          onClick={() => navigate("/categories/update")}
          className="index-btn update"
        >
          <GrUpdate size={28}/> Update Category
        </button>

        <button
          onClick={() => navigate("/categories/delete")}
          className="index-btn delete"
        >
          <MdDeleteForever size={28}/> Delete Category
        </button>
      </div>

      {/* Nested routes will render here */}
      <div className="index-outlet">
        <Outlet />
      </div>
    </div>
  );
}

export default IndexPage;
