import React from "react";
import ArticlePage from "../ArticlePage/ArticlePage";
import MainPage from "../MainPage/MainPage";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";

const Program = () => {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<MainPage />} />
        <Route path={"/artical/:id/"} element={<ArticlePage />} />
      </Routes>
    </>
  );
};

export default Program;
