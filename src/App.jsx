import { Header } from "./Header";
import { UserContextProvider } from "./UserContextProvider";

function App() {
  return (
    <>
      <UserContextProvider>
        <Header />
      </UserContextProvider>

      {/* <Notes /> */}
    </>
  );
}

export default App;
