import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 'Country Finalist', text: 'Technological business case competition, Schneider Go Green 2020'},
  { number: 'DOST-SEI Scholar', text: 'S.Y. 2015 - 2020', },
  { number: 'President\'s Lister', text: 'College of Engineering, 1st Semester S.Y. 2015 - 2016', },
  { number: 'Dean\'s Lister', text: 'College of Engineering, 2nd Semester, S.Y. 2015 - 2016  ', }
];

const Accomplishments = () => (
  <Section>
    <SectionTitle>Personal Accomplishments</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Accomplishments;
