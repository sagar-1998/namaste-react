import React from "react";
import ReactDOM from "react-dom/client";
import data from "./data.json";
console.log(data);

const parsedData = data;
// React Component
const Title = () => (
  <h1 draggable className="heading">
    JSX is a nice way to write React Code! 🚀
  </h1>
);

const description = <h2>This is a temporary description</h2>;

// React Component
const Logo = () => {
  return <img className="header-logo" src={parsedData.logo} alt="logo" />;
};

const SearchBar = () => {
  return (
    <div className="header-search-bar-container">
      <input className="header-search-bar" type="text" />
    </div>
  );
};

const UserIcon = () => {
  return (
    <img className="header-avatar" src={parsedData.userIcon} alt="User Icon" />
  );
};
const HeadingComponent = () => {
  return (
    <header className="header">
      <Logo />
      <SearchBar />
      <UserIcon />
      {/* {description} */}
      {/* <Title />
      <Title></Title>
      {Title()}
      <h1>This is a Functional Component 🚀</h1> */}
    </header>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(root.render);

root.render(<HeadingComponent />);
