import React from "react";
import { Category } from "../interface/category";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CategorySchema } from "../validators/validatorsFrom";

type Props = {
  onSubmit: (data: Category) => void;
};

const CategoryFrom = ({ onSubmit }: Props) => {
  const { id } = useParams();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Category>({
    resolver: zodResolver(CategorySchema),
  });

  return (
    <div className="edit-addProduct">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>{id ? "Edit Category" : "Add Category"}</h1>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            {...register("name")}
          ></input>
          {errors.name && (
            <span className="text-danger">{errors.name.message}</span>
          )}
        </div>
        <div className="mb-3">
          <button className="btn btn-primary w-100">
            {id ? "Edit Category" : "Add Category"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CategoryFrom;
