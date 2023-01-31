"use client";
// 1. Import `extendTheme`
import { extendTheme, theme as base } from "@chakra-ui/react";
import "@fontsource/poppins";

// 2. Define the new text styles
const theme = extendTheme({
    colors: {
        white: "#FFFFFF",
    },
    fonts: {
        heading: `'Poppins', sans-serif`, 
        body: `'Poppins', sans-serif`,
    },
    textStyles: {
        h1: {
            fontFace: `'Poppins', sans-serif`,
            color: '#FFFFFF',
            fontWeight: '1000',
            fontSize: "80px",
        },
        h2: {
            fontFace: `'Poppins', sans-serif`,
            color: '#FFFFFF',
            fontWeight: '700',
            lineHeight: '105px',
            fontSize: "60px",
        },
        h3: {
            fontFace: `'Poppins', sans-serif`,
            color: '#FFFFFF',
            fontWeight: '700',
            fontSize: "50px",
        },
        h4: {
            fontFace: `'Poppins', sans-serif`,
            color: '#FFFFFF',
            fontWeight: '700',
            fontSize: "40px",
        },
        m: {
            fontFace: `'Poppins', sans-serif`,
            color: '#FFFFFF',
            fontWeight: '400',
            lineHeight: "50px",
            fontSize: "30px",
        },
        s: {
            fontFace: `'Poppins', sans-serif`,
            color: '#FFFFFF',
            fontWeight: '600',
            fontSize: "20px",
        },
        navbarBold: {
            color: '#FFFFFF',
            fontWeight: '800',
            fontSize: "22px",
        },
        navbarLinks: {
            color: '#FFFFFF',
            fontWeight: "400",
            fontSize: "20px",
            padding: "10px",
            _hover: { color: '#FF79B9' },
          },
          navbarCurrPage: {
            color: "#FF79B9",
            fontWeight: '600',
            fontSize: "20px",
          }
    }
  });

  export default theme;

