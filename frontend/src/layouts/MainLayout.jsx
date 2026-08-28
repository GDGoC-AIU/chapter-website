import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";

import "../styles/layout.css";

function MainLayout() {
  return (
    <div className="app-layout">
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
