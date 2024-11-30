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
            key={index}
            className="my-2 max-w-screen-mdpb-2"
           >
            <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold text-black">{Varmrätte.title}</h2>
            <span className="text-md font-bold text-gray-700">{Varmrätte.price}</span>
            </div>
            <p className="mt-2 text-xs italic text-gray-600">{Varmrätte.description || ""}</p>
          </div>
        ))
      )}
    </>
  );
}
