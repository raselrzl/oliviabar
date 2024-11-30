"use client";
import { useState } from "react";
import { Footer } from "../components/Footer";
import { BASE_API_URL } from "@/app/lib/utils";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    personnummer: "",
    message: "",
    phoneNumber: "",
    date: "",
    time: "",
    numPeople: "",
  });

  const [errors, setErrors] = useState({});
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = "Name is required";
    if (!formData.email) {
      formErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Email address is invalid";
    }
    if (!formData.personnummer) {
      formErrors.personnummer = "Personnummer is required";
    } else if (!/^\d{10}$|^\d{12}$/.test(formData.personnummer)) {
      formErrors.personnummer =
        "Personnummer must be in the format YYMMDDXXXX or YYYYMMDDXXXX";
    }
    if (!formData.phoneNumber)
      formErrors.phoneNumber = "phoneNumber is required";
    if (!formData.message) formErrors.message = "Message is required";
    if (!formData.time) formErrors.time = "Time is required";
    if (!formData.date) formErrors.date = "Date is required";
    if (!formData.numPeople)
      formErrors.numPeople = "Number of people is required";
    return formErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      try {
        // Send form data to the backend
        const response = await fetch(`${BASE_API_URL}/api/contact`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setShowConfirmation(true);
          setTimeout(() => {
            setShowConfirmation(false);
          }, 3000);

          // Clear the form data
          setFormData({
            name: "",
            email: "",
            message: "",
            phoneNumber: "",
            date: "",
            time: "",
            numPeople:"",
            personnummer:"",
          });
        } else {
          console.log("Failed to submit form");
        }
      } catch (error) {
        console.log("Error:", error);
      }
    } else {
      setErrors(formErrors);
    }
  };
  if (!BASE_API_URL) {
    return null;
  }

  function generateTimeOptions() {
    const options = [];
    const start = 15; // 3 PM
    const end = 21; // 11 PM

    // Generate time options with 15-minute intervals
    for (let hour = start; hour <= end; hour++) {
      for (let minute = 0; minute < 60; minute += 15) {
        const time = `${padZero(hour)}:${padZero(minute)}`;
        options.push(time);
      }
    }

    return options;
  }

  // Function to pad single digits with zero (e.g., 3 -> 03)
  function padZero(num) {
    return num < 10 ? `0${num}` : `${num}`;
  }
  return (
    <>
      <div className="min-h-screen">
        <div className="px-6">{/* <ImageSlider /> */}</div>
        <div className="mx-auto my-6 max-w-screen-lg bg-[#f8d8c9] p-8 text-sm uppercase text-black shadow-2xl">
          <div className="mb-8">
            <div
              className="relative mx-auto my-6 max-w-screen-lg bg-cover bg-center p-8 text-center text-sm uppercase text-black shadow-2xl"
              style={{ backgroundImage: "url('/olivia/o3.jpg')" }}
            >
              {/* Dark overlay on top */}
              <div className="absolute inset-0 bg-black/50 h-1/2"></div>

              {/* Content */}
              <h1 className="relative text-white mb-4 text-center text-3xl font-bold uppercase">
                Boka Bord
              </h1>
              <p className="relative text-md text-center text-white lg:px-40">
                Redo att njuta av en utsökt måltid på Olivia's Bar? Säkra ditt
                bord genom att boka hos oss! Oavsett om du planerar en speciell
                kväll eller bara söker en bra plats att äta, är vi här för att
                göra din upplevelse oförglömlig. Fyll i formuläret nedan, så
                bekräftar vi din bokning så snart som möjligt.
              </p>
            </div>
          </div>

          <div className="mx-auto my-6 max-w-screen-lg bg-[#f8d8c9] p-4 text-sm uppercase text-black shadow-2xl" >
            <form onSubmit={handleSubmit} className="space-y-2">
              <>
                {/* Full Name and Phone Number in one row for larger screens */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-bold text-black"
                    >
                      Namn
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name || ""}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-sm h-8 border-gray-300 p-2 text-black shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-500">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="phoneNumber"
                      className="block text-sm font-bold text-black"
                    >
                      Telefonnummer
                    </label>
                    <input
                      type="text"
                      name="phoneNumber"
                      id="phoneNumber"
                      value={formData.phoneNumber || ""}
                      onChange={handleChange}
                      className="mt-1 block w-full h-8 rounded-sm border-gray-300 p-2 text-black shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                    {errors.phoneNumber && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.phoneNumber}
                      </p>
                    )}
                  </div>
                </div>

                {/* Email and Subject in one row for larger screens */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-bold text-black"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email || ""}
                      onChange={handleChange}
                      className="mt-1 block w-full h-8 rounded-sm border-gray-300 p-2 text-black shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="personnummer"
                      className="block text-sm font-bold text-black"
                    >
                      Personnummer
                    </label>
                    <input
                      type="text"
                      name="personnummer"
                      id="personnummer"
                      value={formData.personnummer || ""}
                      onChange={handleChange}
                      maxLength={12} // Maximum length for the full format (YYYYMMDDXXXX)
                      pattern="\d{10}|\d{12}" // Ensures input is 10 or 12 digits
                      placeholder="YYYYMMDDXXXX"
                      className="mt-1 block w-full h-8 rounded-sm border-gray-300 p-2 text-black shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                    {errors.personnummer && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.personnummer}
                      </p>
                    )}
                  </div>
                </div>

                {/* Date, Time, and Number of People in one row for larger screens */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <div>
                    <label
                      htmlFor="date"
                      className="block text-sm font-bold text-black"
                    >
                      Bokning datum
                    </label>
                    <input
                      type="date"
                      name="date"
                      id="date"
                      value={formData.date || ""}
                      onChange={handleChange}
                      className="mt-1 block w-full h-8 rounded-sm border-gray-300 p-2 text-black shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                    {errors.date && (
                      <p className="mt-1 text-xs text-red-500">{errors.date}</p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="time"
                      className="block text-sm font-bold text-black"
                    >
                      Bokningstid
                    </label>
                    <select
                      name="time"
                      id="time"
                      value={formData.time || ""}
                      onChange={handleChange}
                      className="mt-1 block w-full h-8 rounded-sm border-gray-300 p-2 text-black shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    >
                      <option value="">Välj tid</option>
                      {generateTimeOptions().map((time, index) => (
                        <option key={index} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                    {errors.time && (
                      <p className="mt-1 text-xs text-red-500">{errors.time}</p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="numPeople"
                      className="block text-sm font-bold text-black"
                    >
                      Antal personer
                    </label>
                    <input
                      type="number"
                      name="numPeople"
                      id="numPeople"
                      value={formData.numPeople || ""}
                      onChange={handleChange}
                      className="mt-1 block w-full h-8 rounded-sm border-gray-300 p-2 text-black shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      min="1"
                    />
                    {formData.numPeople > 8 && (
                      <p className="mt-1 text-xs text-red-500">
                        For bookings over 8 people, please call...
                      </p>
                    )}
                  </div>
                </div>

                {/* Message in a separate row */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-bold text-black"
                  >
                    Meddelande
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    value={formData.message || ""}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-sm border-gray-300 p-2 text-black shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.message}
                    </p>
                  )}
                </div>
              </>
              <div>
                <button
                  type="submit"
                  className={`w-full px-4 py-2 ${
                    showConfirmation ? "bg-black" : "bg-black"
                  } text-[#EAC6B5] rounded-sm shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
                >
                  Bekräfta din bokning
                </button>
              </div>
            </form>
            {showConfirmation && (
              <div className="mx-auto my-6 max-w-screen-lg bg-[#f8d8c9] p-8 text-center text-sm uppercase text-black shadow-2xl">
                <p className="my-6 mb-6 text-center text-sm uppercase text-black">
                  Tack för din bokning! <br /> <br /> Din reservation har
                  mottagits och är initialt bekräftad. Vi återkommer till dig
                  snarast möjligt om det skulle uppstå några
                  tillgänglighetsproblem. Vi ser fram emot att välkomna dig till
                  Olivias Bar!
                </p>
              </div>
            )}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
