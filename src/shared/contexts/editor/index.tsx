import React, { useState } from 'react'

export const EditorContext = React.createContext<any>([])

interface PropsI {
  children: React.ReactNode
}

const Provider: React.FC<PropsI> = ({ children }) => {
  const [text, setText] = useState<string>('')

  return (
    <EditorContext.Provider value={[text, setText]}>
      {children}
    </EditorContext.Provider>
  )
}

export default Provider
