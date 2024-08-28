"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Img from "@/components/ui/Img";

import { IoCloseCircleOutline } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

interface imageZoomSwiperProps {
  images?: { image: Sanity.Image }[];
  index: number | null;
  model: boolean;
  handerModelClose: () => void;
}

// window.document.body.classList.remove("over");

export default function ImageZoomSwiper({
  images,
  index,
  model,
  handerModelClose,
}: imageZoomSwiperProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<any | null | undefined>(
    null
  );
  const temp =
    "fixed top-0 left-0 p-[2rem] md:p-[4rem] h-screen w-[100%] z-[1000] ";

  return (
    <div className={model ? `${temp}` : cn(temp, "hidden")}>
      <div
        className="absolute bg-blend-screen bg-[rgba(235,235,239,0.84)] backdrop-filter backdrop-blur-md h-screen top-0 left-0 right-0 z-0"
        onClick={handerModelClose}
      ></div>
      <button
        className="absolute top-3 rounded-lg right-3 p-1 z-[1000] bg-zinc-200 border-zinc-300"
        onClick={handerModelClose}
      >
        <IoCloseCircleOutline className="text-3xl text-zinc-500" />
      </button>

      <Swiper
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Navigation, Thumbs]}
        initialSlide={index as number}
        className="mainSwiper"
      >
        {images?.map((imgSrc, index) => (
          <SwiperSlide key={index} className="z-10">
            <div className="flex w-full items-center justify-center h-full rounded-lg overflow-hidden">
              <Img
                className="w-fit h-fit max-w-[1200px]"
                image={imgSrc.image}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView="auto"
        freeMode={true}
        initialSlide={index as number}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="miniSwiper"
      >
        {images?.map((imgSrc, index) => (
          <SwiperSlide key={index}>
            <Img
              className="hover:opacity-50 transition-all duration-300"
              image={imgSrc.image}
              alt=""
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* </div> */}
    </div>
  );
}
