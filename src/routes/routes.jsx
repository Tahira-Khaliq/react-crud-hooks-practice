import { Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";
import IndexPage from "../components/crudBasics/IndexPage";
import CreateCategory from "../components/crudBasics/CreateCategory";
import ReadCategory from "../components/crudBasics/ReadCategory";
import UpdateCategory from "../components/crudBasics/UpdateCategory";
import DeleteCategory from "../components/crudBasics/DeleteCategory";

const Home = React.lazy(() => import("../pages/home/Home"));
const Sales = React.lazy(() => import("../pages/sales/Sales"));
const Products = React.lazy(() => import("../pages/products/Products"));
// const AboutUs = React.lazy(() => import("../pages/aboutUs/AboutUs"));
const Support = React.lazy(() => import("../props/CompC"));

function AppRoutes() {
  return (
    <Suspense fallback={<div>Loading page...</div>}>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/products" element={<Products />} />
        {/* <Route path="/about-us" element={<AboutUs />} /> */}
        <Route path="/support" element={<Support />} />

        {/* Parent route for CRUD */}
        <Route path="/categories" element={<IndexPage />}>
          <Route path="create" element={<CreateCategory />} />
          <Route path="read" element={<ReadCategory />} />
          <Route path="update" element={<UpdateCategory />} />
          <Route path="delete" element={<DeleteCategory />} />
        </Route>


        {/* Seperate routes */}

        {/* <Route path="/categories" element={<IndexPage />} />
        <Route path="/categories/create" element={<CreateCategory />} />
        <Route path="/categories/read" element={<ReadCategory />} />
        <Route path="/categories/update" element={<UpdateCategory />} />
        <Route path="/categories/delete" element={<DeleteCategory />} /> */}
      </Routes>
    // </Suspense>
  );
}

export default AppRoutes;
