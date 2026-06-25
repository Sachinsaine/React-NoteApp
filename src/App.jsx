import { useState } from "react";
import { Header } from "./Header";
import { UserContext } from "./UserContext";

function App() {
  // const products = [
  //   { id: 1, name: "Laptop", price: 50000 },
  //   { id: 2, name: "Mouse", price: 500 },
  //   { id: 3, name: "Keyboard", price: 1500 },
  // ];
  const [user, setUser] = useState({
    name: "Bruce wayne",
    role: "admin",
    theme: "dark",
  });

  let contextValue = {
    user,
    setUser,
  };
  return (
    <>
      <UserContext value={contextValue}>
        <Header />
      </UserContext>
      {/* <ShoppingCart products={products} /> */}
      {/* <TodoListWithReducer /> */}
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
