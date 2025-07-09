import productsStyle from "../styles/products.module.css";
export const Products = () => {
  return `<div>
        <h2>Products</h2>
        <div class="flex gap-5">
          <div class="flex-grow border p-3 rounded-sm">
            <h3>Sản phẩm 1</h3>
            <p>Giá: 100.000</p>
          </div>
          <div class="flex-grow border p-3 rounded-sm">
            <h3>Sản phẩm 2</h3>
            <p>Giá: 100.000</p>
          </div>
          <div class="flex-grow border p-3 rounded-sm">
            <h3>Sản phẩm 3</h3>
            <p>Giá: 100.000</p>
          </div>
        </div>
        <button class="${productsStyle.btn}">Click me</button>
    </div>`;
};
