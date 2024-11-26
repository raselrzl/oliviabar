import { useState, useEffect } from "react";
import LoadingSpinner from "./loading-spinner"; // Import the LoadingSpinner component
import { BASE_API_URL } from "../lib/utils";

export default function Förätter() {
  const [Förätter, setFörätter] = useState([]);
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
        console.log("Fetched data:", data);

        if (Array.isArray(data)) {
          const FörätterCategory = data.find(
            (category) => category.category === "Förätter",
          );
          console.log("Förätter category:", FörätterCategory);

          if (FörätterCategory) {
            setFörätter(FörätterCategory.items);
          } else {
            setError("Förätter category not found");
          }
        } else {
          setError("Unexpected data format: Data is not an array");
        }

        setLoading(false);
      })
      .catch((err) => {
        console.log("Fetch error:", err);
        setError("Error fetching data: " + err.message);
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
    return <div className="text-center text-red-500">Error: {error}</div>;
  }
  if (!BASE_API_URL) {
    return null;
  }
  return (
    <>
      {Förätter.length === 0 ? (
        <div className="text-center text-gray-500">No Förätter available</div>
      ) : (
        Förätter.map((Förätte, index) => (
          <div
            key={index} // Use index as the key since there's no unique ID
            className="relative rounded-lg bg-[#F7DAD0] p-6 text-center shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg "
          >
            {/* Price Button */}
            <button className="absolute right-4 top-4 rounded-lg bg-black px-3 py-1 font-medium text-[#EAC6B5] shadow-md hover:bg-[#D4A59A]">
              {Förätte.price}
            </button>

            {/* Pizza Image */}
            <img
              src="olivia/for1.jpg"
              alt={Förätte.title}
              className="mx-auto mb-3 h-28 w-28 rounded-full object-cover shadow-sm"
            />

            {/* Pizza Title */}
            <h4 className="mb-2 text-lg font-semibold text-black">
              {Förätte.title}
            </h4>

            {/* Description */}
            <p className="text-sm text-gray-700 ">
              {Förätte.description || "No description available"}
            </p>
          </div>
        ))
      )}
    </>
  );
}
