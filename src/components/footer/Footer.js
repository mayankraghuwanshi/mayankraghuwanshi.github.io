import React from "react";
import PropTypes from "prop-types";
import{AiFillFacebook,AiFillLinkedin,AiFillGithub} from 'react-icons/ai'

import styled from 'styled-components';

const FooterWrap = styled.footer`
  text-align: right;
  width: 100%;
  font-size: 15px;
  padding: 15px 0px;
  
  .thankyou-wrapper{
    width: 80%;
    float: left;
  }
  .social-icons{
    width: 20%;
    float: right;
  }
  
  p{
    margin: 0px;
    text-align: left;
  }
  
  p a{
    color: #00a69c;
    text-decoration: none;
  }
  
  svg{
    width: 30px;
  }
  
  a{
    color: white;
  }
  a:hover{
    color: #00a69c;
  }

  @media only screen and (max-width: 480px) {
    text-align: center;
    .thankyou-wrapper{
      width: 100%;
      float: none;
    }
    .social-icons{
      width: 100%;
      float: none;
    }

  }
  
  
  `



const Footer = () => (
  <FooterWrap>
    <div className="thankyou-wrapper">
      <p>Made with &#10084;&#65039; by Mayank Raghuvanshi, Checkout code <a href="https://github.com/mayankraghuwanshi.mayankraghuwanshi.github.io">here</a></p>
    </div>
    <div className="social-icon">
      <a href="https://www.facebook.com/raghuvanshimayank/" target="_blank"><AiFillFacebook/></a>
      <a href="https://www.linkedin.com/in/mayankraghuvanshi/" target="_blank"><AiFillLinkedin/></a>
      <a href="https://www.github.com/mayankraghuwanshi/" target="_blank"><AiFillGithub/></a>
    </div>
  </FooterWrap>
);
Footer.propTypes = {
  footerClass: PropTypes.string,
};
export default Footer;
