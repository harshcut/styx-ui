import Stitches, { createStitches } from '@stitches/react'

export type { VariantProps } from '@stitches/react'
export type CSS = Stitches.CSS<typeof config>

export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config } =
  createStitches({
    theme: {
      fonts: {
        sans: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, sans-serif',
      },
      fontWeights: {
        xs: 300,
        sm: 400,
        md: 500,
        lg: 600,
        xl: 700,
      },
    },
  })
