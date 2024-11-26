import { useState, useEffect } from "react";
import LoadingSpinner from "./loading-spinner";
import { BASE_API_URL } from "@/app/lib/utils";

export default function Varmrätter() {
  const [Varmrätter, setVarmrätter] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // Initial loading state should be true

  useEffect(() => {
    fetch(`${BASE_API_URL}/api/data`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Log the data structure
        console.log("API data:", data);

        if (Array.isArray(data)) {
          // Find the '' category
          const VarmrätterCategory = data.find(
            (category) => category.category === "Varmrätter"
          );
          console.log("Varmrätter category:", VarmrätterCategory);

          if (VarmrätterCategory) {
            setVarmrätter(VarmrätterCategory.items);
          } else {
            throw new Error("Varmrätter category not found");
          }
        } else {
          throw new Error("Unexpected data format: Data is not an array");
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
      {Varmrätter.length === 0 ? (
        <div className="text-center text-gray-500">No Varmrätter available</div>
      ) : (
        Varmrätter.map((Varmrätte, index) => (
          <div
            key={index} // Use index as the key since there's no unique ID
            className="relative bg-[#F7DAD0] rounded-lg p-6 text-center shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            {/* Price Button */}
            <button className="absolute top-4 right-4 bg-black text-[#EAC6B5] font-medium py-1 px-3 rounded-lg shadow-md hover:bg-[#D4A59A]">
              {Varmrätte.price}
            </button>

            {/* Burger Image */}
            <img
              src={Varmrätte.src}
              alt={Varmrätte.title}
              className="mx-auto mb-3 w-28 h-28 object-cover rounded-full shadow-sm"
            />

            {/* Burger Title */}
            <h4 className="font-semibold text-lg text-black mb-2">
              {Varmrätte.title}
            </h4>

            {/* Description */}
            <p className="text-sm text-gray-700">
              {Varmrätte.description || "No description available"}
            </p>
          </div>
        ))
      )}
    </>
  );
}
