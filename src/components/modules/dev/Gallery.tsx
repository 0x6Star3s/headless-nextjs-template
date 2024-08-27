"use client";
import { useState } from "react";
import { images } from "@/constants";

import NextImage from "@/components/ui/image";
import ImageZoomSwiper from "@/components/image-zoomSwiper";

function Galery() {
  const [data, setData] = useState([
    {
      image: images.image1,
    },
    {
      image: images.image2,
    },
    {
      image: images.image3,
    },
    {
      image: images.image4,
    },
    {
      image: images.image5,
    },
    {
      image: images.image6,
    },
    {
      image: images.image7,
    },
    {
      image: images.image8,
    },
    {
      image: images.image9,
    },
  ]);

  const [model, setModel] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleModelOpen = (index: number) => {
    setModel(pev => !pev);
    setActiveIndex(index);
    window.document.body.classList.add("over");
  };

  const handleModelClose = () => {
    setModel(pev => !pev);
    window.document.body.classList.remove("over");
  };

  return (
    <section
      id="portfolio"
      className="flex flex-wrap justify-center space-x-10 py-[5rem] px-5 bg-[#f3f5f9]"
    >
      <div className="max-w-[1000px] w-[90%] mx-auto">
        <span>
          <h3 className="text-[#130a4f] font-medium uppercase">ralizacja</h3>
          <div className="bg-black w-[50px] h-[1.3px]" />
        </span>

        <h2 className="text-[#11181c] text-4xl font-bold mt-3">
          Zobacz nasze realizacje
        </h2>
        <div className="columns-1 md:columns-2 lg:columns-3 space-y-5 mt-5">
          {data.map((data, index) => (
            <div
              className="cursor-pointer hover:opacity-80 transition-all duration-300"
              key={index}
              onClick={() => handleModelOpen(index)}
            >
              <NextImage
                className="w-full h-full rounded-lg"
                src={data.image}
                alt={`Gallery image-${index} diak-bud - adam diakowski`}
              />
            </div>
          ))}
        </div>
        {model ? (
          <ImageZoomSwiper
            images={data}
            index={activeIndex}
            model={model}
            handerModelClose={handleModelClose}
          />
        ) : null}
      </div>
    </section>
  );
}

export default Galery;
