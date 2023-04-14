'use client';
import './globals.css';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/styles/theme';
import StyledComponentsRegistry from './lib/registry';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </ThemeProvider>
      </body>
    </html>
  );
}
