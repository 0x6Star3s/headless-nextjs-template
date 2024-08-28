import AccordionList from "./default/AccordionList";
import BlogList from "./default/blog/BlogList";
import Breadcrumbs from "./default/Breadcrumbs";
import Callout from "./default/Callout";
import CreativeModule from "./default/CreativeModule";
import CustomHTML from "./default/CustomHTML";
import FlagList from "./default/FlagList";
import Hero from "./default/Hero";
import HeroSplit from "./default/HeroSplit";
import HeroSaaS from "./default/HeroSaaS";
import LogoList from "./default/LogoList";
import PricingList from "./default/PricingList";
import RichtextModule from "./default/RichtextModule";
import StatList from "./default/StatList";
import StepList from "./default/StepList";
import TestimonialList from "./default/TestimonialList";
import TestimonialFeatured from "./default/TestimonialFeatured";

// dev
import HeroDev from "./dev/Hero.dev";
import AboutDev from "./dev/About.dev";
import GalleryDev from "./dev/Gallery.dev";

export default function Modules({
  modules,
  page,
}: {
  modules?: Sanity.Module[];
  page?: Sanity.Page;
}) {
  return (
    <>
      {modules?.map((module) => {
        switch (module._type) {
          case "accordion-list":
            return <AccordionList {...module} key={module._key} />;
          case "blog-list":
            return <BlogList {...module} key={module._key} />;
          case "breadcrumbs":
            return (
              <Breadcrumbs {...module} currentPage={page} key={module._key} />
            );
          case "callout":
            return <Callout {...module} key={module._key} />;
          case "creative-module":
            return <CreativeModule {...module} key={module._key} />;
          case "custom-html":
            return <CustomHTML {...module} key={module._key} />;
          case "flag-list":
            return <FlagList {...module} key={module._key} />;
          case "hero":
            return <Hero {...module} key={module._key} />;
          case "hero.split":
            return <HeroSplit {...module} key={module._key} />;
          case "hero.saas":
            return <HeroSaaS {...module} key={module._key} />;
          case "logo-list":
            return <LogoList {...module} key={module._key} />;
          case "pricing-list":
            return <PricingList {...module} key={module._key} />;
          case "richtext-module":
            return <RichtextModule {...module} key={module._key} />;
          case "stat-list":
            return <StatList {...module} key={module._key} />;
          case "step-list":
            return <StepList {...module} key={module._key} />;
          case "testimonial-list":
            return <TestimonialList {...module} key={module._key} />;
          case "testimonial.featured":
            return <TestimonialFeatured {...module} key={module._key} />;

          // dev
          case "hero.dev":
            return <HeroDev {...module} key={module._key} />;
          case "about.dev":
            return <AboutDev {...module} key={module._key} />;
          case "gallery.dev":
            return <GalleryDev {...module} key={module._key} />;

          default:
            return <div data-type={module._type} key={module._key} />;
        }
      })}
    </>
  );
}
