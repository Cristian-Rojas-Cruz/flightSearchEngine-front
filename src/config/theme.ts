import { createTheme } from '@mui/material/';

const theme = createTheme({
    palette: {
        common: {
            black: '#363636',
            white: '#FDFAF6',
        },
        primary: {
            main: '#064420',
            light: '#E4EFE7',
        },
        secondary: {
            main: '#FAF1E6',
        },
    },
    shape: {
        borderRadius: 10,
    },
    typography: {
        fontFamily: "Arial",
        h1: {
            fontSize: "1.6rem",
            fontWeight: 600
        },
        h2: {
            fontSize: "1.4rem",
            fontWeight: 600
        },
        h3: {
            fontSize: "1.2rem",
            fontWeight: 600
        },
        h4: {
            fontSize: "1rem",
            fontWeight: 600
        },
        p: {
            fontFamily: "Arial",
            fontSize: "1.1rem",
            fontWeight: 400
        }
    },
    components: {
        MuiContainer: {
            styleOverrides: {
                label: {
                    border:0,
                },
                maxWidthXl: {
                    maxWidth: '100% !important',
                },
            },
        }
    }
})

export default theme;