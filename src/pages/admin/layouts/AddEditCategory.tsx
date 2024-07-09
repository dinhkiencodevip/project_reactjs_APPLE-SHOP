import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { instace } from "../../../api";
import AdminLayout from "./AdminLayout";
import CategoryFrom from "../../../component/Category";
import { Category } from "../../../interface/category";

const AddEditCategory = () => {
  const [category, setCategory] = useState<Category[]>([]);
  const nav = useNavigate();
  const fetchProducts = async () => {
    const { data } = await instace.get(`/category`);
    setCategory(data);
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  const onSubmitProduct = async (data: Category) => {
    if (data.id) {
      await instace.put(`/category/${data.id}`, data);
      const newData = await instace.get("/products");
      setCategory(newData.data);
    } else {
      const res = await instace.post(`/category`, data);
      setCategory([...category, res.data]);
    }
    if (confirm("Succesfull, redirect to admin page?")) {
      nav("/admin/product");
    }
  };
  return (
    <div>
      <AdminLayout>
        <CategoryFrom onSubmit={onSubmitProduct}></CategoryFrom>
      </AdminLayout>
    </div>
  );
};

export default AddEditCategory;
