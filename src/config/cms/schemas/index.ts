import page from "./pages/page";
import imageType from "./objects/imageType";
import elementFooterType from "./objects/ElementFooterType";
import ElementCtaType from "./objects/ElementCtaType";
import videoAndImageType from "./objects/videoAndImageType";

// documents
import site from "./documents/site";
import blogPost from "./documents/blog.post";
import blogCategory from "./documents/blog.category";
import navigation from "./documents/navigation";
import redirect from "./documents/redirect";
import logo from "./documents/logo";

// objects
import cta from "./objects/cta";
import uid from "./objects/uid";
import link from "./objects/link";
import linkList from "./objects/link.list";
import metadata from "./objects/metadata";


import { importedModules } from "./pages/componentsList";

export const schemaTypes = [
  ...importedModules,

  page,

  site,
  blogPost,
  blogCategory,
  navigation,
  logo,

  redirect,

  // new objects
  uid,
  link,
  linkList,
  metadata,
  cta,

  // types
  imageType,
  elementFooterType,
  ElementCtaType,
  videoAndImageType,

];
