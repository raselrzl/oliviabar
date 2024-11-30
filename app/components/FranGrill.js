export default function FranGrillen() {
  return (
    <div>
      <p className="m-2 flex w-auto items-center justify-center italic px-2 py-2 text-xs text-black">
        (Du väljer själv kött, fisk eller vegetariskt samt ett val av sås och
        ett tillbehör. Kötträtter serveras med rödvinssås & primörer. Fisk och
        vegetariskt serveras med primörer. )
      </p>
      <p className="flex font-semibold items-center justify-start gap-2 rounded py-2 uppercase text-sm text-black">
        Välj Mellan
      </p>
      <div className="my-2 max-w-screen-mdpb-2">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold text-black">*Halloumi</h2>
          <span className="text-md font-bold text-gray-700">SEK189</span>
        </div>
        <p className="mt-2 text-xs italic text-gray-600"></p>
      </div>
      <div className="my-2 max-w-screen-mdpb-2">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold text-black">*Fläskfile</h2>
          <span className="text-md font-bold text-gray-700">SEK169</span>
        </div>
        <p className="mt-2 text-xs italic text-gray-600"></p>
      </div>
      <div className="my-2 max-w-screen-mdpb-2">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold text-black">*Laxfilé</h2>
          <span className="text-md font-bold text-gray-700">SEK209</span>
        </div>
        <p className="mt-2 text-xs italic text-gray-600"></p>
      </div>
      <div className="my-2 max-w-screen-mdpb-2">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold text-black">*Gösfile</h2>
          <span className="text-md font-bold text-gray-700">SEK209</span>
        </div>
        <p className="mt-2 text-xs italic text-gray-600"></p>
      </div>
      <div className="my-2 max-w-screen-mdpb-2">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold text-black">*Ryggbiff</h2>
          <span className="text-md font-bold text-gray-700">SEK199</span>
        </div>
        <p className="mt-2 text-xs italic text-gray-600"></p>
      </div>
      <div className="my-2 max-w-screen-mdpb-2">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold text-black">*Oxfilé</h2>
          <span className="text-md font-bold text-gray-700">SEK229</span>
        </div>
        <p className="mt-2 text-xs italic text-gray-600"></p>
      </div>
      <div className="my-2 max-w-screen-mdpb-2 mt-10 text-center">
        <div className="flex justify-center" id="Desert">
          <button className="mb-8 flex w-auto items-center justify-center gap-2 rounded bg-black px-4 py-2 uppercase text-[#EAC6B5]">
            TILLBEHÖR ATT VÄLJA PÅ
          </button>
        </div>

        <div className="flex flex-wrap justify-center items-center max-w-screen-md gap-4 overflow-hidden">
          <h3 className="cursor-pointer rounded-full  px-2 py-2 text-black text-cente">
            Bearnaisesås
          </h3>
          <h3 className="cursor-pointer rounded-full  px-2 py-2 text-black text-cente">
            Hollandaisesås
          </h3>
          <h3 className="cursor-pointer rounded-full  px-2 py-2 text-black text-cente">
            Tzatziki
          </h3>
          <h3 className="cursor-pointer rounded-full  px-2 py-2 text-black text-cente">
            Pepparsås
          </h3>
          <h3 className="cursor-pointer rounded-full  px-2 py-2 text-black text-cente">
            Sallad
          </h3>
          <h3 className="cursor-pointer rounded-full  px-2 py-2 text-black text-cente">
            Pommes
          </h3>
          <h3 className="cursor-pointer rounded-full  px-2 py-2 text-black text-cente">
            Grillade primörer
          </h3>
        </div>
      </div>

      <div className="my-2 max-w-screen-md pb-2 mt-10 text-center">
        <div className="flex justify-center" id="Desert">
          <button className="mb-8 flex w-auto items-center justify-center gap-2 rounded bg-black px-4 py-2 uppercase text-[#EAC6B5]">
            sides
          </button>
        </div>

        <div className="flex flex-wrap justify-center items-center max-w-screen-md gap-4 overflow-hidden">
          <h3 className="cursor-pointer rounded-full  px-2 py-2 text-black text-cente">
            Pommes
          </h3>
          <h3 className="cursor-pointer rounded-full  px-2 py-2 text-black text-cente">
            Salladsskål
          </h3>
          <h3 className="cursor-pointer rounded-full  px-2 py-2 text-black text-cente">
            Bearnaisesås
          </h3>
          <h3 className="cursor-pointer rounded-full  px-2 py-2 text-black text-cente">
            Pepparsås
          </h3>
          <h3 className="cursor-pointer rounded-full  px-2 py-2 text-black text-cente">
            Rödvinssås
          </h3>
          <h3 className="cursor-pointer rounded-full  px-2 py-2 text-black text-cente">
            Hamburgerdressing
          </h3>
          <h3 className="cursor-pointer rounded-full  px-2 py-2 text-black text-cente">
            Tzatziki
          </h3>
        </div>
      </div>
    </div>
  );
}
