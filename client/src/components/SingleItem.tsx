import React from "react";
import Item from "../Interfaces/item";

interface SingleItemProps {
  item: Item;
  onDelete: (id: number) => void;
}

const SingleItem: React.FC<SingleItemProps> = ({ item, onDelete }) => {
  const deleteItemHandler = async (id: number) => {
    try {
      const response: Response = await fetch(`https://your-api-url.com/items/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete item");
      }

      onDelete(id);
    } catch (error: any) {
      console.error(error.message || "An unexpected error occurred.");
    }
  };

  return (
    <li
      key={item.id}
      className="list-group-item d-flex justify-content-between align-items-center"
    >
      {item.name}
      <button
        className="btn btn-danger"
        onClick={() => deleteItemHandler(item.id)}
      >
        <i className="bi bi-trash"></i>
      </button>
    </li>
  );
};

export default SingleItem;
