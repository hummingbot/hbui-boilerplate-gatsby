/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw from 'twin.macro'
import { ThemeProvider } from '@hummingbot/hbui/system/ThemeContext'
import HBUIGlobalStyles from '@hummingbot/hbui/system/GlobalStyles'

const Layout = ({ children, ...rest }) => (
  <div {...rest} tw='bg-body'>
    <ThemeProvider>
      <HBUIGlobalStyles />
      {children}
    </ThemeProvider>
  </div>
)

export default Layout
