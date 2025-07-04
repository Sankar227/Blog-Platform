import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Layout from "./pages/Admin/Layout";
import Dashboard from "./pages/Admin/Dashboard";
import AddBlog from "./pages/Admin/AddBlog";
import ListBlog from "./pages/Admin/ListBlog";
import Comments from "./pages/Admin/Comments";
import Login from "./components/admin/Login";
import 'quill/dist/quill.snow.css';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/admin" element={true ? <Layout /> : <Login />}>
            <Route index element={<Dashboard />} />
            <Route path="addBlog" element={<AddBlog />} />
            <Route path="listBlog" element={<ListBlog />} />
            <Route path="comments" element={<Comments />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
