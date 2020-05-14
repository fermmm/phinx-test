export interface Theme {
   colors: ThemeColors;
   shadows: ThemeShadows;
}

interface ThemeColors {
   background1: string;
   background2: string;
   text1: string;
   text2: string;
   text3: string;
   divider: string;
}

interface ThemeShadows {
   elevation1: string;
   divider: string;
}
