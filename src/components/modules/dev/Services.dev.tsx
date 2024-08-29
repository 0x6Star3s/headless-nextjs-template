"use client";
import Img from "@/components/ui/Img";
import { uid } from "@/lib/uid";
import { PortableText } from "@portabletext/react";

function ServicesDev({
  pretitle,
  title,
  servicesGroup,
  ...props
}: Sanity.Module &
  Partial<{
    pretitle: string;
    title: string;
    servicesGroup: {
      image: Sanity.Image;
      title: string;
      content: any;
    }[];
  }>) {

  return (
    <section id={uid(props)} className="my-[5rem]">
      <div className="section">
        {pretitle && (
          <span>
            <h3 className="text-[#130a4f] font-medium uppercase">{pretitle}</h3>
            <div className="bg-black w-[50px] h-[1px]" />
          </span>
        )}
        {title && (
          <h2 className="text-[#11181c] text-4xl font-bold mt-3">{title}</h2>
        )}
        {(servicesGroup?.length as number) >= 1 && (
          <div className="flex justify-center flex-wrap mt-[2rem] gap-5">
            {servicesGroup?.map((item, index) => (
              <div
                className="min-h-[400px] w-[300px] flex-grow bg-slate-100 shadow-xl shadow-slate-300/85 rounded-[1rem] overflow-hidden group"
                key={index}
              >
                <Img
                  className="h-[200px] group-hover:opacity-80 transition-all duration-300"
                  image={item.image}
                />
                <div className="p-[1rem] space-y-3 text-[#11181c]">
                  <span>
                    <h3 className="text-[1.3rem] text-center font-semibold uppercase">
                      {item.title}
                    </h3>
                    <div className="bg-[#11181c] w-full h-[1px] mt-[10px]" />
                  </span>
                  {item.content && (
                    <div className="richtext">
                      <PortableText value={item.content} />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default ServicesDev;
