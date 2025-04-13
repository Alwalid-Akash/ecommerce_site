import HomeItem from "../components/HomeItem";
import { useSelector } from "react-redux";

const Home = () => {
  const items = useSelector((store) => store.items ?? []); // Fallback if undefined

  if (!Array.isArray(items)) {
    console.warn("Expected 'items' to be an array, got:", items);
    return <p>Error: Items not found or invalid format.</p>;
  }

  return (
    <main>
      <div className="items-container">
        {items.length === 0 ? (
          <p>No items available.</p>
        ) : (
          items.map((item) => (
            <HomeItem key={item.id} item={item} />
          ))
        )}
      </div>
    </main>
  );
};

export default Home;
