// modules
import creative from "./modules/block/creative";
import accordionList from "./modules/block/accordion-list";
import blogList from "./modules/block/blog-list";
import breadcrumbs from "./modules/block/breadcrumbs";
import callout from "./modules/block/callout";
import customCode from "./modules/block/custom-code";
import flagList from "./modules/block/flag-list";
import heroSaas from "./modules/block/hero.saas";
import heroSplit from "./modules/block/hero.split";
import logoList from "./modules/block/logo-list";
import richtextModule from "./modules/block/richtext-module";
import statList from "./modules/block/stat-list";
import testimonialList from "./modules/block/testimonial-list";
import testimonialFeatured from "./modules/block/testimonial.featured";

const list = [
  // modules
  {
    name: "creative",
    group: "modules",
    type: creative,
  },
  {
    name: "accordionList",
    group: "modules",
    type: accordionList,
  },
  {
    name: "blogList",
    group: "modules",
    type: blogList,
  },
  {
    name: "breadcrumbs",
    group: "modules",
    type: breadcrumbs,
  },
  {
    name: "callout",
    group: "modules",
    type: callout,
  },
  {
    name: "customCode",
    group: "modules",
    type: customCode,
  },
  {
    name: "flagList",
    group: "modules",
    type: flagList,
  },
  {
    name: "heroSaas",
    group: "modules",
    type: heroSaas,
  },
  {
    name: "heroSplit",
    group: "modules",
    type: heroSplit,
  },
  {
    name: "logoList",
    group: "modules",
    type: logoList,
  },
  {
    name: "richtextModule",
    group: "modules",
    type: richtextModule,
  },
  {
    name: "statList",
    group: "modules",
    type: statList,
  },
  {
    name: "testimonialList",
    group: "modules",
    type: testimonialList,
  },
  {
    name: "testimonialFeatured",
    group: "modules",
    type: testimonialFeatured,
  },
];

export const modules = list;

export const filterModules = (nameGroup: string) => {
  return list
    .filter((item) => item.group === nameGroup)
    .map((item) => ({
      name: item.name,
      group: item.group,
      type: item.type,
    }));
};

export const importedModules = list.map((item) => {
  return item.type;
});
