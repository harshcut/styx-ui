import Stitches, { createStitches } from '@stitches/react'

export type { VariantProps } from '@stitches/react'
export type CSS = Stitches.CSS<typeof config>

export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config } =
  createStitches({
    theme: {
      fonts: {
        sans: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, sans-serif',
      },
      fontSizes: {
        xs: '12px',
        sm: '14px',
        md: '16px',
        lg: '18px',
        xl: '20px',
      },
      fontWeights: {
        xs: '300',
        sm: '400',
        md: '500',
        lg: '600',
        xl: '700',
      },
      lineHeights: {
        md: 1.15,
      },
      radii: {
        xs: '2px',
        sm: '4px',
        md: '6px',
        lg: '8px',
        xl: '10px',
      },
      colors: {
        transparent: 'hsl(0, 0%, 0%, 0)',
        white: 'hsl(0, 0%, 100%, 1)',
        black: 'hsl(0, 0%, 0%, 1)',
        gray100: 'hsl(0, 0%, 96%, 1)',
        gray200: 'hsl(0, 0%, 92%, 1)',
        gray300: 'hsl(0, 0%, 88%, 1)',
        gray400: 'hsl(0, 0%, 79%, 1)',
        gray500: 'hsl(0, 0%, 70%, 1)',
        gray600: 'hsl(0, 0%, 56%, 1)',
        gray700: 'hsl(0, 0%, 43%, 1)',
        gray800: 'hsl(0, 0%, 29%, 1)',
        gray900: 'hsl(0, 0%, 17%, 1)',
      },
      shadows: {
        focusRing:
          '0 0 0 1px hsl(202, 65%, 51%, .3), 0 1px 1px 0 hsl(0, 0%, 0%, .1), 0 0 0 4px hsl(202, 65%, 51%, .3)',
        lowShadow:
          '0 0 0 1px hsl(0, 0%, 88%, 1), 0 2px 4px 0 hsl(0, 0%, 0%, .1), 0 1px 1px 0 hsl(0, 0%, 0%, .05)',
      },
    },
  })
