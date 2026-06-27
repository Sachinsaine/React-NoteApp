import { UserContext } from "./UserContext";
import { useContext } from "react";

export const Avatar = () => {
  const { user, setUser } = useContext(UserContext);
  const toggle = () => {
    setUser({
      ...user,
      theme: user.theme === "dark" ? "light" : "dark",
    });
  };
  return (
    <div>
      <h3>Avatar</h3>
      <p>Welcome, {user.name}!</p>
      <p>Current theme: {user.theme}</p>
      <button onClick={toggle}>change theme</button>
    </div>
  );
};
