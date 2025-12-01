'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    // css变量开启
    cssVariables: true,
    typography: {
        fontFamily: 'var(--font-roboto)',
    },
});

export default theme;
