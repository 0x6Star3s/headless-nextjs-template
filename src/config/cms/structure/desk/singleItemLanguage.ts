import { StructureBuilder } from "sanity/structure";

type GroupProps = {
  type: string;
  title?: string;
  icon?: JSX.Element | any;
  languageId: string;
};

export function singleItemLanguage(
  S: StructureBuilder,
  { type, title, icon, languageId }: GroupProps
) {
  return (
    S.listItem()
      .title(title || " ")
      .icon(icon)
      // .filter("_type == $type && language == $language")
      // .params({ type, language: languageId })
      // .menuItems([...(S.documentTypeList(type).getMenuItems() as [])])
      .child(
        S.document()
          .title(title || " ")
          .schemaType(type)
        //   .filter("_type == $type && language == $language")
        //   .params({ type, language: languageId })
        //   .menuItems([...(S.documentTypeList(type).getMenuItems() as [])])
        // .initialValueTemplates([
        //   S.initialValueTemplateItem(`${type}-language`, {
        //     id: `${type}-language`,
        //     language: languageId,
        //   }),
        // ])
        // .canHandleIntent(
        //   (
        //     intentName: string,
        //     params: {
        //       [key: string]: any;
        //     }
        //   ) => {
        //     if (intentName === "edit") {
        //       return false;
        //     }
        //     if (!params.template) {
        //       return true;
        //     }
        //     const languageValue = params?.template?.split(`-`).pop();
        //     const typeValue = params?.template?.split(`-`)[0];
        //     if (typeValue === type && languageValue === languageId) {
        //       return true;
        //     }

        //     return false;
        //   }
        // )
      )
  );
}
