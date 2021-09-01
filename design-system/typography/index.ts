// REFERENCE: https://material.io/design/typography/the-type-system.html#type-scale
import * as body from "./body/body";
import * as button from "./button/button";
import * as caption from "./caption/caption";
import * as headline from "./headline/headline";
import * as overline from "./overline/overline";
import * as subtitle from "./subtitle/subtitle";

export type Typography = typeof body &
  typeof button &
  typeof caption &
  typeof headline &
  typeof overline &
  typeof subtitle;

export const typography: Typography = {
  ...body,
  ...button,
  ...caption,
  ...headline,
  ...overline,
  ...subtitle,
};
