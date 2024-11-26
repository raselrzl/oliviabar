import { useState, useEffect } from "react";
import LoadingSpinner from "./loading-spinner"; // Import the LoadingSpinner component
import { BASE_API_URL } from "@/app/lib/utils";

export default function Sallad() {
  const [Sallad, setSallad] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`${BASE_API_URL}/api/data`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched data:", JSON.stringify(data, null, 2)); // More detailed log

        if (Array.isArray(data)) {
          const SalladCategory = data.find(
            (category) => category.category === "Sallad"
          );
          console.log("Sallad data:", JSON.stringify(SalladCategory, null, 2)); // More detailed log

          if (SalladCategory && Array.isArray(SalladCategory.items)) {
            setSallad(SalladCategory.items);
          } else {
            console.log(
              "Sallad category does not contain valid items:",
              SalladCategory
            );
            setError("No valid items found for Sallad category");
          }
        } else {
          console.log("Fetched data is not an array:", data);
          setError("Unexpected data format");
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
    return <div className="text-red-500 text-center">Error: {error}</div>;
  }
  if (!BASE_API_URL) {
    return null;
  }
  return (
    <>
      {Sallad.length === 0 ? (
        <div className="text-center">No Sallad available.</div>
      ) : (
        Sallad.map((Salla, index) => (
          <div
            key={index} // Using index as key since there’s no unique ID
            className="relative bg-[#F7DAD0] rounded-lg p-6 text-center shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            {/* Price Button */}
            <button className="absolute top-4 right-4 bg-black text-[#EAC6B5] font-medium py-1 px-3 rounded-lg shadow-md hover:bg-[#D4A59A]">
              {Salla.price}
            </button>

            {/* Extra Image */}
            <img
              src={Salla.src.startsWith("/") ? extra.src : `/${extra.src}`}
              alt={Salla.title}
              className="mx-auto mb-3 w-28 h-28 object-cover rounded-full shadow-sm"
            />

            {/* Extra Title */}
            <h4 className="font-semibold text-lg text-black mb-2">
              {Salla.title}
            </h4>

            {/* Description */}
            <p className="text-sm text-gray-700">
              {Salla.description || "No description available"}
            </p>
          </div>
        ))
      )}
    </>
  );
}
