import React from "react";
import { ThemeProvider } from "styled-components"

const theme = {
    primary: "#c882b4",
    primaryLight: "#fcb2e6",
    primaryDark: "#965484",
};

const ColorsProvider = ({ children }) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default ColorsProvider;