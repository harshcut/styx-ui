import React from 'react'

export type StyxProviderProps = React.PropsWithChildren

const StyxProvider: React.FC<StyxProviderProps> = (props) => {
  return <>{props.children}</>
}

export default StyxProvider
