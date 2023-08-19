import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    fonts: {
        heading: `'Athiti', sans-serif`,
        body: `'Sarabun', sans-serif`
    },
    colors: {
        primary: "#F7CF47",
    }
})

export {
    theme
};
