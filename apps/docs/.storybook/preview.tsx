import React from 'react'
import { StyxProvider } from '@styx-ui/react'

export const decorators = [(Story: () => React.ReactNode) => <StyxProvider>{Story()}</StyxProvider>]
