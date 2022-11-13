import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
    <LinkList>
      <LinkColumn>
        <LinkTitle>Call</LinkTitle>
        <LinkItem href="tel:8294234998">8294234998</LinkItem>
      </LinkColumn>
      <LinkColumn>
        <LinkTitle>Email</LinkTitle>
        <LinkItem href="adityaraj423582@gmail.com">
        adityaraj423582@gmail.com
        </LinkItem>
      </LinkColumn>
    </LinkList>
    <SocialIconsContainer>
      <CompanyContainer>
        <Slogan>Make everything as simple as possible, but not simpler.</Slogan>
      </CompanyContainer>
      <SocialContainer>
        <SocialIcons href="https://github.com/adityaraj423582/adityaraj423582">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/aditya-raj-singh-268636200/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.instagram.com/__adityaraj___/">
          <AiFillInstagram size="3rem" />
        </SocialIcons>
      </SocialContainer>
    </SocialIconsContainer>
  </FooterWrapper>
);
};

export default Footer;
