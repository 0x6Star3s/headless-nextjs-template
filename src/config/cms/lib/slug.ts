const polishChars: {
  [key: string]: string;
} = {
  ą: "a",
  ć: "c",
  ę: "e",
  ł: "l",
  ń: "n",
  ó: "o",
  ś: "s",
  ź: "z",
  ż: "z",
  Ą: "A",
  Ć: "C",
  Ę: "E",
  Ł: "L",
  Ń: "N",
  Ó: "O",
  Ś: "S",
  Ź: "Z",
  Ż: "Z",
};

export const slugGeneration = (value: string) => {
  const text = value
    .split("")
    .map((char: any) => polishChars[char] || char)
    .join("");

  return value ? text.toLowerCase().replace(/[\s]+/g, "-").slice(0, 200) : "";
};
