import React, { useContext } from 'react'
import ReactMarkdown from 'react-markdown'

import { EditorContext } from '../../contexts/editor'
import { Container, ContainerTitle, Title, PreviewArea } from './styles'

const Preview = () => {
  const [editor] = useContext(EditorContext)

  return (
    <Container>
      <ContainerTitle>
        <Title>Preview</Title>
      </ContainerTitle>
      <PreviewArea>
        <ReactMarkdown source={editor} />
      </PreviewArea>
    </Container>
  )
}

export default Preview
