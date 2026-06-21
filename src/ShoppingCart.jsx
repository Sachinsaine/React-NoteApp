import { useState } from "react";

export const ShoppingCart = ({ products }) => {
  //   const [product, setProduct] = useState(products);
  const product = products;
  const [cart, setCart] = useState([]);
  const handleCart = (e) => {
    setCart([...cart, e]);
  };
  let total = cart.reduce((acc, curr) => acc + curr.price, 0);

  const handleRemove = (i) => {
    setCart(cart.filter((item) => item.id !== i));
  };
  return (
    <div>
      <h1>Shopping Cart</h1>

      <div>
        {product.map((item, index) => {
          return (
            <div key={index}>
              <div>
                {" "}
                {item.name} - ${item.price}{" "}
                <button onClick={() => handleCart(item)}>Add to cart</button>
              </div>
            </div>
          );
        })}
      </div>

      <h2>Your cart</h2>
      <div>
        Your Cart-{cart.length === 0 ? "Your cart is empty" : cart.length}{" "}
      </div>
      <div>Total Price: {total} </div>
      <div>
        {cart.map((p) => {
          return (
            <div>
              <h5>
                {p.name} - ${p.price}
              </h5>
              <button onClick={() => handleRemove(p.id)}>Remove</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
