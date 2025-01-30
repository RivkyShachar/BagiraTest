import React from "react";
import ItemsList from "./components/ItemsList.tsx";
import CreateItem from "./components/CreateItem.tsx";

const App: React.FC = () => {
  return (
    <div className="container">
      <h1 className="my-4">To-Do List</h1>
      <CreateItem />
      <ItemsList />
    </div>
  );
};

export default App;
