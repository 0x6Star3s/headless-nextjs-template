"use client";
import React, { useState, useEffect } from "react";
// import { urlFor, client } from '../../client';
// import './Services.scss'
import { title } from "process";
import { images } from "@/constants";
import NextImage from "@/components/ui/image";

function Services() {
  const [data, setData] = useState([
    {
      title: "POKRYCIA DACHOWE",
      imgUrl: images.image8,
      description: "Oferujemy wysokiej jakości blachy dachowe",
      tags: [
        "Blachodachówka i trapez",
        "Blacha na rąbek",
        "Papa termozgrzewalna",
        "Obróbki blacharskie",
      ],
      footer: "Zapraszamy do kontaktu",
    },
    {
      title: "USŁUGI I WYNAJEM PODNOŚNIKA KOSZOWEGO",
      imgUrl: images.image9,
      description: "Nissan Cabstar, zasięg roboczy max 20m wysokości",
      tags: [
        "Cena za 1 godz. Pracy – 100 zł netto",
        "Dojazd – 6 zł w jedną stronę netto",
      ],
      footer: "Wynajem na minimum 2 godz.",
    },
    {
      title: "INSTALACJE FOTOWOLTAICZNE",
      imgUrl: images.image3,
      description: "Panele monokrystaliczne o mocy od 3,15 do 3,70 W",
      tags: [
        "Cena do 3kW – ok. 12 tys. brutto",
        "Cena 5 kW – ok. 19 tys. Brutto",
      ],
      footer:
        "Cena uzależniona od istniejących warunków montażu i preferencji klienta.",
    },
  ]);

  return (
    <section id="usługi" className="my-[5rem]">
      <div className="max-w-[1000px] w-[90%] mx-auto">
        <span>
          <h3 className="text-[#130a4f] font-medium uppercase">USŁUGI</h3>
          <div className="bg-black w-[50px] h-[1.3px]" />
        </span>

        <h2 className="text-[#11181c] text-4xl font-bold mt-3">
          Pomożemy ci w tych dziedzinach
        </h2>
        <div className="flex justify-center flex-wrap mt-[2rem] gap-5">
          {data.map((data, index) => (
            <div
              className="min-h-[400px] w-[300px] flex-grow bg-slate-100 shadow-xl shadow-slate-300/85 rounded-[1rem] overflow-hidden group"
              key={index}
            >
              <NextImage
                className="h-[200px] group-hover:opacity-80 transition-all duration-300"
                src={data.imgUrl}
                alt={data.title + " image | diak-bud - adam diakowski"}
              />
              <div className="p-[1rem] space-y-3 text-[#11181c]">
                <span>
                  <h3 className="text-[1.3rem] text-center font-semibold uppercase">
                    {data.title}
                  </h3>
                  <div className="bg-[#11181c] w-full h-[1px] mt-[10px]" />
                </span>
                <h4 className="font-medium text-[1.1rem]">
                  {data.description}
                </h4>
                <ul className="list-disc ml-5 font-semibold">
                  {data.tags.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <h5 className="text-[0.9rem]">{data.footer}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
