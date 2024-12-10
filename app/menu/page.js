"use client";
import { useState, lazy, Suspense } from "react";
import { Footer } from "../components/Footer";
import LoadingSpinner from "../components/loading-spinner";
import FranGrillen from "../components/FranGrill";
import { FaExternalLinkAlt } from "react-icons/fa";
import DownloadPDF from "../components/pdfmeny";

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
    <div className="mx-6">
      <div className="pb-24">
        <div className="p-2">
          <h1 className="mb-4 text-center text-xl font-bold uppercase text-black">
            Välkommen till <span className="">Olivia&apos;S Bar</span> – där
            smaker möts och magi skapas!
          </h1>
          <div className="mx-auto my-6 max-w-screen-lg bg-[#f8d8c9] p-8 text-center text-xs uppercase text-black shadow-2xl">
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
              HUSETS PLANKSTEK
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
              Fisk {/* in database fisk is drinks */}
            </button>
          </div>
          <div className="flex">
            <button
              className={`m-2 flex place-items-center items-center gap-2 rounded px-4 py-2 uppercase ${
                selectedCategory === "Bernmeny"
                  ? "text-black"
                  : "bg-black text-[#EAC6B5]"
              }`}
              onClick={() => handleCategoryChange("Bernmeny")}
            >
              Barn rätter
            </button>
            <button
              className={`m-2 flex place-items-center items-center gap-2 rounded px-4 py-2 uppercase ${
                selectedCategory === "grill"
                  ? "text-black"
                  : "bg-black text-[#EAC6B5]"
              }`}
              onClick={() => handleCategoryChange("grill")}
            >
              Från grill
            </button>
          </div>
        </div>

        <Suspense fallback={<LoadingSpinner />}>
          {selectedCategory === "All" && (
            <>
              <div className="flex justify-center ">
                <button
                  className="m-10 flex w-auto items-center justify-center gap-2 rounded bg-black px-4 py-2 uppercase text-[#EAC6B5]"
                  onClick={() => handleCategoryChange("Förätter")}
                >
                  Förätter
                </button>
              </div>
              <div className="shadow-2xl mx-auto grid max-w-screen-lg grid-cols-1 px-6 md:grid-cols-1 lg:grid-cols-1 lg:px-10">
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

              <div className="shadow-2xl mx-auto grid max-w-screen-lg grid-cols-1 px-6 md:grid-cols-1 lg:grid-cols-1 lg:px-10">
                <Varmrätter />
              </div>
              <div className="flex justify-center">
                <button
                  className="mt-10 flex w-auto items-center justify-center gap-2 rounded bg-black px-4 py-2 uppercase text-[#EAC6B5]"
                  onClick={() => handleCategoryChange("Sallad")}
                >
                  HUSETS PLANKSTEK {/* in database as Sallad */}
                </button>
              </div>

              <div className="shadow-2xl mx-auto grid max-w-screen-lg grid-cols-1 px-6 md:grid-cols-1 lg:grid-cols-1 lg:px-10">
                <Sallad />
              </div>

              <div className="flex justify-center">
                <button
                  className="mt-10 flex w-auto items-center justify-center gap-2 rounded bg-black px-4 py-2 uppercase text-[#EAC6B5]"
                  onClick={() => handleCategoryChange("grill")}
                >
                  Från Grillen {/* in database as Sallad */}
                </button>
              </div>

              <div className="shadow-2xl mx-auto grid max-w-screen-lg grid-cols-1 px-6 md:grid-cols-1 lg:grid-cols-1 lg:px-10">
                <FranGrillen />
              </div>

              <div className="flex justify-center">
                <button
                  className="m-10 flex w-auto items-center justify-center gap-2 rounded bg-black px-4 py-2 uppercase text-[#EAC6B5]"
                  onClick={() => handleCategoryChange("Drinks")}
                >
                  Fisk
                </button>
              </div>

              <div className="shadow-2xl mx-auto grid max-w-screen-lg grid-cols-1 px-6 md:grid-cols-1 lg:grid-cols-1 lg:px-10">
                <Drinks />
              </div>

              <div className="flex justify-center">
                <button
                  className="m-10 flex w-auto items-center justify-center gap-2 rounded bg-black px-4 py-2 uppercase text-[#EAC6B5]"
                  onClick={() => handleCategoryChange("Bernmeny")}
                >
                  Barn rätter
                </button>
              </div>

              <div className="shadow-2xl mx-auto grid max-w-screen-lg grid-cols-1 px-6 md:grid-cols-1 lg:grid-cols-1 lg:px-10">
                <Bernmeny />
              </div>
              <div className="flex justify-center" id="Desert">
                <button
                  className="m-10 flex w-auto items-center justify-center gap-2 rounded bg-black px-4 py-2 uppercase text-[#EAC6B5]"
                  onClick={() => handleCategoryChange("Deserts")}
                >
                  Deserts
                </button>
              </div>

              <div className="shadow-2xl mx-auto grid max-w-screen-lg grid-cols-1 px-6 md:grid-cols-1 lg:grid-cols-1 lg:px-10">
                <Deserts />
              </div>
            </>
          )}

          {selectedCategory === "Förätter" && (
            <div className="shadow-2xl mx-auto grid max-w-screen-lg grid-cols-1 px-6 md:grid-cols-1 lg:grid-cols-1 lg:px-10">
              <Förätter />
            </div>
          )}

          {selectedCategory === "Varmrätter" && (
            <div className="shadow-2xl mx-auto grid max-w-screen-lg grid-cols-1 px-6 md:grid-cols-1 lg:grid-cols-1 lg:px-10">
              <Varmrätter />
            </div>
          )}

          {selectedCategory === "Deserts" && (
            <div className="shadow-2xl mx-auto grid max-w-screen-lg grid-cols-1 px-6 md:grid-cols-1 lg:grid-cols-1 lg:px-10">
              <Deserts />
            </div>
          )}

          {selectedCategory === "Drinks" && (
            <div className="shadow-2xl mx-auto grid max-w-screen-lg grid-cols-1 px-6 md:grid-cols-1 lg:grid-cols-1 lg:px-10">
              <Drinks />
            </div>
          )}
          {selectedCategory === "Sallad" && (
            <div className="shadow-2xl mx-auto grid max-w-screen-lg grid-cols-1 px-6 md:grid-cols-1 lg:grid-cols-1 lg:px-10">
              <Sallad />
            </div>
          )}

          {selectedCategory === "grill" && (
            <div className="shadow-2xl mx-auto grid max-w-screen-lg grid-cols-1 px-6 md:grid-cols-1 lg:grid-cols-1 lg:px-10">
              <FranGrillen />
            </div>
          )}

          {selectedCategory === "Bernmeny" && (
            <div className="shadow-2xl mx-auto grid max-w-screen-lg grid-cols-1 px-6 md:grid-cols-1 lg:grid-cols-1 lg:px-10">
              <Bernmeny />
            </div>
          )}
        </Suspense>
          {/* <DownloadPDF /> */}
        <div className="mx-auto my-6 max-w-screen-lg bg-[#f8d8c9] p-8 text-center text-xs uppercase text-black shadow-2xl">
          <h1 className="text-center text-3xl font-bold text-gray-800 mb-4">
            Afterwork
          </h1>
          <p className="text-center text-lg text-gray-600 mb-8">
            16:00 - 18:00 | 155 SEK
          </p>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-700">
                Ryggbiffspasta
              </h3>
              <p className="text-gray-600">
                Grädde, champinjoner, lök och färsk timjan.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-700">
                Planka Fläskfilé
              </h3>
              <p className="text-gray-600">
                Pommes duchesse, primörer, tomat, broccoli och baconlindad
                sparris. Serveras med handslagen bearnaisesås och kryddsmör.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-700">
                Olivias Burgare
              </h3>
              <p className="text-gray-600">
                Cheddarost, bacon, hamburgerdressing, sallad, tomat & rödlök.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-700">Fläskfilé</h3>
              <p className="text-gray-600">
                Med primörer, rödvinssky serveras med pommes frites.
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto my-6 max-w-screen-lg bg-[url('/olivia/07.webp')] bg-cover bg-center p-8 text-center text-xs uppercase text-black shadow-2xl">
          <h2 className="mb-4 text-xl font-semibold uppercase text-white">
            Öppettider
          </h2>
          <div className="p-4 text-center  rounded-lg">
            <p className="text-xs text-white">Tisdag 16:00-00:00</p>
            <p className="text-xs text-white">Onsdag - Fredag 16:00 - 01:00</p>
            <p className="text-xs text-white">Lördag - 15:00 - 01:00</p>
            <p className="text-xs text-white">Söndag & Måndag - Stängt</p>
          </div>

          <h2 className="mt-6 text-xl font-semibold  inline-block px-4 py-2 rounded-lg text-white">
            Plats
          </h2>

          <p className="mt-2">
            <a
              href="https://www.google.com/maps?q=Trädgårdsgatan3+602+24+Norrköping"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline inline-flex items-center gap-2"
            >
              Trädgårdsgatan 3 <FaExternalLinkAlt className="text-xl" />
            </a>
          </p>
        </div>

        <Footer />
      </div>
    </div>
  );
}
