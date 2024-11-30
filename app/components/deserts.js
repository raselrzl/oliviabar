import { useState, useEffect } from 'react';
import LoadingSpinner from './loading-spinner';
import { BASE_API_URL } from '@/app/lib/utils';

export default function Deserts() {
  const [deserts, setDeserts] = useState([]);
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
        // Log the entire data object to the console for debugging
        console.log('Fetched data:', data);

        // Check if the fetched data is an array
        if (Array.isArray(data)) {
          // Find the Deserts category
          const desertsCategory = data.find(category => category.category === 'Deserts');
          console.log('Deserts data:', desertsCategory);

          // Extract the items from the Deserts category if it exists
          const desertsData = desertsCategory ? desertsCategory.items : [];
          setDeserts(desertsData);  // Set the Deserts data to state
        } else {
          console.log('Fetched data is not an array:', data);
          setError('Unexpected data format');
        }

        setLoading(false);
      })
      .catch((err) => {
        console.log('Fetch error:', err);
        setError('Error fetching data: ' + err.message);  // Set error message if fetching data fails
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div><LoadingSpinner /></div>;
  }

  if (error) {
    return <div className='text-red-500 text-center'>Error: {error}</div>;
  }

  if(!BASE_API_URL){
    return null;
}

  return (
    <>
      {deserts.map((desert, index) => (
        <div
        key={index}
        className="my-2 max-w-screen-mdpb-2"
       >
        <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold text-black">{desert.title}</h2>
        <span className="text-md font-bold text-gray-700">{desert.price}</span>
        </div>
        <p className="mt-2 text-xs italic text-gray-600">{desert.description || ""}</p>
      </div>
      
      ))}
    </>
  );
}
