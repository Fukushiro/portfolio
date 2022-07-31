import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";

export const urls = {
  home: "/",
};

export function RoutesManager() {
  return (
    <Routes>
      <Route path={urls.home} element={<Home />} />
    </Routes>
  );
}
