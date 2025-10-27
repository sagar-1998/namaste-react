import { useState } from "react";
const User = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="user-container">
      <h1>Count: {count}</h1>
      <h1>Name: Sagar</h1>
      <h2>Location: Haryana</h2>
      <h2>Designation: Web Developer</h2>
    </div>
  );
};

export default User;
