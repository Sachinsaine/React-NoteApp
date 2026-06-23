// import { CounterWithReducer } from "./CounterWithReducer";
// import { ShoppingCartWithReducer } from "./ShoppingCartWithReducer";
import { TodoListWithReducer } from "./TodoListWithReducer";
// import { ToggleWithReducer } from "./ToggleWithUseReducer";
// import { ShoppingCart } from "./ShoppingCart";
// import { Todo } from "./Todo";

function App() {
  // const products = [
  //   { id: 1, name: "Laptop", price: 50000 },
  //   { id: 2, name: "Mouse", price: 500 },
  //   { id: 3, name: "Keyboard", price: 1500 },
  // ];
  return (
    <>
      <TodoListWithReducer />
      {/* <ToggleWithReducer /> */}
      {/* <ShoppingCartWithReducer /> */}
      {/* <ShoppingCart products={products} /> */}
      {/* <Todo /> */}
      {/* <Like /> */}
      {/* <ShowHide /> */}
      {/* <Alert type="success">Profile updated successfully</Alert>
      <Alert type="error">Profile updated successfully</Alert> */}

      {/* <Notes /> */}
    </>
  );
}

export default App;
