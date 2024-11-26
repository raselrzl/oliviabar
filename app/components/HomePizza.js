import RightArrow from "./RightArrow";
import PopularBurgers from "./popularBurgers";
import ImageSlider from "./ImageSlider";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function HomePizza() {
  return (
    <section className="relative mb-24 px-6 lg:mx-20 lg:px-20">
      {/* //bg-[#EAC6B5] */}
      <div>
        <div>
          <h1 className="mb-4 text-center text-xl font-bold uppercase text-black">
            Välkommen till <span className="">Olivia&apos;S Bar</span>
          </h1>
          <div className="mx-auto my-6 max-w-screen-lg bg-[#EAC6B5] p-8 text-center text-xs uppercase text-black shadow-2xl">
            <p className="">
              På Olivia’s Bar kombinerar vi utsökta rätter med handgjorda
              cocktails för en oförglömlig upplevelse. Inspirerade av världens
              kök är vår meny skapad för att framhäva det bästa i varje smak.
              Njut av vår signaturcocktail, perfekt matchad med vår mest
              populära rätt. Oavsett om det är en romantisk middag eller en
              kväll med vänner, är Olivia’s Bar platsen där smak och harmoni
              möts. Följ med på en smakresa – Olivia’s Bar, där varje stund är
              magisk. 🍸✨
            </p>
          </div>
          <div className="mt-10 flex items-center justify-center gap-4 text-sm">
            <Link
              href="/contact"
              className="flex items-center gap-2 rounded bg-black px-4 py-2 uppercase text-[#EAC6B5]"
            >
              Book a Table
              <RightArrow />
            </Link>
          </div>
          <ImageSlider />
          {/* <div className="lg:m-14 mb-8 mt-8 flex items-center justify-center text-sm">
            <button className="flex place-items-center items-center gap-2 rounded bg-black px-4 py-2 uppercase text-[#EAC6B5]">
              Our Current Popular Food
            </button>
          </div> */}
          {/* <div className="mx-auto grid max-w-screen-lg grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:px-10">
            <Bernmeny />
          </div> */}

          <h1 className="mt-10 text-center text-2xl font-semibold text-black">
            Slice & Sizzle: Where Every Tells a Tale of Taste!
          </h1>
          <div className="mt-10 flex items-center justify-center gap-4 text-sm">
            <Link
              href="/menu"
              className="flex items-center gap-2 rounded bg-black px-4 py-2 uppercase text-[#EAC6B5]"
            >
              Check Our Menu
              <RightArrow />
            </Link>
          </div>
        </div>
      </div>

      <div>
        {/* <h1 className="mt-12 text-center text-2xl font-semibold text-black">
          SmashBite: Bite into <span className="text-black"> Burger </span>{" "}
          Bliss with Every Smash!
        </h1> */}
        {/* <p className="my-6 mb-6 text-center text-sm text-amber-100"></p>

        <div className="mx-auto my-6 max-w-screen-lg bg-[#EAC6B5] p-8 text-center text-xs uppercase text-black shadow-lg">
          <p className="">
            Upplev burgarens ultimata njutning som aldrig förr med våra
            smashburgare. Varje tugga spricker av saftig perfektion, resultatet
            av vår noggranna smash-teknik. Toppade med färska ingredienser och
            serverade mellan rostade bröd, lovar varje burgare en smakupplevelse
            fylld av lager på lager av smak och tillfredsställelse.
          </p>
        </div> */}

        <div className="mb-10 mt-10 flex items-center justify-center gap-4 text-sm">
          <button className="flex items-center gap-2 rounded bg-black px-4 py-2 uppercase text-[#EAC6B5]">
            Most Sailed Food
          </button>
        </div>
      </div>

      <div className="mx-auto grid max-w-screen-lg grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:px-10">
        <PopularBurgers />
      </div>

      <div className="mt-10 flex items-center justify-center gap-4 text-sm">
        {/*  <Link
          href="/menu"
          className="flex items-center gap-2 rounded bg-black px-4 py-2 uppercase text-[#EAC6B5]"
        >
          Why dont you check our burger Menu?
          <RightArrow />
        </Link> */}
      </div>
      <div>
        <h1 className="mt-12 text-center text-2xl font-semibold text-black">
          Extra Fries, Sauces, and Drinks Elevating Your Dining Experience
        </h1>
        <div className="mt-10 flex items-center justify-center gap-4 text-sm">
          <Link
            href="/menu"
            className="mb-6 flex items-center gap-2 rounded bg-black px-4 py-2 uppercase text-[#EAC6B5]"
          >
            Do you need extras?
            <RightArrow />
          </Link>
        </div>
      </div>

      <div className="relative h-[25vh] min-h-[25vh] bg-[url('/olivia/o4.jpg')] bg-cover bg-center bg-no-repeat mx-auto my-6 max-w-screen-lg bg-[#EAC6B5]">
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* Content container */}
        <div className="relative flex h-full flex-col items-center justify-center p-6 text-center">
          {/* Title */}
          <h1 className="mt-12 text-center text-2xl font-semibold text-[#EAC6B5]">
            Explore Our Scrumptious Dessert Haven
          </h1>

          {/* Button */}
          <Link
            href="/menu#Desert"
            className="flex items-center gap-2 rounded bg-black px-4 py-2 uppercase text-[#EAC6B5]"
          >
            Explore <RightArrow />
          </Link>
        </div>
      </div>
      <div className="mx-auto my-6 max-w-screen-lg bg-[#EAC6B5] p-8 text-center text-xs uppercase text-black shadow-2xl">
        {/* Opening Hours Section */}
        <div className="p-4 text-center">
          <h2 className="mb-4 text-xl font-semibold uppercase text-black">
            Öppettider
          </h2>
          <p className="text-xs text-black">Måndag - Torsdag: 15:00 - 22:00</p>
          <p className="text-xs text-black">Fredag & Lördag: 15:00 - 01:00</p>
          <p className="text-xs text-black">Söndag: 17:00 - 01:00</p>
        </div>

        <h2 className="text-xl font-semibold">Location</h2>
        <p>
          <a
            href="https://www.google.com/maps?q=Trädgårdsgatan+3602+24+Norrköping"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 underline inline-flex items-center gap-2"
          >
            Trädgårdsgatan 3, 60224 Norrköping{" "}
            <FaExternalLinkAlt className="text-xl" />
          </a>
        </p>
      </div>
    </section>
  );
}
