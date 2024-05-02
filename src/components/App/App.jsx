import { Suspense, lazy } from "react";
import Layout from "../Layout/Layout";
//import "./App.css";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("../../pages/home/Home"));
const Catalog = lazy(() => import("../../pages/catalog/Catalog"));
const Favorite = lazy(() => import("../../pages/favorite/Favorite"));

function App() {
  return (
    <Layout>
      <Suspense>
        <Routes>
          <Route path="/" element={<Home />} />;
          <Route path="/contacts" element={<Catalog />} />;
          <Route path="/login" element={<Favorite />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
