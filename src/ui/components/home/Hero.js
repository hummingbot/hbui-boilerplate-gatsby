/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw from 'twin.macro'
import { Section, Container } from '@hummingbot/hbui/elements/layout'
import { H1 } from '@hummingbot/hbui/elements/typography'
import { Button } from '@hummingbot/hbui/elements/buttons'

const Hero = () => (
  <Section>
    <Container variant='short' tw='bg-window border border-window mt-sm p-sm'>
      <H1>Headline</H1>
      <br />
      <Button isSuccess>
        Button
      </Button>
    </Container>
  </Section>
)

export default Hero
