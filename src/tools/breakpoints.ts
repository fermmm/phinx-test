// tslint:disable: typedef
import { css, CSSObject, SimpleInterpolation } from "styled-components";

export const breakpoints: BreakPoints = {
   xs: "480px",
   sm: "768px",
   md: "992px",
   lg: "1200px",
};

export interface BreakPoints {
   xs: string;
   sm: string;
   md: string;
   lg: string;
}

export const minWidth = Object.keys(breakpoints).reduce((accumulator, label) => {
   accumulator[label] = (
      first: TemplateStringsArray | CSSObject,
      ...interpolations: SimpleInterpolation[]
   ) => css`
      @media (min-width: ${breakpoints[label]}) {
         ${css(first, ...interpolations)};
      }
   `;
   return accumulator;
}, {}) as BreakpointsQueries;

export const maxWidth = Object.keys(breakpoints).reduce((accumulator, label) => {
   accumulator[label] = (
      first: TemplateStringsArray | CSSObject,
      ...interpolations: SimpleInterpolation[]
   ) => css`
      @media (max-width: ${breakpoints[label]}) {
         ${css(first, ...interpolations)};
      }
   `;
   return accumulator;
}, {}) as BreakpointsQueries;

type BreakpointsQueries = Record<
   keyof BreakPoints,
   (first: TemplateStringsArray | CSSObject, ...interpolations: SimpleInterpolation[]) => string
>;
