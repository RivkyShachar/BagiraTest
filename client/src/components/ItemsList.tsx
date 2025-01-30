import React, { useEffect, useState, useCallback } from "react";
import SingleItem from "./SingleItem.tsx";
import Item from "../Interfaces/item";

const ItemsList: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch("https://your-api-url.com/items");
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

    fetchItems();
  }, []);

  const deleteItemSuccessHandler = useCallback(async (id: number) => {
    setItems((prevItems: Item[]) => prevItems.filter((item: Item) => item.id !== id));
  }, []);

  if (loading) {
    return <div>Loading items...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (items.length === 0) {
    return <div>No Items Exist!</div>;
  }

  return (
    <ul className="list-group">
      {items.map((item) => (
        <SingleItem
          key={item.id}
          item={item}
          onDelete={deleteItemSuccessHandler}
        />
      ))}
    </ul>
  );
};

export default ItemsList;
