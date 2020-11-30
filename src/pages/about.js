import React from "react";
import {
  UserWrapper,
  UserTitle,
  UserDescription,
  DownloadButton,
  UserTopic,
} from "../components/about/AboutStyle";

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
              Hello there, welcome to my portfolio. I am a front
              end developer, visual artist and an animal lover
              based out of Bangalore.
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
      </UserWrapper>
    </>
  );
};

export default IndexPage;
