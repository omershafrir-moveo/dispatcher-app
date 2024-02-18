import { css } from "styled-components";

interface Size {
  mobile: string;
  tablet: string;
  desktop: string;
}
export const size_numbers = {
  mobile: 440,
  tablet: 880,
  desktop: 1440,
};
const size: Size = {
  mobile: `${size_numbers.mobile}px`,
  tablet: `${size_numbers.tablet}px`,
  desktop: `${size_numbers.desktop}px`,
};

export const device = {
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet}) `,
  desktop: `(min-width: ${size.tablet})`,
};
