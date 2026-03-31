<<<<<<< Updated upstream
<<<<<<< HEAD
=======
>>>>>>> Stashed changes
import "../assets/style.css";
export default function Product({ product }) {
  return (
    <div className={`product ${product.isActive ? "active" : ""}`}>
      <h2>{product.name}</h2>
      <p>Price: {product.price.toLocaleString()}</p>

      <button>Add To Cart</button>
    </div>
  );
}
//Yêu cầu: Nếu sản phẩm nào có isActive = true --> Hiển thị thêm class active
//Nếu sản phẩm nào có attributes --> Hiển thị component Attribute vào trước button "Add To Cart"
//Bên component Attribute: Hiển thị danh sách attribute tương ứng
<<<<<<< Updated upstream
=======
import "../assets/style.css";
export default function Product({ product }) {
  return (
    <div className={`product ${product.isActive ? "active" : ""}`}>
      <h2>{product.name}</h2>
      <p>Price: {product.price.toLocaleString()}</p>

      <button>Add To Cart</button>
    </div>
  );
}
//Yêu cầu: Nếu sản phẩm nào có isActive = true --> Hiển thị thêm class active
//Nếu sản phẩm nào có attributes --> Hiển thị component Attribute vào trước button "Add To Cart"
//Bên component Attribute: Hiển thị danh sách attribute tương ứng
>>>>>>> 08b3f08 (Update code)
=======
>>>>>>> Stashed changes
