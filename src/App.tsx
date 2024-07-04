import { useEffect, useState } from "react";
import "./App.css";
import { Products } from "./interface/product";
import { Route, Routes, useNavigate } from "react-router-dom";
import { instace } from "./api";
import ProductFrom from "./component/ProductFrom";
import HomeMain from "./pages/home/HomeMain";
import MainAdmin from "./pages/admin/AdminPage";
import Product from "./pages/admin/Product";
import AdminProduct from "./pages/admin/AdminProduct";
import AddEditProduct from "./pages/admin/layouts/Add-EditProduct";
import AdminCategory from "./pages/admin/AdminCategory";
import AddEditCategory from "./pages/admin/layouts/AddEditCategory";
function App() {
  const [products, setProducts] = useState<Products[]>([]);
  // const [category, setCategory] = useState<Category[]>([]);
  const nav = useNavigate();
  const fetchProducts = async () => {
    const { data } = await instace.get(`/products`);
    setProducts(data);
  };
  //category
  // const fetchCategory = async () => {
  //   const { data } = await instace.get(`/category`);
  //   setCategory(data);
  // };
  // useEffect(() => {
  //   fetchCategory();
  // }, []);
  useEffect(() => {
    fetchProducts();
  }, []);
  //Product
  //end Product

  //CateGory

  // const handleRemoveCategory = async (id: any) => {
  //   if (confirm("Bạn chắc chắn muốn xóa không")) {
  //     await instace.delete(`/category/${id}`);
  //     setCategory(category.filter((item) => item.id !== id));
  //   }
  // };

  // const onSubmitCategory = async (data: Category) => {
  //   const res = await instace.post(`/category`, data);
  //   setCategory([...category, res.data]);
  //   if (confirm("Thêm danh mục thành công")) {
  //     nav("/admin");
  //   }
  // };
  return (
    <>
      <Routes>
        <Route index element={<HomeMain />}></Route>
        <Route path="/admin" element={<MainAdmin />}></Route>
        <Route path="/admin/product" element={<AdminProduct />} />
        <Route path="/admin/product-add" element={<AddEditProduct />} />
        <Route path="/admin/product-edit/:id" element={<AddEditProduct />} />
        <Route path="/admin/category" element={<AdminCategory />} />
        <Route path="/admin/category-add" element={<AddEditCategory />} />
        <Route path="/admin/category-edit/:id" element={<AddEditCategory />} />
      </Routes>
    </>
  );
}

export default App;
