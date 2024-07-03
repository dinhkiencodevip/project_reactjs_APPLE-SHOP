import { useEffect, useState } from "react";
import "./App.css";
import { Products } from "./interface/product";
import { Route, Routes, useNavigate } from "react-router-dom";
import { instace } from "./api";
import ProductFrom from "./component/ProductFrom";
import HomeMain from "./pages/home/HomeMain";
import MainAdmin from "./pages/admin/MainAdmin";
import Product from "./pages/admin/Product";
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
  const handleRemove = async (id: any) => {
    if (confirm("Bạn chắc chắn muốn xóa không")) {
      await instace.delete(`/products/${id}`);
      setProducts(products.filter((item) => item.id !== id));
    }
  };

  const onSubmitProduct = async (data: Products) => {
    const res = await instace.post(`/products`, data);
    setProducts([...products, res.data]);
    if (confirm("Thêm sản phẩm thành công")) {
      nav("/admin");
    }
  };
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
        <Route
          path="/admin"
          element={
            <MainAdmin products={products} handleRemove={handleRemove} />
          }
        ></Route>
        <Route
          path="/admin/product"
          element={<Product products={products} onRemove={handleRemove} />}
        />
        <Route
          path="/admin/product-add"
          element={<ProductFrom onSubmit={onSubmitProduct} />}
        />
        <Route
          path="/admin/product-edit/:id"
          element={<ProductFrom onSubmit={onSubmitProduct} />}
        />
      </Routes>
    </>
  );
}

export default App;
