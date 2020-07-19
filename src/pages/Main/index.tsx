import React from 'react'

import EditorProvider from '../../shared/contexts/editor'
import Marked from '../../shared/components/Marked'
import Preview from '../../shared/components/Preview'
import { Container, Wrap } from './styles'

const Main = () => {
  return (
    <Container>
      <Wrap>
        <EditorProvider>
          <Marked />
          <Preview />
        </EditorProvider>
      </Wrap>
    </Container>
  )
}

export default Main
