import SingleItem from "./SingleItem";
import Item from "../Interfaces/item";

interface ItemsListProps {
  items: Item[];
  loading: boolean;
  error: string;
  onDelete: (id: number) => void;
}

const ItemsList: React.FC<ItemsListProps> = ({ items, loading, error, onDelete }) => {
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
        <SingleItem key={item.id} item={item} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default ItemsList;
