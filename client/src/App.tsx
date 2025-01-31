import { useState, useEffect, useCallback } from "react";
import ItemsList from "./components/ItemsList";
import CreateItem from "./components/CreateItem";
import Item from "./Interfaces/item";

const API_URL = process.env.REACT_APP_API_URL;

const App: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const fetchItems = async () => {
    setLoading(true);
    try {
      const response: Response = await fetch(`${API_URL}/items`);
      if (!response.ok) {
        throw new Error("Failed to fetch items.");
      }
      const data: Item[] = await response.json();
      setItems(data);
    } catch (error: any) {
      setError(error.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const deleteItemHandler = useCallback((id: number) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }, []);

  return (
    <div className="container">
      <h1 className="my-4">To-Do List</h1>
      <CreateItem refreshItems={fetchItems} />
      <ItemsList
        items={items}
        onDelete={deleteItemHandler}
        loading={loading}
        error={error}
      />
    </div>
  );
};

export default App;
