import { React } from "react";
import { FullBlogPage } from "./FullBlogPage";
import { Route, Routes } from "react-router-dom";
import { NavHeader } from "../ui/HeaderAndPage";
import { BlogsIndexPage } from "./BlogsIndexPage";
import { AnotherBlogPage } from "./AnotherBlogPage";
import { FetchAPIPage } from "./FetchAPIPage";
import { FetchAPIPageQueryParam } from "./FetchAPIPageQueryParam";
export function HomePage() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<NavHeader />}>
          <Route index element={<BlogsIndexPage />} />
          <Route path="/sampleblog" element={<FullBlogPage />} />
          <Route path="/anotherblog" element={<AnotherBlogPage />} />
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
