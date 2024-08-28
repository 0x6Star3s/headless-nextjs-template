import { getSite } from "@/lib/sanity/queries";
import Wrapper from "./Wrapper";
import Link from "next/link";
import Img from "@/components/ui/Img";
import Navigation from "./Navigation";
import CTAList from "@/components/ui/CTAList";
import Toggle from "./Toggle";
import { cn } from "@/lib/utils";
import css from "./Header.module.css";

export default async function Header() {
  const { title, logo, ctas } = await getSite();

  const logoImage = logo?.image?.dark || logo?.image?.default;

  return (
    <Wrapper className="frosted-glass-xl text-canvas fixed top-0 z-[999] border-b border-ink/10 bg-headerBgColor max-md:header-open:shadow-lg left-0 right-0">
      <div
        className={cn(
          css.header,
          "mx-auto grid max-w-[1000px] w-[92%] items-center gap-x-6 p-4"
        )}
      >
        <div className="[grid-area:logo]">
          <Link
            className={cn(
              "h3 md:h2 inline-block",
              logo?.image && "max-w-[250px]"
            )}
            href="/"
          >
            {logoImage ? (
              <Img
                className="inline-block max-h-[1.2em] w-auto"
                image={logoImage}
                alt={logo?.name || title}
              />
            ) : (
              <span className="text-gradient">{title}</span>
            )}
          </Link>
        </div>

        <Navigation />

        <CTAList
          ctas={ctas}
          className="[grid-area:ctas] max-md:*:w-full max-md:header-closed:hidden md:ml-auto"
        />

        <Toggle />
      </div>
    </Wrapper>
  );
}
