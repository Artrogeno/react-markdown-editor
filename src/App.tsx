import React from 'react'

import ThemeProvider from './shared/contexts/theme'
import Header from './shared/components/Header'
import Routes from './routes'

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Header />
      <Routes />
    </ThemeProvider>
  )
}

export default App
