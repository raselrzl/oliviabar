"use client"
import { useState, useEffect } from "react";
import LoadingSpinner from "../components/loading-spinner"; // Import the LoadingSpinner component
import { BASE_API_URL } from "@/app/lib/utils";

export default function Bernmeny() {
  const [Bernmeny, setBernmeny] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_API_URL}/api/data`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();

        console.log("Fetched data:", data);

        if (Array.isArray(data)) {
          const BernmenyCategory = data.find(
            (category) => category.category === "Bernmeny",
          );
          console.log("Bernmeny category:", BernmenyCategory);

          if (
            BernmenyCategory &&
            Array.isArray(BernmenyCategory.items)
          ) {
            setBernmeny(BernmenyCategory.items);
          } else {
            throw new Error(
              "Bernmeny category or items are missing or in wrong format",
            );
          }
        } else {
          throw new Error("Fetched data is not an array");
        }
      } catch (err) {
        console.log("Fetch error:", err);
        setError("Error fetching data: " + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div>
        <LoadingSpinner />
      </div>
    ); // Show the spinner while loading
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>; // Show the error message
  }

  if (!BASE_API_URL) {
    return null;
  }

  return (
    <>
      {Bernmeny.length === 0 ? (
        <div className="text-center text-gray-500">
          No Bernmeny available
        </div>
      ) : (
        Bernmeny.map((Bernmen, index) => (
          <div
            key={index} // Use index as the key if there is no unique ID
            className="relative rounded-lg bg-[#F7DAD0] p-6 text-center shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            {/* Price Button text-[#EAC6B5]*/}
            <button className="absolute right-4 top-4 text-sm rounded-lg bg-black px-3 py-1 font-medium text-[#EAC6B5] shadow-md hover:bg-[#D4A59A]">
              {Bernmen.price}
            </button>

            {/* Pizza Image */}
            <img
              src={Bernmen.src}
              alt={Bernmen.title}
              className="mx-auto mb-3 h-28 w-28 rounded-full object-cover shadow-sm"
            />

            {/* Pizza Title */}
            <h4 className="mb-2 text-md font-semibold text-black">
              {Bernmen.title}
            </h4>

            {/* Description */}
           { <p className="text-xs text-gray-700">
              {Bernmen.description || ""}
            </p>}
          </div>
        ))
      )}
    </>
  );
}
