import RightArrow from "./RightArrow";
import PopularBurgers from "./popularBurgers";
import ImageSlider from "./ImageSlider";
import Link from "next/link";
import Bernmeny from "./Bernmeny";

export default function HomePizza() {
  return (
    <section className="relative mb-24 px-6 lg:mx-20 lg:px-20">
      {/* //bg-[#EAC6B5] */}
      <div>
        <div>
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

      <div className="relative h-[25vh] min-h-[25vh] bg-[url('/olivia/o4.jpg')] bg-cover bg-center bg-no-repeat">
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
    </section>
  );
}
