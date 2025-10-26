import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Search from "./components/Search";
import RestaurantContainer from "./components/RestaurantContainer";
import Footer from "./components/Footer";

const AppLayout = () => {
  const [searchInput, setSearchInput] = useState("");

  return (
    <div className="app-container">
      <Header />
      <RestaurantContainer />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(root.render);

root.render(<AppLayout />);
