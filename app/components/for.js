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
            key={index}
            className="my-2 max-w-screen-mdpb-2"
           >
            <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold text-black">{Förätte.title}</h2>
            <span className="text-md font-bold text-gray-700">{Förätte.price}</span>
            </div>
            <p className="mt-2 text-xs italic text-gray-600">{Förätte.description || ""}</p>
          </div>
        ))
      )}
    </>
  );
}
