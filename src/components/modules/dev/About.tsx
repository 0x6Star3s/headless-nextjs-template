"use client";
import React from "react";
import { images } from "@/constants";
// import {ButtonMain} from '../../main.style'
// import "./Abaot.scss";
import NextImage from "@/components/ui/image";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import ImageZoom from "@/components/image-zoom";

function About() {
  return (
    <section
      id="about"
      className="flex flex-wrap md:flex-nowrap justify-between md:space-x-7 lg:space-x-10 py-[5rem] px-5 max-w-[1000px] w-[90%] mx-auto"
    >
      {/* info */}
      <div className="w-full md:max-w-[400px] lg:max-w-[400px] z-10 space-y-5">
        <span>
          <h3 className="text-[#130a4f] font-medium uppercase">o nas</h3>
          <div className="bg-black w-[50px] h-[1.3px]" />
        </span>

        <h2 className="text-[1.6rem] md:text-[1.8rem]">
          DIAK-BUD jest firmą oferującą kompleksowe usługi w zakresie dekarstwa
          <br /> i budownictwa.
        </h2>
        <p>
          Oprócz zwykłych napraw i remontów, montujemy konstrukcje drewniane i
          stalowe, podbitki, instalacje fotowoltaiczne i wiele innych. Posiadamy
          możliwość wynajęcia podnośnika koszowego.
        </p>
          <Button href="#usługi" color="primary" variant="shadow" as={Link}>
            Usługi
          </Button>
          {/* <Link href="https://freetools.seobility.net/en/seocheck/diak-bud.vercel.app">
            <img
              className="w-16 h-16"
              src="https://freetools.seobility.net/widget/widget.png?url=diak-bud.vercel.app"
              alt="Seobility Score für diak-bud.vercel.app"
            />
          </Link> */}

      </div>
      {/* imgaes */}
      <div className="w-full max-w-[480px] mt-[2.6rem]">
        <ImageZoom>
          <NextImage
            imageClassName="rounded-lg"
            src={images.image8}
            alt="About image | diak-bud - adam diakowski"
          />
        </ImageZoom>
      </div>
    </section>
  );
}

export default About;
