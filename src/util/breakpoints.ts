import { css } from "styled-components";

interface Size {
  mobile: string;
  tablet: string;
  desktop: string;
}

const size: Size = {
  mobile: "400px", // for small screen mobile
  tablet: "780x", // for mobile screen
  desktop: "1440px", // for desktop / monitors
};

export const device = {
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet})`,
  desktop: `(min-width: ${size.tablet})`,
};

// interface Size {
//     xs: string
//     sm: string
//     md: string
//     lg: string
//     xl: string
//     xxl: string
//   }

//   const size: Size = {
//     xs: '400px', // for small screen mobile
//     sm: '600px', // for mobile screen
//     md: '900px', // for tablets
//     lg: '1280px', // for laptops
//     xl: '1440px', // for desktop / monitors
//     xxl: '1920px', // for big screens
//   }

//   export const device = {
//     xs: `(max-width: ${size.xs})`,
//     sm: `(max-width: ${size.sm})`,
//     md: `(max-width: ${size.md})`,
//     lg: `(max-width: ${size.lg})`,
//     xl: `(max-width: ${size.xl})`,
//     xxl: `(max-width: ${size.xxl})`,
//   }
// const media = {
//     xs: (...args) => css`
//       @media (max-width: ${device.xs}) {
//         ${css(...args)};
//       }
//     `,
//     sm: (...args) => css`
//       @media (max-width: ${device.sm}) {
//         ${css(...args)};
//       }
//     `,
//     md: (...args) => css`
//       @media (max-width: ${device.md}) {
//         ${css(...args)};
//       }
//     `,
//     lg: (...args) => css`
//       @media (max-width: ${device.lg}) {
//         ${css(...args)};
//       }
//     `,
//     xl: (...args) => css`
//       @media (max-width: ${device.xl}) {
//         ${css(...args)};
//       }
//     `,
//     xxl: (...args) => css`
//       @media (max-width: ${device.xxl}) {
//         ${css(...args)};
//       }
//     `,
//   }
