import styled from 'styled-components'

export const Container = styled.div`
  width: 50%;
  height: calc(100vh - var(--container-title-h));
  padding: 0 1rem;
`

export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: var(--title-h);
`

export const Title = styled.h4``

export const PreviewArea = styled.div`
  height: calc(100vh - var(--container-title-h) - var(--title-h) - 1rem);
  width: 100%;
  margin: 0;
`
