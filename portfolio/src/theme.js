import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

export const designTokens = () => ({

    grey: {
        100: "#e0e0e0",
        200: "#c2c2c2",
        300: "#a3a3a3",
        400: "#858585",
        500: "#666666",
        600: "#525252",
        700: "#3d3d3d",
        800: "#292929",
        900: "#141414",
    },
    primary: {
        100: "#edf6f3",
        200: "#daede6",
        300: "#c8e3da",
        400: "#b5dacd",
        500: "#a3d1c1",
        600: "#82a79a",
        700: "#627d74",
        800: "#41544d",
        900: "#212a27"
    },
    secondary: {
        100: "#fdf3f0",
        200: "#fbe6e0",
        300: "#f8dad1",
        400: "#f6cdc1",
        500: "#f4c1b2",
        600: "#c39a8e",
        700: "#92746b",
        800: "#624d47",
        900: "#312724"
    },
    
    white: {
        100: "#ffffff",
        200: "#fcfcfc"
    }

});

export const themeSettings = (mode) => {
    const colors = designTokens();
    return {
        palette: {
            mode: mode,
            ...(mode === "dark"
                ? {
                    // palette values for dark mode
                    primary: {
                        main: colors.primary[500],
                    },
                    secondary: {
                        main: colors.secondary[500],
                    },
                    neutral: {
                        dark: colors.grey[700],
                        main: colors.grey[500],
                        light: colors.grey[100],
                    },
                    background: {
                        default: colors.grey[800],
                    },
                    grey: {
                        dark: colors.grey[900],
                        light: colors.grey[300]
                    }
                }
                : {
                    // palette values for light mode
                    primary: {
                        main: colors.primary[700],
                    },
                    secondary: {
                        main: colors.secondary[700],
                    },
                    neutral: {
                        dark: colors.grey[700],
                        main: colors.grey[500],
                        light: colors.grey[100],
                    },
                    background: {
                        default: colors.white[200],
                    },
                }),
        },
        typography: {
            fontSize: 12,
            h1: {
                fontSize: 40,
            },
            h2: {
                fontSize: 32,
            },
            h3: {
                fontSize: 24,
            },
            h4: {
                fontSize: 20,
            },
            h5: {
                fontSize: 16,
            },
            h6: {
                fontSize: 14,
            },
        },
        breakpoints: {
            values: {
              xs: 0,
              sm: 464,
              md: 900,
              lg: 1200,
              xl: 1536,
              xxl: 3800,
            },
          },
    };
};

export const ColorModeContext = createContext({
    toggleColorMode: () => { },
});

export const useMode = () => {
    const [mode, setMode] = useState("dark");

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () =>
                setMode((prev) => (prev === "light" ? "dark" : "light")),
        }),
        []
    );

    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
    return [theme, colorMode];
};