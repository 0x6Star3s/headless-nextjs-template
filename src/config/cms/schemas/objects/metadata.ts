import { defineField, defineType } from "sanity";
import { TextSeo } from "../../components/seo/TextInputSeo";
import { InputSeo } from "../../components/seo/InputSeo";

export default defineType({
  name: "metadata",
  title: "Metadata",
  type: "object",
  fields: [
    defineField({
      name: "noIndex",
      description: "Prevent search engines from indexing this page.",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "title",
      title: "Tytuł dla SEO & social sharing",
      type: "string",
      description:
        "Optymalizujesz swoją stronę internetową, aby przyciągnąć więcej klientów poprzez media społecznościowe i wyszukiwarkę Google. Chcesz, aby Twoje wpisy były atrakcyjne i zachęcały użytkowników do kliknięcia. Najlepiej, gdy opis ma między 15 a 60 znaków.",
      validation: (Rule) => Rule.max(60).warning(),
      components: {
        input: InputSeo,
      },
      options: {
        max: 60,
      } as any,
    }),
    defineField({
      name: "description",
      title: "Opis dla SEO & social sharing",
      description:
        "Opis strony internetowej, który pojawia się w wynikach wyszukiwania Google. Opis powinien zawierać między 50 a 160 znaków.",
      type: "text",
      components: {
        input: TextSeo,
      },
      options: {
        max: 160,
      } as any,
      validation: (Rule) => Rule.max(160).warning(),
    }),
    defineField({
      name: "image",
      title: "Zdięcie dla SEO & social sharing",
      description:
        "Zdjęcie, które będzie wyświetlane, gdy Twój post zostanie udostępniony na Facebooku lub Twitterze.",
      type: "image",
    }),
  ],
});
