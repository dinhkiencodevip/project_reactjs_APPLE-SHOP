import React from "react";
import { Products } from "../../interface/product";
import { Link } from "react-router-dom";
interface Props {
  // category: Category[];
  products: Products[];
  onRemove: (id: any) => void;
}

const Product = ({ products, onRemove }: Props) => {
  return (
    <div>
      <h1>HELLO ADMIN</h1>

      {/* Product */}
      <h2>Product</h2>
      <table className="table table-bodered table-striped text-center ">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Image</th>
            <th>Brand</th>
            <th>Quantity</th>
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
              <td>
                {
                  <img
                    src={item.images}
                    alt=""
                    style={{ width: "180px", height: "200px" }}
                  />
                }
              </td>
              <td>{item.brand}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
              <td>{item.description}</td>
              <td>
                <Link
                  to={`/admin/product-edit/${item.id}`}
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
      <Link to="/admin/product-add" className="btn btn-primary">
        Thêm sản phẩm
      </Link>
    </div>
  );
};

export default Product;
