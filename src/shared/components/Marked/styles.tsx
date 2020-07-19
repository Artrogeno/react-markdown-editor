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

export const Textarea = styled.textarea`
  height: calc(100vh - var(--container-title-h) - var(--title-h) - 1rem);
  width: 100%;
  background-color: ${props => props.theme.colors.theme_400};
  color: ${props => props.theme.colors.theme_100};
  box-shadow: inset 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  padding: 1rem;
  margin: 0;
  resize: none;
  border: none;
  border-radius: 0.4rem;
  font-size: 1rem;
  &,
  &:focus {
    outline: none;
  }
`
