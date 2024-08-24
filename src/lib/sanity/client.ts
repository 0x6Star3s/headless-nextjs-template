import { createClient } from "next-sanity";
import { studioUrl, apiVersion, dataset, projectId } from "./api";
import dev from "@/lib/env";

export default createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: !dev,
  stega: {
    enabled: false,
    studioUrl,
  },
});
