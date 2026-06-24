import { useReducer } from "react";

export const ShoppingCart = ({ products }) => {
  let initialValue = {
    cart: [],
    product: [...products],
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "add":
        return {
          ...state,
          cart: [...state.cart, action.payload],
        };
      case "remove":
        return {
          ...state,
          cart: [
            ...state.cart.filter((item, index) => index !== action.payload),
          ],
        };
      default:
        state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialValue);
  let total = state.cart.reduce((acc, curr) => acc + curr.price, 0);
  return (
    <div>
      <h1>Shopping Cart</h1>
      <div>
        {" "}
        {state.product.map((product, index) => {
          return (
            <div key={index}>
              <span>
                {product.name} - {product.price}
              </span>
              <button
                onClick={() => dispatch({ type: "add", payload: product })}
              >
                Add to cart
              </button>
            </div>
          );
        })}
        <h1 style={{ marginTop: "20px" }}>Your cart - {state.cart.length}</h1>
        {state.cart.length === 0 ? (
          <div>your cart is empty!</div>
        ) : (
          state.cart.map((item, index) => {
            return (
              <div>
                <div>
                  {item.name} - ${item.price}
                  <button
                    onClick={() => dispatch({ type: "remove", payload: index })}
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })
        )}
        <h1>Total Amount: {total} </h1>
      </div>
    </div>
  );
};
