import React from "react";
import { Product } from "../../interface/product";
import { Link } from "react-router-dom";
interface Props {
  products: Product[];
  onRemove: (id: any) => void;
}

const Dashboard = ({ products, onRemove }: Props) => {
  return (
    <div>
      <h1>HELLO ADMIN</h1>
      <Link to="/admin/product-add" className="btn btn-primary">
        Thêm sản phẩm
      </Link>
      <table className="table table-bodered table-striped text-center ">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Image</th>
            <th>Price</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.images}</td>
              <td>{item.price}</td>
              <td>{item.description}</td>
              <td>
                <Link
                  to={`/product-edit/${item.id}`}
                  className="btn btn-warning"
                >
                  Edit
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={() => onRemove(item.id)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
