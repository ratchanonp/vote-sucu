import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    fonts: {
        heading: `'Athiti', sans-serif`,
        body: `'Sarabun', sans-serif`
    },
    colors: {
        primary: {
            100: "#F7CF47",
            200: "#F7CF47",
            300: "#F7CF47",
            400: "#F7CF47",
            500: "#F7CF47",
            600: "#F7CF47",
            700: "#F7CF47",
            800: "#F7CF47",
            900: "#F7CF47",

        },
        secondary: {
            100: "#000",
            200: "#000",
            300: "#000",
            400: "#000",
            500: "#000",
            600: "#000",
            700: "#000",
            800: "#000",
            900: "#000",
        },
    }
})

export {
    theme
};
