import { useEffect, useState } from "react";
import "./App.css";
import { Product } from "./interface/product";
import { Route, Routes, useNavigate } from "react-router-dom";
import { instace } from "./api";
import Dashboard from "./pages/admin/Dashboard";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const nav = useNavigate();
  const fetchProducts = async () => {
    const { data } = await instace.get(`/product`);
    setProducts(data);
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  const handleRemove = async (id: any) => {
    if (confirm("Bạn chắc chắn muốn xóa không")) {
      await instace.delete(`/product/${id}`);
      setProducts(products.filter((item) => item.id !== id));
    }
  };

  const onSubmitProduct = async (data: Product) => {
    const res = await instace.post(`/products`, data);
    setProducts([...products, res.data]);
    nav("/admin");
  };
  return (
    <>
      <Routes>
        <Route index element></Route>
        <Route
          path="/admin"
          element={<Dashboard products={products} onRemove={handleRemove} />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
