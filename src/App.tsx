import { useEffect, useState } from "react";
import "./App.css";
import { Products } from "./interface/product";
import { Route, Routes, useNavigate } from "react-router-dom";
import { instace } from "./api";
import Dashboard from "./pages/admin/Dashboard";
import ProductFrom from "./component/ProductFrom";

function App() {
  const [products, setProducts] = useState<Products[]>([]);
  const nav = useNavigate();
  const fetchProducts = async () => {
    const { data } = await instace.get(`/products`);
    setProducts(data);
  };
  useEffect(() => {
    fetchProducts();
  }, []);

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
  return (
    <>
      <Routes>
        <Route index element></Route>
        <Route
          path="/admin"
          element={<Dashboard products={products} onRemove={handleRemove} />}
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
