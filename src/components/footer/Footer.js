import React from "react";
import PropTypes from "prop-types";
import{AiFillFacebook,AiFillLinkedin,AiFillGithub} from 'react-icons/ai'

import styled from 'styled-components';

const FooterWrap = styled.footer`

  p a{
    color: #00a69c;
    text-decoration: none;
    margin : 0px 5px 5px 5px;
  }
  `


const Footer = () => (
  <FooterWrap>
    <p align="center">Made with &#10084;&#65039; by Mayank Raghuvanshi</p>
    <p align="center"><a href="https://www.facebook.com/raghuvanshimayank/" target="_blank"><AiFillFacebook/></a><a href="https://www.linkedin.com/in/mayankraghuvanshi/" target="_blank"><AiFillLinkedin/></a><a href="https://www.github.com/mayankraghuwanshi/" target="_blank"><AiFillGithub/></a></p>
  </FooterWrap>
);
Footer.propTypes = {
  footerClass: PropTypes.string,
};
export default Footer;
