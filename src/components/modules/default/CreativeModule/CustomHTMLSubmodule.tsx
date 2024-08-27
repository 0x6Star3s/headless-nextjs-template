import CustomHTML from "@/components/modules/default/CustomHTML";

export type CustomHTMLSubmoduleType = Sanity.Module<"custom-code"> &
  Partial<{
    html: {
      code: string;
    };
  }>;

export default function CustomHTMLSubmodule({
  module,
}: {
  module: CustomHTMLSubmoduleType;
}) {
  return <CustomHTML html={module?.html} />;
}
