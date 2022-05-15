import { extendTheme } from '@chakra-ui/react'
import { mode } from "@chakra-ui/theme-tools";
const theme = extendTheme({
  colors: {
    primary: {
     main: "#7bb9e8",
     50: "#ebf0fd",
     100: "#c9d3e8",
     200: "#a6b6d6",
     300: "#8399c6",
     400: "#627cb6",
     500: "#48629c",
     600: "#384d7b",
     700: "#283758",
     800: "#172136",
     900: "#060b16"
   }
 },
 config: {
  initialColorMode: 'light',
  useSystemColorMode: false,
},
styles: {
  global: (props: any) => ({
    body: {
      bg: mode('#F0EDEE','#172136')(props),
    }
  })
},
});

export default theme;