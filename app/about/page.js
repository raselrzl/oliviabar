"use client";
import { Footer } from "../components/Footer";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaExternalLinkAlt, FaInstagramSquare } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { SlMusicTone } from "react-icons/sl";

export default function AboutPage() {
  /*  useEffect(() => {
        const initializeMap = () => {
            const map = new google.maps.Map(document.getElementById("map"), {
                center: { lat: 58.6417, lng: 15.6930 }, // Correct coordinates for Finspångsvägen 484, Norrköping, Sweden
                zoom: 15,
            });

            new google.maps.Marker({
                position: { lat: 58.6417, lng: 15.6930 }, // Correct coordinates for Finspångsvägen 484, Norrköping, Sweden
                map,
                title: "Visit Us at Jay's Pizza",
            });
        };

        if (window.google) {
            initializeMap();
        } else {
            const script = document.createElement("script");
            script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCPTiLxOo0c9w-KafsLYvdMuV5h0UphSro&callback=initializeMap`;
            script.async = true;
            script.defer = true;
            window.initializeMap = initializeMap;
            document.head.appendChild(script);
        }
    }, []); */

  return (
    <div>
      <div className="mx-auto mb-4 max-w-7xl p-4 text-[#EAC6B5] sm:p-6 lg:p-8">
        {/* Introduction Section */}
        <section className="mx-auto max-w-screen-lg bg-[#f8d8c9] p-8 text-center text-sm uppercase text-black shadow-2xl">
            <div className="">
              <h1 className="mb-4 text-3xl font-bold uppercase text-black">
                Om oss – Olivia’s Bar
              </h1>
              <p className="text-sm text-center text-black lg:px-40">
                På Olivia’s Bar brinner vi för att skapa en plats där mat, dryck
                och gemenskap står i centrum. Här möts smaker från världens hörn
                med en lokal touch, och varje rätt och cocktail är skapad med
                omtanke och kreativitet. Vår vision är enkel – att ge dig en
                upplevelse där varje tugga och varje sipp blir ett minnesvärt
                ögonblick. Med en passion för kvalitet och en känsla för
                detaljer strävar vi efter att överträffa dina förväntningar,
                oavsett om du kommer för en avkopplande middag, en festlig kväll
                eller en snabb drink i baren. Hos oss är maten och våra
                cocktails mer än bara komplement – de berättar en historia.
                Välkommen till Olivia’s Bar, där vi skapar smaker som binder oss
                samman.{" "}
              </p>
            </div>
        </section>

        {/* Our Story Section */}
        <section className="mx-auto my-6 max-w-screen-lg bg-[#f8d8c9] p-8 text-center text-sm uppercase text-black shadow-2xl">
          <div className="flex flex-col items-center p-6 md:flex-row">
            <Image
              src="/olivia/o1.jpg"
              alt="Our Chef"
              width={600}
              height={400}
              className="h-64 w-full object-cover shadow-lg md:w-1/2"
            />
            <div className="p-4 text-center md:ml-6 md:text-left">
              <h2 className="mb-4 text-2xl font-semibold uppercase text-black">
                Vår Historia
              </h2>
              <p className="text-md text-black">
                Grundat år 2024, är OLIVIAS en älskad plats för klassisk
                specialmat och drycker.
              </p>
            </div>
          </div>
        </section>

        {/* Our Team Section */}
        <section className="mx-auto my-6 max-w-screen-lg bg-[#f8d8c9] p-8 text-center text-sm uppercase text-black shadow-2xl">
          <div className="flex flex-col items-center p-6 md:flex-row">
            <Image
              src="/olivia/o3.jpg"
              alt="Our Team"
              width={600}
              height={400}
              className="h-64 w-full object-cover shadow-lg md:w-1/2"
            />
            <div className="p-4 text-center md:ml-6 md:text-left">
              <h2 className="mb-4 text-2xl font-semibold uppercase text-black">
                Möt Vårt Team
              </h2>
              <p className="text-sm text-black">
                Lett av kocken på OLIVIAS, serverar vårt team den bästa maten
                jämfört med vilken klassisk restaurang som helst.
              </p>
            </div>
          </div>
        </section>

        {/* Our Philosophy Section */}
        <section className="mx-auto my-6 max-w-screen-lg bg-[#f8d8c9] p-8 text-center text-sm uppercase text-black shadow-2xl">
          <div className="flex flex-col items-center p-6">
            <div className="flex w-full flex-col items-center md:flex-row">
              <div className="p-4 text-center md:ml-6 md:text-left">
                <h2 className="mb-4 text-2xl font-semibold uppercase text-black">
                  Vår Filosofi
                </h2>
                <p className="text-sm text-black">
                  Vi är dedikerade till att perfektionera maten. Vårt engagemang
                  för kvalitetsingredienser och traditionella metoder
                  säkerställer att varje rätt är exceptionell.
                </p>
              </div>
            </div>
            <div className="mt-6 flex h-[50vh] w-full items-center justify-center">
              <div className="hexagon-gallery">
                <div className="hexagon">
                  <Image
                    src="/images/freshingredients.avif"
                    alt="Fresh Ingredients"
                    width={200}
                    height={200}
                    className="hexagon-inset"
                  />
                </div>
                <div className="hexagon">
                  <Image
                    src="/olivia/o2.jpg"
                    alt="Burger Ingredients"
                    width={200}
                    height={200}
                    className="hexagon-inset"
                  />
                </div>
                <div className="hexagon">
                  <Image
                    src="/olivia/o1.jpg"
                    alt="Ryggbif"
                    width={200}
                    height={200}
                    className="hexagon-inset"
                  />
                </div>
                <div className="hexagon">
                  <Image
                    src="/olivia/des1.jpg"
                    alt="Smashed Steak"
                    width={200}
                    height={200}
                    className="hexagon-inset"
                  />
                </div>
                <div className="hexagon">
                  <Image
                    src="/olivia/o2.jpg"
                    alt="Nutella"
                    width={200}
                    height={200}
                    className="hexagon-inset"
                  />
                </div>
                <div className="hexagon">
                  <Image
                    src="/olivia/o3.jpg"
                    alt="Pizza"
                    width={200}
                    height={200}
                    className="hexagon-inset"
                  />
                </div>
                <div className="hexagon">
                  <Image
                    src="/olivia/o4.jpg"
                    alt="Burger"
                    width={200}
                    height={200}
                    className="hexagon-inset"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Community Engagement Section */}
        <section className="mx-auto my-6 max-w-screen-lg bg-[#f8d8c9] p-8 text-center text-sm uppercase text-black shadow-2xl">
          <div className="flex flex-col items-center p-6 md:flex-row">
            <Image
              src="/images/community-engagement-event.jpg"
              alt="Community Engagement"
              width={600}
              height={400}
              className="h-64 w-full object-cover shadow-lg md:w-1/2"
            />
            <div className="p-4 text-center md:ml-6 md:text-left">
              <h2 className="mb-4 text-2xl font-semibold uppercase">
                Engagemang i Samhället
              </h2>
              <p className="text-sm">
                Stolt stödjer vi lokala initiativ och evenemang.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="">
          <div className="py-6 text-center">
            <h2 className="mb-4 text-2xl font-semibold uppercase text-black">
              Vad Våra Kunder Säger
            </h2>
            <div className="space-y-4">
              <div className="relative mx-auto my-6 max-w-screen-lg bg-[#f8d8c9] p-8 text-center text-sm uppercase text-black shadow-2xl">
                <p>
                  &apos;&apos;Bästa hamburgarna i staden! Smakerna är otroliga,
                  och servicen är alltid i toppklass.&apos;&apos;
                </p>
                <span className="absolute bottom-2 right-4 text-xs italic">
                  - Sarah M
                </span>
              </div>
              <div className="relative mx-auto my-6 max-w-screen-lg bg-[#f8d8c9] p-8 text-center text-sm uppercase text-black shadow-2xl">
                <p>
                  &apos;&apos;Biffen besvikar aldrig. Hamburgarna är
                  fantastiska, och atmosfären är mysig.&apos;&apos;
                </p>
                <span className="absolute bottom-2 right-4 text-xs italic">
                  - John D
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        {/*  <section className="mb-12 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 overflow-hidden">
                    <div className="relative">
                        <div id="map" className="w-full h-48"></div>
                    </div>
                </section> */}
      </div>

      <section
        className="mx-auto my-6 max-w-screen-lg bg-cover bg-center p-8 text-center text-sm uppercase text-black shadow-2xl"
        style={{ backgroundImage: "url('/olivia/music.jpg')" }}
        id="music"
      >
        {/* Top 10 Famous Songs Section */}
        <div className="p-4  rounded">
          <h2 className="mb-4 text-xl font-semibold uppercase text-white flex items-center justify-center gap-2">
            <img className="w-40 h-40" src="/olivia/gif3.gif" alt="music gif" />
          </h2>
          <ul className="flex flex-col items-center space-y-4 text-xs text-white">
            <li className="flex items-center gap-2 justify-center">
              {/* <img className="w-6 h-6" src="/olivia/gif1.gif" alt="music gif" /> */}
              "Bohemian Rhapsody" - Queen
              <img className="w-6 h-6" src="/olivia/gif2.gif" alt="music gif" />
            </li>
            <li className="flex items-center gap-2 justify-center">
              {/* <img className="w-6 h-6" src="/olivia/gif1.gif" alt="music gif" /> */}
              "Shape of You" - Ed Sheeran
              <img className="w-6 h-6" src="/olivia/gif2.gif" alt="music gif" />
            </li>
            <li className="flex items-center gap-2 justify-center">
              {/* <img className="w-6 h-6" src="/olivia/gif1.gif" alt="music gif" /> */}
              "Billie Jean" - Michael Jackson
              <img className="w-6 h-6" src="/olivia/gif2.gif" alt="music gif" />
            </li>
            <li className="flex items-center gap-2 justify-center">
              {/* <img className="w-6 h-6" src="/olivia/gif1.gif" alt="music gif" /> */}
              "Imagine" - John Lennon
              <img className="w-6 h-6" src="/olivia/gif2.gif" alt="music gif" />
            </li>
            <li className="flex items-center gap-2 justify-center">
              {/* <img className="w-6 h-6" src="/olivia/gif1.gif" alt="music gif" /> */}
              "Smells Like Teen Spirit" - Nirvana
              <img className="w-6 h-6" src="/olivia/gif2.gif" alt="music gif" />
            </li>
            <li className="flex items-center gap-2 justify-center">
              {/* <img className="w-6 h-6" src="/olivia/gif1.gif" alt="music gif" /> */}
              "Hey Jude" - The Beatles
              <img className="w-6 h-6" src="/olivia/gif2.gif" alt="music gif" />
            </li>
            <li className="flex items-center gap-2 justify-center">
              {/* <img className="w-6 h-6" src="/olivia/gif1.gif" alt="music gif" /> */}
              "Like a Rolling Stone" - Bob Dylan
              <img className="w-6 h-6" src="/olivia/gif2.gif" alt="music gif" />
            </li>
            <li className="flex items-center gap-2 justify-center">
              {/* <img className="w-6 h-6" src="/olivia/gif1.gif" alt="music gif" /> */}
              "Hallelujah" - Leonard Cohen
              <img className="w-6 h-6" src="/olivia/gif2.gif" alt="music gif" />
            </li>
            <li className="flex items-center gap-2 justify-center">
              {/* <img className="w-6 h-6" src="/olivia/gif1.gif" alt="music gif" /> */}
              "I Will Always Love You" - Whitney Houston
              <img className="w-6 h-6" src="/olivia/gif2.gif" alt="music gif" />
            </li>
            <li className="flex items-center gap-2 justify-center">
              {/* <img className="w-6 h-6" src="/olivia/gif1.gif" alt="music gif" /> */}
              "Rolling in the Deep" - Adele
              <img className="w-6 h-6" src="/olivia/gif2.gif" alt="music gif" />
            </li>
            <li className="flex items-center gap-2 justify-center">
              {/* <img className="w-6 h-6" src="/olivia/gif1.gif" alt="music gif" /> */}
              And More......
            </li>
          </ul>
        </div>
      </section>

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

      <section
        id="info"
        className="mx-auto my-6 max-w-screen-lg bg-[#f8d8c9] p-8 text-center text-sm uppercase text-black shadow-2xl"
      >
        {/* Work With Us Section */}
        <div id="" className="mt-6 p-4 text-center">
          <h2 className="mb-4 text-xl font-semibold uppercase text-black">
            Jobba Med Oss
          </h2>
          <p className="mb-4 text-xs text-black">
            För att jobba med oss, skicka ditt CV till vår e-post och följ oss
            på vår Instagram.
          </p>

          <div className="flex justify-center gap-4 text-3xl">
            <Link
              href="https://www.instagram.com/oliviasbarnkpg?igsh=MWtkNDBoNDU3eGxoeg=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagramSquare className="hover:text-[#444444]" />
            </Link>

            <Link href="mailto:info@oliviasbar.se">
              <MdMarkEmailUnread className="hover:text-[#444444]" />
            </Link>
          </div>
        </div>
      </section>
      

      <Footer />
    </div>
  );
}
