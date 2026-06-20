import { useState } from "react";

export const ShowHide = () => {
  const [password, setPassword] = useState(false);
  const handlePassword = () => {
    setPassword(!password);
  };
  return (
    <div>
      <div>
        {/* Password: <span>{password ? "*******" : "Ronnie@gmail.com"}</span>{" "} */}
        <input
          type={password ? "text" : "password"}
          placeholder="Enter password"
        />
      </div>
      <button onClick={handlePassword}>{password ? "Hide" : "Show"}</button>
    </div>
  );
};
