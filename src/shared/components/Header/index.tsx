import React from 'react'
import { shade, lighten } from 'polished'
import Switch from 'react-switch'

import { useTheme } from '../../hooks'
import { Container } from './styles'

const Header = () => {
  const [type, setType, theme] = useTheme()

  return (
    <Container>
      Markdown Editor
      <Switch
        onChange={() => setType(type === 'dark' ? 'light' : 'dark')}
        checked={type === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={lighten(0.4, theme.colors.primary)}
        onColor={theme.colors.theme_300}
        offHandleColor={theme.colors.primary}
        onHandleColor={shade(0.2, theme.colors.theme_300)}
      />
    </Container>
  )
}

export default Header
