"use client";

import { useState } from "react";
import Img from "@/components/ui/Img";
import ImageZoomSwiper from "@/components/ui/Image-zoomSwiper";
import { uid } from "@/lib/uid";

function GalleryDev({
  pretitle,
  title,
  imagesGroupArray,
  ...props
}: Sanity.Module &
  Partial<{
    pretitle: string;
    title: string;
    imagesGroupArray: {
      image: Sanity.Image;
    }[];
  }>) {
  const [model, setModel] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleModelOpen = (index: number) => {
    setModel((pev) => !pev);
    setActiveIndex(index);
    window.document.body.classList.add("hidden-scroll");
  };

  const handleModelClose = () => {
    setModel((pev) => !pev);
    window.document.body.classList.remove("hidden-scroll");
  };

  return (
    <section
      id={uid(props)}
      className="flex flex-wrap justify-center space-x-10 py-[5rem] px-5 bg-[#f3f5f9]"
    >
      <div className="section">
        {pretitle && (
          <span>
            <h3 className="text-[#130a4f] font-medium uppercase">{pretitle}</h3>
            <div className="bg-black w-[50px] h-[1.3px]" />
          </span>
        )}

        {title && (
          <h2 className="text-[#11181c] text-4xl font-bold mt-3">{title}</h2>
        )}
        {(imagesGroupArray?.length as any) >= 1 && (
          <div className="columns-1 md:columns-2 lg:columns-3 space-y-5 mt-5">
            {imagesGroupArray?.map((item, index) => (
              <div
                className="cursor-pointer hover:opacity-80 transition-all duration-300"
                key={index}
                onClick={() => handleModelOpen(index)}
              >
                <Img className="w-full h-full rounded-lg" image={item.image} />
              </div>
            ))}
          </div>
        )}
        {model ? (
          <ImageZoomSwiper
            images={imagesGroupArray}
            index={activeIndex}
            model={model}
            handerModelClose={handleModelClose}
          />
        ) : null}
      </div>
    </section>
  );
}

export default GalleryDev;
