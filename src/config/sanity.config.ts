import { defineConfig } from "sanity";
import { BASE_URL, projectId } from "./cms/src/env";
import { structureTool } from "sanity/structure";
import structure from "./cms/src/structure";
import { locations } from "./cms/src/presentation";
import { presentationTool } from "sanity/presentation";
import {
  dashboardTool,
  projectInfoWidget,
  projectUsersWidget,
} from "@sanity/dashboard";
// import { vercelWidget } from 'sanity-plugin-dashboard-widget-vercel'
import { visionTool } from "@sanity/vision";
import { codeInput } from "@sanity/code-input";
import { schemaTypes } from "./cms/schemas";
import { colorInput } from "@sanity/color-input";
import { unsplashImageAsset } from "sanity-plugin-asset-source-unsplash";

const singletonTypes = ["site"];

export default defineConfig({
  name: "default",
  title: "Sanity Studio",
  projectId,
  dataset: "production",
  basePath: "/admin",

  plugins: [
    structureTool({
      title: "Content",
      structure,
    }),
    presentationTool({
      title: "Editor",
      previewUrl: {
        draftMode: {
          enable: `${BASE_URL}/api/draft`,
        },
      },
      resolve: { locations },
    }),
    dashboardTool({
      title: "Deployment",
      widgets: [projectInfoWidget(), projectUsersWidget()],
    }),
    visionTool({ title: "GROQ" }),
    codeInput(),
    colorInput(),
    unsplashImageAsset(),
  ],

  scheduledPublishing: {
    enabled: false,
  },

  schema: {
    types: schemaTypes,
    templates: (templates) =>
      templates.filter(
        ({ schemaType }) => !singletonTypes.includes(schemaType)
      ),
  },

  document: {
    actions: (input, { schemaType }) =>
      singletonTypes.includes(schemaType)
        ? input.filter(
            ({ action }) =>
              action &&
              ["publish", "discardChanges", "restore"].includes(action)
          )
        : input,
  },
});
