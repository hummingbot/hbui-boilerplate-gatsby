/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw from 'twin.macro'
import Layout from '../components/layout'
import { PageRoot, Section, Container } from '@hummingbot/hbui/elements/layout'
import { H1 } from '@hummingbot/hbui/elements/typography'
import { Button } from '@hummingbot/hbui/elements/buttons'
import Navigation from '../ui/components/Navigation'
import Hero from '../ui/components/instructions-page/Hero'

const Instructions = () => (
  <Layout>
    <PageRoot>
      <Navigation />
      <Section>
        <Hero />
      </Section>
    </PageRoot>
  </Layout>
)

export default Instructions
