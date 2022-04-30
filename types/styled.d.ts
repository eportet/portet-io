import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    primary: string;
    secondary: string;
    tertiary: string;
    backgroundPrimary: string;
    backgroundSecondary: string;
    backgroundTertiary: string;
    colorPrimary: string;
    colorSecondary: string;
  }
}
