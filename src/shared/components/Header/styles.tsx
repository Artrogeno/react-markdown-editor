import styled from 'styled-components'

export const Container = styled.div`
  height: 4rem;
  background: ${props => props.theme.colors.theme_500};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
  box-shadow: 0 1rem 3rem ${props => props.theme.colors.theme_400};
`
