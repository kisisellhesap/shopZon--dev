import React from "react";
import Header from "../components/childComponents/Header";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getData } from "../redux/action";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const MainLayout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, []);

  return (
    <main>
      <Header />
      <Outlet />
      <ToastContainer />
    </main>
  );
};

export default MainLayout;
