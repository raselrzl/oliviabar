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
    <div>
      <p className="m-2 flex w-auto items-center justify-center rounded italic px-2 py-2 text-xs text-black">
        (Pommes duchesse, primörer, tomat, broccoli och baconlindad sparris.
        Serveras med handslagen bearnaisesås och kryddsmör.)
      </p>
      <p className="flex font-semibold items-center justify-start gap-2 rounded py-2 uppercase text-sm text-black">
        Välj Mellan
      </p>

      {Sallad.length === 0 ? (
        <div className="text-center">Not available.</div>
      ) : (
        Sallad.map((Salla, index) => (
          <div key={index} className="my-2 max-w-screen-mdpb-2">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold text-black">
                *{Salla.title}
              </h2>
              <span className="text-md font-bold text-gray-700">
                {Salla.price}
              </span>
            </div>
            <p className="mt-2 text-xs italic text-gray-600">
              {Salla.description || ""}
            </p>
          </div>
        ))
      )}
    </div>
  );
}
