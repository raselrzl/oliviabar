import { useState, useEffect } from "react";
import LoadingSpinner from "./loading-spinner";
import { BASE_API_URL } from "@/app/lib/utils";
import Image from "next/image";

export default function Drinks() {
  const [drinks, setDrinks] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${BASE_API_URL}/api/data`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Log the fetched data
        console.log("Fetched data:", data);

        if (Array.isArray(data)) {
          const drinksCategory = data.find(
            (category) => category.category === "Drinks"
          );

          // Check if drinksCategory is an object with items array
          if (drinksCategory && Array.isArray(drinksCategory.items)) {
            setDrinks(drinksCategory.items);
          } else {
            throw new Error("Invalid data structure for Drinks category");
          }
        } else {
          throw new Error("Expected data to be an array");
        }
      })
      .catch((err) => {
        console.log("Fetch error:", err);
        setError("Error fetching data: " + err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div>
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500 text-center">Error: {error}</div>;
  }
  if (!BASE_API_URL) {
    return null;
  }
  return (
    <>
      {drinks.length === 0 ? (
        <div className="text-center text-gray-500">No available</div>
      ) : (
        drinks.map((drink, index) => (
          <div
        key={index}
        className="my-2 max-w-screen-mdpb-2"
       >
        <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold text-black">{drink.title}</h2>
        <span className="text-md font-bold text-gray-700">{drink.price}</span>
        </div>
        <p className="mt-2 text-xs italic text-gray-600">{drink.description || ""}</p>
      </div>
        ))
      )}
    </>
  );
}
