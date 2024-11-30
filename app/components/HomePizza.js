import RightArrow from "./RightArrow";
import PopularBurgers from "./popularBurgers";
import ImageSlider from "./ImageSlider";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function HomePizza() {
  return (
    <section className="relative mb-24 px-6 lg:mx-20 lg:px-20">
      <div
        className="relative flex items-center justify-center h-[25vh] min-h-[50vh] bg-[url('/olivia/o4.jpg')] bg-cover bg-center bg-no-repeat mx-auto my-6 max-w-screen-lg bg-[#EAC6B5]"
        style={{ backgroundImage: "url('/olivia/o4.jpg')" }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content Container */}
        <div className="relative z-10 flex flex-col items-center gap-4">
          {/* Logo Image */}
          <img
            src="/olivia/vit.png"
            alt="Olivia's Logo"
            className="w-24 h-auto" // Adjust size as needed
          />
          <p>
            <a
              href="https://www.google.com/maps?q=Trädgårdsgatan3+602+24+Norrköping"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-bold inline-flex items-center gap-2"
            >
              Trädgårdsgatan 3{" "}
            </a>
          </p>

          {/* Button */}
          <Link
      href="/contact"
      className="flex items-center gap-2 rounded-xl font-bold text-black px-4 py-2 uppercase bg-white"
    >
      Boka bord
      <RightArrow />
    </Link>
        </div>
      </div>

      <h1 className="mt-8 text-center text-xl font-bold uppercase text-black">
        Välkommen till <span className="">Olivia&apos;S Bar</span>
      </h1>
      <div className="mx-auto my-6 max-w-screen-lg bg-[#EAC6B5] p-8 text-center text-xs uppercase text-black shadow-2xl">
        <p className="">
          På Olivia’s Bar kombinerar vi utsökta rätter med handgjorda cocktails
          för en oförglömlig upplevelse. Inspirerade av världens kök är vår meny
          skapad för att framhäva det bästa i varje smak. Njut av vår
          signaturcocktail, perfekt matchad med vår mest populära rätt. Oavsett
          om det är en romantisk middag eller en kväll med vänner, är Olivia’s
          Bar platsen där smak och harmoni möts. Följ med på en smakresa –
          Olivia’s Bar, där varje stund är magisk. 🍸✨
        </p>
      </div>

      <ImageSlider />
      <div className="relative flex items-center justify-center h-[25vh] min-h-[25vh] bg-[url('/olivia/o1.jpg')] bg-cover bg-center bg-no-repeat mx-auto my-6 max-w-screen-lg bg-[#EAC6B5] mt-6 lg:mt-16">
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative flex h-full flex-col items-center justify-center p-6 text-center">
          <Link
            href="/menu"
            className="flex items-center gap-2 rounded-lg text-black font-bold px-4 py-2 uppercase bg-white"
          >
            Utforska vår meny
            <RightArrow />
          </Link>
        </div>
      </div>
      <div className="mx-auto my-6 max-w-screen-lg bg-[#EAC6B5] p-8 text-center text-xs uppercase text-black shadow-2xl">
        <div className="p-4 text-center">
          <h2 className="mb-4 text-xl font-semibold uppercase text-black">
            Öppettider
          </h2>
          <p className="text-xs text-black">Måndag - Torsdag: 15:00 - 22:00</p>
          <p className="text-xs text-black">Fredag & Lördag: 15:00 - 01:00</p>
          <p className="text-xs text-black">Söndag: 17:00 - 01:00</p>
        </div>

        <h2 className="text-xl font-semibold">Plats</h2>

        <p>
          <a
            href="https://www.google.com/maps?q=Trädgårdsgatan3+602+24+Norrköping"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black underline inline-flex items-center gap-2"
          >
            Trädgårdsgatan 3 <FaExternalLinkAlt className="text-xl" />
          </a>
        </p>
      </div>
    </section>
  );
}
