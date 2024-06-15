import { React, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { NavHeader } from "../ui/HeaderAndPage";
import { BlogsIndexPage, LoginPage } from "./LoginPage";
import { AnotherBlogPage, ProductsPage } from "./ProductsPage";
import { FetchAPIPage } from "./FetchAPIPage";
import { AdminPage } from "./Admin";
export function HomePage() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<NavHeader />}>
          <Route index element={<LoginPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/test/fetchapi/:id" element={<FetchAPIPage />} />
        </Route>
      </Routes>
    </div>
  );
}
