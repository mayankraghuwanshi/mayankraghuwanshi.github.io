import React from "react";
import AboutBox from "../components/about/AboutBox"
import {
  UserWrapper,
  UserTitle,
  UserDescription,
  DownloadButton,
  UserTopic,
} from "../components/about/AboutStyle";

import {UserTopics} from '../../data.json'

const IndexPage = () => {
  return (
    <>
      <UserWrapper>
        <UserTitle>
          Mayank <span>Raghuvanshi</span>
        </UserTitle>
        <UserDescription>
          <div>
            <p>
              Hello there, <span>&#9995;&#127995;</span>  welcome to my portfolio. I am a Full Stack Developer,Tech Enthusiast and a Bathroom singer
              based out of Gudgaon.
            </p>
            <DownloadButton
              href="link_to_resume"
              download
              title="Resume"
            >
              Download Resume
            </DownloadButton>
          </div>
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
