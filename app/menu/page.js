"use client";
import { useState, lazy, Suspense } from "react";
import { Footer } from "../components/Footer";
import LoadingSpinner from "../components/loading-spinner";

const Varmrätter = lazy(() => import("../components/varm"));
const Deserts = lazy(() => import("../components/deserts"));
const Sallad = lazy(() => import("../components/sallad"));
const Förätter = lazy(() => import("../components/for"));
const Drinks = lazy(() => import("../components/barn"));

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <div className="pb-24">
        <div className="m-2 flex flex-col items-center justify-center text-sm sm:flex-row">
          <div className="flex flex-row">
            <button
              className={`m-2 flex place-items-center items-center gap-2 rounded px-4 py-2 uppercase ${selectedCategory === "All" ? "text-black" : "bg-black text-[#EAC6B5]"}`}
              onClick={() => handleCategoryChange("All")}
            >
              All
            </button>
            <button
              className={`m-2 flex place-items-center items-center gap-2 rounded px-4 py-2 uppercase ${selectedCategory === "Förätter" ? "text-black" : "bg-black text-[#EAC6B5]"}`}
              onClick={() => handleCategoryChange("Förätter")}
            >
              Förätter
            </button>
            <button
              className={`m-2 flex place-items-center items-center gap-2 rounded px-4 py-2 uppercase ${selectedCategory === "Varmrätter" ? "text-black" : "bg-black text-[#EAC6B5]"}`}
              onClick={() => handleCategoryChange("Varmrätter")}
            >
              Varmrätter
            </button>
          </div>
          <div className="flex flex-row">
            <button
              className={`m-2 flex place-items-center items-center gap-2 rounded px-4 py-2 uppercase ${selectedCategory === "Sallad" ? "text-black" : "bg-black text-[#EAC6B5]"}`}
              onClick={() => handleCategoryChange("Sallad")}
            >
              Sallad
            </button>

            <button
              className={`m-2 flex place-items-center items-center gap-2 rounded px-4 py-2 uppercase  ${selectedCategory === "Deserts" ? "text-black" : "bg-black text-[#EAC6B5]"}`}
              onClick={() => handleCategoryChange("Deserts")}
            >
              Deserts
            </button>
            <button
              className={`m-2 flex place-items-center items-center gap-2 rounded px-4 py-2 uppercase ${selectedCategory === "Drinks" ? "text-black" : "bg-black text-[#EAC6B5]"}`}
              onClick={() => handleCategoryChange("Drinks")}
            >
              Barnmeny
            </button>
          </div>
        </div>

        <Suspense fallback={<LoadingSpinner />}>
          {selectedCategory === "All" && (
            <>
              <div className="flex justify-center">
                <button
                  className="m-10 flex w-auto items-center justify-center gap-2 rounded bg-black px-4 py-2 uppercase text-[#EAC6B5]"
                  onClick={() => handleCategoryChange("Förätter")}
                >
                  Förätter
                </button>
              </div>
              <div className="mx-auto grid max-w-screen-lg grid-cols-2 gap-4 px-6 md:grid-cols-3 lg:grid-cols-4 lg:px-10">
                <Förätter />
              </div>

              <div className="flex justify-center">
                <button
                  className="m-10 flex w-auto items-center justify-center gap-2 rounded bg-black px-4 py-2 uppercase text-[#EAC6B5]"
                  onClick={() => handleCategoryChange("Varmrätter")}
                >
                  Varmrätter
                </button>
              </div>

              <div className="mx-auto grid max-w-screen-lg grid-cols-2 gap-4 px-6 md:grid-cols-3 lg:grid-cols-4 lg:px-10">
                <Varmrätter />
              </div>
              <div className="flex justify-center">
                <button
                  className="m-10 flex w-auto items-center justify-center gap-2 rounded bg-black px-4 py-2 uppercase text-[#EAC6B5]"
                  onClick={() => handleCategoryChange("Sallad")}
                >
                  Sallad
                </button>
              </div>

              <div className="mx-auto grid max-w-screen-lg grid-cols-2 gap-4 px-6 md:grid-cols-3 lg:grid-cols-4 lg:px-10">
                <Sallad />
              </div>

              <div className="flex justify-center" id="Desert">
                <button
                  className="m-10 flex w-auto items-center justify-center gap-2 rounded bg-black px-4 py-2 uppercase text-[#EAC6B5]"
                  onClick={() => handleCategoryChange("Deserts")}
                >
                  Deserts
                </button>
              </div>

              <div className="mx-auto grid max-w-screen-lg grid-cols-2 gap-4 px-6 md:grid-cols-3 lg:grid-cols-4 lg:px-10">
                <Deserts />
              </div>
              <div className="flex justify-center">
                <button
                  className="m-10 flex w-auto items-center justify-center gap-2 rounded bg-black px-4 py-2 uppercase text-[#EAC6B5]"
                  onClick={() => handleCategoryChange("Drinks")}
                >
                  Bernmeny
                </button>
              </div>

              <div className="mx-auto grid max-w-screen-lg grid-cols-2 gap-4 px-6 md:grid-cols-3 lg:grid-cols-4 lg:px-10">
                <Drinks />
              </div>
            </>
          )}

          {selectedCategory === "Förätter" && (
            <div className="mx-auto grid max-w-screen-lg grid-cols-2 gap-4 px-6 md:grid-cols-3 lg:grid-cols-4 lg:px-10">
              <Förätter />
            </div>
          )}

          {selectedCategory === "Varmrätter" && (
            <div className="mx-auto grid max-w-screen-lg grid-cols-2 gap-4 px-6 md:grid-cols-3 lg:grid-cols-4 lg:px-10">
              <Varmrätter />
            </div>
          )}

          {selectedCategory === "Deserts" && (
            <div className="mx-auto grid max-w-screen-lg grid-cols-2 gap-4 px-6 md:grid-cols-3 lg:grid-cols-4 lg:px-10">
              <Deserts />
            </div>
          )}

          {selectedCategory === "Drinks" && (
            <div className="mx-auto grid max-w-screen-lg grid-cols-2 gap-4 px-6 md:grid-cols-3 lg:grid-cols-4 lg:px-10">
              <Drinks />
            </div>
          )}
          {selectedCategory === "Sallad" && (
            <div className="mx-auto grid max-w-screen-lg grid-cols-2 gap-4 px-6 md:grid-cols-3 lg:grid-cols-4 lg:px-10">
              <Sallad />
            </div>
          )}
        </Suspense>

        <div className="mx-auto my-6 max-w-screen-lg bg-[#EAC6B5] p-8 text-center text-sm uppercase text-black shadow-2xl">
          <div className="">
            <h1 className="my-2 mb-2 text-center text-xl uppercase">Note:</h1>
            <p className="my-6 mb-6 text-center text-sm uppercase">
              Each Burger include 180g kött
            </p>
            <p className="my-6 mb-6 text-center text-sm uppercase">
              You have option to Choose Hallumni
            </p>
            <p className="my-6 mb-6 text-center text-sm uppercase">
              Each Steak include 220g kött
            </p>
            {/* 
                        <p className='mb-6 my-6 text-amber-100 text-sm text-center uppercase '>
                            At Jay&apos;s, we offer two types of pizza bread to cater to your preferences. Italiensk Surdeg and Gluten-Free. <br /> <br />

                            <span className='text-primary uppercase'>Italiensk Surdeg: </span>Italiensk Surdeg: This classic Italian sourdough bread is a favorite for its rich flavor and perfect crust. Please note, selecting this option will incur an additional charge of 15 kr.
                            <br /><br /> <span className='text-primary uppercase'>Gluten-Free:</span> For those with dietary restrictions, our gluten-free pizza bread is an excellent choice. Please note, selecting this option will incur an additional charge of 20 kr.
                            <br /><br />Additionally, we are pleased to offer gluten-free burger bread for our burger enthusiasts who need or prefer gluten-free options.</p>
                    */}{" "}
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
