import React from 'react'
import { globalCss } from '../../stitches.config'

const globalStyles = globalCss({
  '@import': [
    'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap',
  ],
  '*, *::before, *::after': {
    fontFamily: 'inherit',
    boxSizing: 'border-box',
  },
  body: {
    fontFamily: '$sans',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
  },
})

export type StyxProviderProps = React.PropsWithChildren

const StyxProvider: React.FC<StyxProviderProps> = (props) => {
  globalStyles()

  return <>{props.children}</>
}

export default StyxProvider
