import React from "react";
import { Category } from "../../interface/category";
import { Link } from "react-router-dom";
interface Props {
  categorys: Category[];
  onRemove: (id: any) => void;
}

const Categoryy = ({ categorys, onRemove }: Props) => {
  return (
    <div className="product">
      <h2>Category</h2>
      <table className="table table-bodered table-striped text-center ">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {categorys.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>
                <Link
                  to={`/admin/category/${item.id}`}
                  className="btn btn-warning mx-2"
                >
                  Edit
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={() => onRemove(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/admin/category-add" className="btn btn-primary">
        Add Category
      </Link>
    </div>
  );
};

export default Categoryy;
