import AdminHeader from "./AdminHeader";
import MenuAdmin from "./MenuAdmin";
import { Route, Routes } from "react-router-dom";
import Product from "./Product";

const MainAdmin = ({ products, handleRemove }) => {
  // Nhận props products và handleRemove từ component cha
  return (
    <div>
      <AdminHeader />
      <MenuAdmin />
      <Routes>
        {/* Định nghĩa route cho Product */}
        <Route
          path="/admin/product"
          element={<Product products={products} onRemove={handleRemove} />} // Truyền props vào Product
        />
      </Routes>
    </div>
  );
};

export default MainAdmin;
