import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: calc(100vh - var(--container-title-h));
`

export const ContainerTitle = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  width: 100%;
  height: var(--container-title-h);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
`

export const Wrap = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  height: calc(100vh - var(--container-title-h));
`

export const Title = styled.h1`
  text-align: center;
  font-size: 1.6rem;
  font-weight: 400;
`
