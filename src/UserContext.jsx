import { createContext } from "react";

export const UserContext = createContext({
  user: { name: "Reena", role: "writer", theme: "light" },
  setUser: () => {},
});
