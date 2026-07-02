'use client';

import { ThemeProvider } from 'styled-components';

import theme from '@/style/theme';
import GlobalStyle from '@/style/GlobalStyle';

export default function Providers({ children } : { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}