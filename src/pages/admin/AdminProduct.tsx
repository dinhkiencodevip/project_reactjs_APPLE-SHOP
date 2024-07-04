import React from "react";
import AdminLayout from "./layouts/AdminLayout";
import { useEffect, useState } from "react";
import { instace } from "../../api";
import { Products } from "../../interface/product";
import Product from "./Product";

const AdminProduct = () => {
  const [products, setProducts] = useState<Products[]>([]);
  //   const nav = useNavigate();
  const fetchProducts = async () => {
    const { data } = await instace.get(`/products`);
    setProducts(data);
  };
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

  //   const onSubmitProduct = async (data: Products) => {
  //     const res = await instace.post(`/products`, data);
  //     setProducts([...products, res.data]);
  //     if (confirm("Thêm sản phẩm thành công")) {
  //       nav("/admin");
  //     }
  //   };
  return (
    <AdminLayout>
      <Product products={products} onRemove={handleRemove}></Product>
    </AdminLayout>
  );
};

export default AdminProduct;
