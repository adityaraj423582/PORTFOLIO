import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 20, text: 'Open Source Projects'},
  { number: 150, text: 'Leetcode problems', },
  { number: 1700 , text: 'Codechef Ratings', },
  { number: 50, text: 'Github Repos', }
];

const Acomplishments = () => (
  <Section>
  <SectionTitle>Personal Achievements</SectionTitle>
  <Boxes>
    {data.map((card, index) => (
      <Box key={index}>
        <BoxNum>{`${card.number}+`}</BoxNum>
        <BoxText>{card.text}</BoxText>
      </Box>
    ))}
  </Boxes>
  <SectionDivider/>
</Section>
);

export default Acomplishments;
