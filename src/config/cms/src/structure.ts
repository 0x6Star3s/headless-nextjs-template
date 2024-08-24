import { singleton } from "./utils";
import type { StructureResolver } from "sanity/structure";

import { VscServerProcess } from "react-icons/vsc";

const structure: StructureResolver = (S, context) =>
  S.list()
    .title("Content")
    .items([
      singleton(S, "site").icon(VscServerProcess),
      S.documentTypeListItem("page").title("Pages"),
      S.divider(),

      S.documentTypeListItem("navigation"),
      S.documentTypeListItem("redirect").title("Redirects"),
      S.divider(),

      S.documentTypeListItem("blog.post").title("Blog posts"),
      S.documentTypeListItem("blog.category").title("Blog categories"),
      S.divider(),
    ]);

export default structure;
