import { isDev } from "sanity";

export {projectId} from "@/lib/sanity/api";

export const BASE_URL = isDev
  ? "http://localhost:3000"
  : process.env.NEXT_PUBLIC_BASE_URL!;
