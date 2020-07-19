import React, { useRef, useEffect, useContext } from 'react'

import { EditorContext } from '../../contexts/editor'
import { Container, ContainerTitle, Title, Textarea } from './styles'

const Marked = () => {
  const [editor, setEditor] = useContext(EditorContext)
  const textRef = useRef<HTMLTextAreaElement | null>(null)

  const handlerChange = ({ target: { value } }: any) => {
    setEditor(value)
  }

  useEffect(() => {
    const init = () => {
      const { current } = textRef
      if (current) {
        current.focus()
      }
    }
    init()
  })

  return (
    <Container>
      <ContainerTitle>
        <Title>Markdown</Title>
      </ContainerTitle>
      <Textarea
        ref={textRef}
        value={editor}
        onChange={handlerChange}
        placeholder="Write anything..."
      />
    </Container>
  )
}

export default Marked
