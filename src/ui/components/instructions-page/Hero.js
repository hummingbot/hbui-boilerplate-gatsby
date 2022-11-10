/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw, { styled } from 'twin.macro'
import { Section, Container , Window} from '@hummingbot/hbui/elements/layout'
import CodeBlock from '@hummingbot/hbui/components/code/CodeBlock'
import { H1, H5, P } from '@hummingbot/hbui/elements/typography'
import { Button } from '@hummingbot/hbui/elements/buttons'

const Hero = () => (
  <Section>
    <HeroBlock containerVariant='short' tw='bg-transparent border-b border-body'>
      <H1 tw='leading-none'>Instructions</H1>
      <br/>
      <P>How to use this template</P>
    </HeroBlock>
    <Container variant='short'>
      <Window>
        <H5>Steps</H5>
        <br/>
        <P isBold>Clone the project</P>
        <br/>
        <CodeBlock code='test' />
        <br/>
      </Window>
      <H1>How to use</H1>
      <br />
      <Button variant='info'>
        Clone this
      </Button>
    </Container>
  </Section>
)

export default Hero

const HeroBlock = ({ children, containerVariant='large', ...props }) => {
  return (
    <Section {...props} tw='h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px] 2xl:h-[500px]'>
      <Container variant={containerVariant} tw='flex h-full flex-col justify-center'>
        {children}
      </Container>
    </Section>
  )
}
