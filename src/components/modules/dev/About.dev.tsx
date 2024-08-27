import Link from "next/link";
import Img, { Source } from "@/components/ui/Img";
import { PortableText } from "@portabletext/react";
import CTAList from "@/components/ui/CTAList";
import { stegaClean } from "@sanity/client/stega";
import { cn } from "@/lib/utils";
import { uid } from "@/lib/uid";

function AboutDev({
  pretitle,
  content,
  ctas,
  imageType,
  layout,
  ...props
}: Sanity.Module &
  Partial<{
    pretitle: string;
    content: any;
    ctas?: Sanity.CTA[];
    imageType: Sanity.Image;
    layout: {
      fullscreen: boolean;
      layoutVariant: "left" | "right";
    };
  }>) {
  console.log(layout);
  return (
    <section
      id={uid(props)}
      className={cn(
        "flex flex-wrap md:flex-nowrap justify-between gap-7 lg:gap-10 py-10 md:py-[5rem]",
        {
          section: !layout?.fullscreen,
          "flex-row-reverse": stegaClean(layout?.layoutVariant) === "left",
        }
      )}
    >
      {/* info */}
      <div className="w-full md:max-w-[400px] lg:max-w-[400px] z-10 space-y-5">
        {pretitle && (
          <span>
            <h3 className="text-[#130a4f] font-medium uppercase">{pretitle}</h3>
            <div className="bg-black w-[50px] h-[1.3px]" />
          </span>
        )}
        {content && (
          <div className="richtext">
            <PortableText value={content} />
          </div>
        )}

        {ctas && <CTAList ctas={ctas} className="!mt-4" />}
      </div>
      {/* imgaes */}
      <div className="w-full md:max-w-[480px] mt-[2.6rem]">
        {imageType?.asset && (
          <picture>
            <Img
              className="size-full max-h-fold object-cover"
              image={imageType}
              imageWidth={1800}
              draggable={false}
            />
          </picture>
        )}
      </div>
    </section>
  );
}

export default AboutDev;
