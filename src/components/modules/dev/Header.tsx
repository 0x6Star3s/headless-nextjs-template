import Link from "next/link";
import { Button } from "@nextui-org/react";
import NextImage from "@/components/ui/image";
import { images } from "@/constants";

function Header() {
  return (
    <header className="relative h-screen">
      <div className="absolute top-0 bottom-0 left-0 right-0 z-0">
        <NextImage
          className="h-screen"
          src={images.headerbg}
          alt="header image | diak-bud - Name"
        />
      </div>
      <div className="absolute z-10 bg-headerColor h-full w-full flex items-center justify-between flex-col pb-5">
        <span></span>
        <div className="text-center space-y-5 text-[#fff] max-w-[900px] w-[90%]">
          <h1 className="text-[2rem] md:text-[3rem] uppercase font-bold leading-snug">
            firma remontowo budowlana diak-bud
          </h1>
          <h2 className="text-[1rem] font-medium">Name</h2>
          <Button href="#about" color="primary" variant="shadow" as={Link}>
            Poznaj nas
          </Button>
        </div>
        <Link href="#about" className="scrollLink" aria-label="Poznaj nas"></Link>
      </div>
    </header>
  );
}

export default Header;
