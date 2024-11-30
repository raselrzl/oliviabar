"use client";
import { useState, lazy, Suspense } from "react";
import { Footer } from "../components/Footer";
import LoadingSpinner from "../components/loading-spinner";

const Varmrätter = lazy(() => import("../components/varm"));
const Deserts = lazy(() => import("../components/deserts"));
const Sallad = lazy(() => import("../components/sallad"));
const Förätter = lazy(() => import("../components/for"));
const Drinks = lazy(() => import("../components/Drinks"));
const Bernmeny = lazy(() => import("../components/Bernmeny"));

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    window.scrollTo({ behavior: "smooth" });
  };

  return (
    <div>
      <div className="pb-24">
        <div className="p-8">
          <h1 className="mb-4 text-center text-xl font-bold uppercase text-black">
            Välkommen till <span className="">Olivia&apos;S Bar</span> – där
            smaker möts och magi skapas!
          </h1>
          <div className="mx-auto my-6 max-w-screen-lg bg-[#EAC6B5] p-8 text-center text-xs uppercase text-black shadow-2xl">
            <p className="">
              På Olivia’s Bar handlar det inte bara om mat och dryck – det
              handlar om en upplevelse där allt går hand i hand. Vår meny är
              noggrant utformad för att lyfta fram det bästa ur både våra rätter
              och våra cocktails. Med inspiration från världens kök och en
              passion för smak, kombinerar vi utsökta måltider med innovativa,
              handgjorda drinkar. Låt dig förföras av vår signaturcocktail,
              skapad för att harmoniera perfekt med vår mest populära rätt.
              Oavsett om du söker en romantisk middag, en härlig kväll med
              vänner eller bara något riktigt gott att njuta av – Olivia’s Bar
              är platsen där alla smaker möts. Kom och upplev smakresan hos oss.
              Olivia’s Bar – där mat och cocktails förenas i perfekt harmoni.
            </p>
          </div>
        </div>
        <div className="m-2 flex flex-col items-center justify-center text-sm sm:flex-row">
          <div className="flex flex-row">
            <button
              className={`m-2 flex place-items-center items-center gap-2 rounded px-4 py-2 uppercase ${
                selectedCategory === "All"
                  ? "text-black"
                  : "bg-black text-[#EAC6B5]"
              }`}
              onClick={() => handleCategoryChange("All")}
            >
              All
            </button>
            <button
              className={`m-2 flex place-items-center items-center gap-2 rounded px-4 py-2 uppercase ${
                selectedCategory === "Förätter"
                  ? "text-black"
                  : "bg-black text-[#EAC6B5]"
              }`}
              onClick={() => handleCategoryChange("Förätter")}
            >
              Förätter
            </button>
            <button
              className={`m-2 flex place-items-center items-center gap-2 rounded px-4 py-2 uppercase ${
                selectedCategory === "Varmrätter"
                  ? "text-black"
                  : "bg-black text-[#EAC6B5]"
              }`}
              onClick={() => handleCategoryChange("Varmrätter")}
            >
              Varmrätter
            </button>
          </div>
          <div className="flex flex-row">
            <button
              className={`m-2 flex place-items-center items-center gap-2 rounded px-4 py-2 uppercase ${
                selectedCategory === "Sallad"
                  ? "text-black"
                  : "bg-black text-[#EAC6B5]"
              }`}
              onClick={() => handleCategoryChange("Sallad")}
            >
              Sallad
            </button>

            <button
              className={`m-2 flex place-items-center items-center gap-2 rounded px-4 py-2 uppercase  ${
                selectedCategory === "Deserts"
                  ? "text-black"
                  : "bg-black text-[#EAC6B5]"
              }`}
              onClick={() => handleCategoryChange("Deserts")}
            >
              Deserts
            </button>
            <button
              className={`m-2 flex place-items-center items-center gap-2 rounded px-4 py-2 uppercase ${
                selectedCategory === "Drinks"
                  ? "text-black"
                  : "bg-black text-[#EAC6B5]"
              }`}
              onClick={() => handleCategoryChange("Drinks")}
            >
              Drinks
            </button>
          </div>
          <button
            className={`m-2 flex place-items-center items-center gap-2 rounded px-4 py-2 uppercase ${
              selectedCategory === "Bernmeny"
                ? "text-black"
                : "bg-black text-[#EAC6B5]"
            }`}
            onClick={() => handleCategoryChange("Bernmeny")}
          >
            Bernmeny
          </button>
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
              <div className="mx-auto grid max-w-screen-lg grid-cols-1 px-6 md:grid-cols-1 lg:grid-cols-1 lg:px-10">
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

              <div className="mx-auto grid max-w-screen-lg grid-cols-1 px-6 md:grid-cols-1 lg:grid-cols-1 lg:px-10">
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

              <div className="mx-auto grid max-w-screen-lg grid-cols-1 px-6 md:grid-cols-1 lg:grid-cols-1 lg:px-10">
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

              <div className="mx-auto grid max-w-screen-lg grid-cols-1 px-6 md:grid-cols-1 lg:grid-cols-1 lg:px-10">
                <Deserts />
              </div>
              <div className="flex justify-center">
                <button
                  className="m-10 flex w-auto items-center justify-center gap-2 rounded bg-black px-4 py-2 uppercase text-[#EAC6B5]"
                  onClick={() => handleCategoryChange("Drinks")}
                >
                  Drinks
                </button>
              </div>

              <div className="mx-auto grid max-w-screen-lg grid-cols-1 px-6 md:grid-cols-1 lg:grid-cols-1 lg:px-10">
                <Drinks />
              </div>

              <div className="flex justify-center">
                <button
                  className="m-10 flex w-auto items-center justify-center gap-2 rounded bg-black px-4 py-2 uppercase text-[#EAC6B5]"
                  onClick={() => handleCategoryChange("Bernmeny")}
                >
                  Bernmeny
                </button>
              </div>

              <div className="mx-auto grid max-w-screen-lg grid-cols-1 px-6 md:grid-cols-1 lg:grid-cols-1 lg:px-10">
                <Bernmeny />
              </div>
            </>
          )}

          {selectedCategory === "Förätter" && (
            <div className="mx-auto grid max-w-screen-lg grid-cols-1 px-6 md:grid-cols-1 lg:grid-cols-1 lg:px-10">
              <Förätter />
            </div>
          )}

          {selectedCategory === "Varmrätter" && (
            <div className="mx-auto grid max-w-screen-lg grid-cols-1 px-6 md:grid-cols-1 lg:grid-cols-1 lg:px-10">
              <Varmrätter />
            </div>
          )}

          {selectedCategory === "Deserts" && (
            <div className="mx-auto grid max-w-screen-lg grid-cols-1 px-6 md:grid-cols-1 lg:grid-cols-1 lg:px-10">
              <Deserts />
            </div>
          )}

          {selectedCategory === "Drinks" && (
            <div className="mx-auto grid max-w-screen-lg grid-cols-1 px-6 md:grid-cols-1 lg:grid-cols-1 lg:px-10">
              <Drinks />
            </div>
          )}
          {selectedCategory === "Sallad" && (
            <div className="mx-auto grid max-w-screen-lg grid-cols-1 px-6 md:grid-cols-1 lg:grid-cols-1 lg:px-10">
              <Sallad />
            </div>
          )}

          {selectedCategory === "Bernmeny" && (
            <div className="mx-auto grid max-w-screen-lg grid-cols-1 px-6 md:grid-cols-1 lg:grid-cols-1 lg:px-10">
              <Bernmeny />
            </div>
          )}
        </Suspense>

        {/* <div className="mx-auto my-6 max-w-screen-lg bg-[#EAC6B5] p-8 text-center text-sm uppercase text-black shadow-2xl rounded-lg">
          <div>
            <h1 className="my-4 text-center text-xl uppercase italic font-bold bg-[#F7DAD0] text-black rounded-md">
              Note:
            </h1>
            <p className="my-2 px-4 py-2 text-center italic text-xs bg-[#F7DAD0] text-black rounded-md shadow-md">
              Each Burger includes 180g kött
            </p>
            <p className="my-2 px-4 py-2 text-center italic text-xs bg-[#F7DAD0] text-black rounded-md shadow-md">
              You have the option to choose Halloumi
            </p>
            <p className="my-2 px-4 py-2 text-center italic text-xs bg-[#F7DAD0] text-black rounded-md shadow-md">
              Each Steak includes 220g kött
            </p>
          </div>
        </div> */}

        <Footer />
      </div>
    </div>
  );
}
