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
            key={index}
            className="my-2 max-w-screen-mdpb-2"
           >
            <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold text-black">{Bernmen.title}</h2>
            <span className="text-md font-bold text-gray-700">{Bernmen.price}</span>
            </div>
            <p className="mt-2 text-xs italic text-gray-600">{Bernmen.description || ""}</p>
          </div>
        ))
      )}
    </>
  );
}
