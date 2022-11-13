import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
  <Section row nopadding>
    <LeftSection>
    <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
          I am a software developer with a passion for learning and creating. I am also a student at the Institute Of Engineering and Management, where I am pursuing a degree in Computer Science. I am a full stack developer with experience in Java, JavaScript, React, and Node.js. I am also familiar with SQL and NoSQL databases. I am always looking for new opportunities to learn and grow as a developer.
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;