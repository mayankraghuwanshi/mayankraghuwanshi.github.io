import React from "react";
import AboutBox from "../components/about/AboutBox"
import {
  UserWrapper,
  UserDescription,
  DownloadButton,
  UserTopic,
} from "../components/about/AboutStyle";
import {SiLinkedin} from 'react-icons/si'

import {UserTopics,Skills} from '../../data.json'
import Canvas from "../components/canvas"

const IndexPage = () => {
  return (
    <>
      <UserWrapper>
        <UserDescription>
          <div>
            <h1>
              Mayank <span>Raghuvanshi</span>
            </h1>
            <p>
              Hello there, <span id="hand-shake">&#9995;&#127995;</span>  welcome to my portfolio. I am a Full Stack Developer,Tech Enthusiast and a Bathroom singer
              based out of Gudgaon.
            </p>
            <DownloadButton
              href="https://www.linkedin.com/in/mayankraghuvanshi/"
              title="Linkedin"
              target="_blank"
            ><SiLinkedin/>&nbsp;
              Find me on LinkedIn
            </DownloadButton>
          </div>
          <Canvas
            skills={Skills}
            height="500px"
            width="500px"
            textColour="#00a69c"
          />
        </UserDescription>
        <UserTopic>
          {
            UserTopics.map((item) => (
            <AboutBox key={item.id} info={item} />
          ))}
        </UserTopic>
      </UserWrapper>
    </>
  );
};

export default IndexPage;
