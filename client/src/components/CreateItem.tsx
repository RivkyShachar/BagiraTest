import React, { useState } from "react";
import { CreateItemDto } from "../DTOs/createItem.dto";

interface CreateItemProps {
  refreshItems: () => void;
}

const CreateItem: React.FC<CreateItemProps> = ({ refreshItems }) => {
  const [newItem, setNewItem] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const validateInput = (value: string) => {
    if (!value.trim()) {
      setError("Item name is required.");
      return false;
    }
    if (value.length < 3) {
      setError("Item name must be at least 3 characters.");
      return false;
    }
    if (value.length > 100) {
      setError("Item name must be less than 100 characters.");
      return false;
    }
    setError("");
    return true;
  };

  const addItemHandler = async () => {
    if (!validateInput(newItem)) return;

    const item: CreateItemDto = { name: newItem };

    setIsLoading(true);

    try {
      const response: Response = await fetch(
        "http://localhost:8081/api/items",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(item),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to add item");
      }
      
      refreshItems();
      setNewItem("");
      setError("");
      // alert("Item added successfully!");
    } catch (error: any) {
      setError(error.message || "An unexpected error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value: string = e.target.value;
    setNewItem(value);
    validateInput(value);
  };

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className={`form-control ${error ? "is-invalid" : ""}`}
        placeholder="Add a new item"
        value={newItem}
        onChange={onChangeHandler}
        disabled={isLoading}
      />
      <button
        className="btn btn-primary"
        onClick={addItemHandler}
        disabled={isLoading}
      >
        {isLoading ? "Adding..." : "Add"}
      </button>
      <div className="invalid-feedback">{error}</div>
    </div>
  );
};

export default CreateItem;
