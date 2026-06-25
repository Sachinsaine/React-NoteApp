import { UserContext } from "./UserContext";
import { useContext } from "react";

export const Avatar = () => {
  const user = useContext(UserContext);
  return (
    <div>
      <h3>Avatar</h3>
      <p>Welcome, {user.name}!</p>
    </div>
  );
};
