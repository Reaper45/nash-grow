import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    color: {
      primary: string;
      secondary: string;
      dark: string;
      light: string;
      success: string;
      error: string;
    };
  }
}
