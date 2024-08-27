import Link from "next/link";
// import { Button } from "@nextui-org/react";
// import NextImage from "@/components/ui/image";
import Img, { Source } from "@/components/ui/Img";
import { PortableText } from "@portabletext/react";
import CTAList from "@/components/ui/CTAList";
import { stegaClean } from "@sanity/client/stega";
import { cn } from "@/lib/utils";
import { uid } from "@/lib/uid";
// import { images } from "@/constants";

function HeroDev({
  title,
  content,
  ctas,
  bgImage,
  bgImageMobile,
  textAlign = "center",
  alignItems,
  ...props
}: Sanity.Module &
  Partial<{
    title: string;
    content: any;
    ctas?: Sanity.CTA[];
    bgImage: Sanity.Image;
    bgImageMobile: Sanity.Image;
    textAlign?: React.CSSProperties["textAlign"];
    alignItems?: React.CSSProperties["alignItems"];
    // props: any;
  }>) {
  return (
    <section id={uid(props)} className="relative h-screen">
      <div className="absolute top-0 bottom-0 left-0 right-0 z-0">
        {/* <NextImage
          className="h-screen"
          src={images.headerbg}
          alt="header image | diak-bud - Name"
        /> */}
        {bgImage?.asset && (
          <picture>
            <Source image={bgImageMobile} imageWidth={1200} />
            <Img
              className="size-full max-h-fold object-cover"
              image={bgImage}
              imageWidth={1800}
              draggable={false}
            />
          </picture>
        )}
        s
      </div>
      <div
        className={cn(
          "absolute flex z-10 bg-heroDevGradient h-full w-full items-center justify-between pb-5",
          {
            "items-start": stegaClean(alignItems) === "start",
            "items-center": stegaClean(alignItems) === "center",
            "items-end": stegaClean(alignItems) === "end",
          }
        )}
      >
        <span></span>
        <div
          className={cn(
            "space-y-5 text-[#fff] max-w-[900px] w-[90%] flex flex-col",
            {
              "items-start": stegaClean(textAlign) === "left",
              "text-start": stegaClean(textAlign) === "left",
              "items-center": stegaClean(textAlign) === "center",
              "text-center": stegaClean(textAlign) === "center",
              "items-end": stegaClean(textAlign) === "right",
              "text-end": stegaClean(textAlign) === "right",
            }
          )}
        >
          <h1 className="text-[2rem] md:text-[3rem] uppercase font-bold leading-snug">
            {title}
          </h1>
          <PortableText value={content} />
          <CTAList ctas={ctas} className="!mt-4" />
        </div>
        <Link
          href="#about"
          className="scrollLink"
          aria-label="Poznaj nas"
        ></Link>
      </div>
    </section>
  );
}

export default HeroDev;
