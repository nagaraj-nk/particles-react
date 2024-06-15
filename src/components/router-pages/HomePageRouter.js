import { React, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { NavHeader } from "../ui/HeaderAndPage";
import { LoginPage } from "./LoginPage";
import { ProductsPage } from "./ProductsPage";
import { AdminPage } from "./Admin";
export function HomePage() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<NavHeader />}>
          <Route index element={<LoginPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Route>
      </Routes>
    </div>
  );
}
