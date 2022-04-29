import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    primary: string;
    secondary: string;
    backgroundPrimary: string;
    backgroundSecondary: string;
    colorPrimary: string;
    colorSecondary: string;
  }
}
