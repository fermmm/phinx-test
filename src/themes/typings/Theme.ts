export interface Theme {
   colors: ThemeColors;
   shadows: ThemeShadows;
   fonts: ThemeFonts;
   borders: ThemeBorders;
}

interface ThemeColors {
   background1: string;
   background2: string;
   text1: string;
   text2: string;
   text3: string;
   text4: string;
   text5: string;
   text6: string;
   scrollbar: string;
   scrollbarThumb: string;
   divider: string;
   comicHover: string;
}

interface ThemeShadows {
   elevation1: string;
   dividerShadow: string;
}

interface ThemeFonts {
   font1: string;
   font2: string;
   size1: string;
   size2: string;
   size3: string;
   size4: string;
   size5: string;
   size6: string;
   weight1: string;
   weight2: string;
   letterSpacing1: string;
   lineHeight1: string;
}

interface ThemeBorders {
   borderRadius1: string;
   borderRadius2: string;
}