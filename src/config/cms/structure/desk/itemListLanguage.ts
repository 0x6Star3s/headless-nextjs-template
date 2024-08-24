import { StructureBuilder } from "sanity/structure";

type GroupProps = {
  type: string;
  title?: string;
  icon?: JSX.Element | any;
  languageId: string;
};

export function itemListLanguage(
  S: StructureBuilder,
  { type, title, icon, languageId }: GroupProps
) {

  return S.listItem()
    .title(title || " ")
    .icon(icon)
    .schemaType(type)
    .child(
      S.documentTypeList(type)
        .title(title || " ")
        .filter("_type == $type && language == $language")
        .params({ type, language: languageId })
        .schemaType(type)
        .menuItems([...(S.documentTypeList(type).getMenuItems() as [])])
        .initialValueTemplates([
          S.initialValueTemplateItem(`${type}-language`, {
            id: `${type}-language`,
            language: languageId,
          }),
        ])
        .canHandleIntent(
          (
            intentName: string,
            params: {
              [key: string]: any;
            }
          ) => {
            if (intentName === "edit") {
              return false;
            }
            if (!params.template) {
              return true;
            }
            const languageValue = params?.template?.split(`-`).pop();
            const typeValue = params?.template?.split(`-`)[0];
            if (typeValue === type && languageValue === languageId) {
              return true;
            }

            return false;
          }
        )
       
    );
}
