import { React, useState } from "react";
import { FullBlogPage } from "./FullBlogPage";
import { Route, Routes } from "react-router-dom";
import { NavHeader } from "../ui/HeaderAndPage";
import { BlogsIndexPage, LoginPage } from "./LoginPage";
import { AnotherBlogPage, ProductsPage } from "./ProductsPage";
import { FetchAPIPage } from "./FetchAPIPage";
import { FetchAPIPageQueryParam } from "./FetchAPIPageQueryParam";
export function HomePage() {
  const [showNavHeader, setShowNavHeader] = useState(false);
  const updateNavHeader = (flag) => {
    setShowNavHeader(flag);
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<NavHeader showNavHeader={showNavHeader} />}>
          <Route
            index
            element={<LoginPage updateNavHeader={updateNavHeader} />}
          />
          <Route
            path="/products"
            element={<ProductsPage updateNavHeader={updateNavHeader} />}
          />
          <Route path="/test/fetchapi/:id" element={<FetchAPIPage />} />
          <Route
            path="/test/fetchapiquery"
            element={<FetchAPIPageQueryParam />}
          />
        </Route>
      </Routes>
    </div>
  );
}
