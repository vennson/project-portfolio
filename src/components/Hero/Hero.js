import React from 'react'

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents'
import Button from '../../styles/GlobalComponents/Button'
import { LeftSection } from './HeroStyles'

const Hero = () => (
  <Section>
    <LeftSection>
      <SectionTitle main center>
        Hello, I'm <br />
        Benson
      </SectionTitle>
      <SectionText>
        I'm a Senior Front-End Developer with a passion for full-stack web, data
        science and creating awesome apps.
      </SectionText>
      <Button
        onClick={() =>
          (window.location =
            'https://drive.google.com/file/d/19XtkJw1i3Nx8qdKDqI1jFKFf_b6JDNvl/view?usp=sharing')
        }
      >
        Learn More
      </Button>
    </LeftSection>
  </Section>
)

export default Hero
