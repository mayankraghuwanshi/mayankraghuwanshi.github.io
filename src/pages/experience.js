import React from "react";
import "../layouts/layout.css";
import {
  TimelineContainer,
  Timeline,
  TimelineContent,
  ExperienceWrapper,
  WorkWrapper
} from "../components/experience/style";

import Layout from "../layouts/layout";

const Experience = () => (
  <Layout>
    <ExperienceWrapper>
      <WorkWrapper>
        <h1>Work Experience</h1>
        <TimelineContainer>
          <Timeline>
            <ul>
              <li>
                <TimelineContent>
                  <h3 className="date">15 July 2020 - Till Date</h3>
                  <h2>SDE @ FreeCharge</h2>
                  <p>* Currently working with Financial Services Team at FreeCharge.<br/>
                  * Responsible for building the API and its integration with the web and mobile applications..<br/>
                  *<strong>Technology used : </strong>Spring-boot, java, hibernate, React.
                  </p>
                </TimelineContent>
              </li>
              <li>
                <TimelineContent>
                  <h3 className="date">10th Feb 2020 to 10th May 2020</h3>
                  <h2>Intern @ FreeCharge</h2>
                  <p>* Created, Integrated & deployed full-stack pull notification functionality in payments Ops panel using Angular,
                    Material, Spring-boot, JavaScript, Java, Gulp, Maven, NPM.<br/>
                    * Contributed to the migration of GiftCardService from spring to Spring Boot and created a progress report on
                    Confluence.<br/>
                    * Deployed the micro-service architecture of GiftCardService built on spring-boot using Docker and Docker-
                    compose.</p>
                </TimelineContent>
              </li>
              <li>
                <TimelineContent>
                  <h3 className="date">08th Sep 2019 to 09th Feb 2020</h3>
                  <h2>Teaching Assistant @ Pepcoding</h2>
                  <p>* Mentored 100+ students in Data Structures and Algorithm course offline using Java.<br/>
                  * Took doubt classes to help students getting well verse with Recursion, Backtracking, Bit Manipulation,
                    Dynamic Programming, and common Data Structures.
                  </p>
                </TimelineContent>
              </li>
              <li>
                <TimelineContent>
                  <h3 className="date">20th may 2020</h3>
                  <h2>Second Innings Services</h2>
                  <p>* Worked on Front-end and Back-end app built on Node.js, React.js, Redux, Redis, and MongoDB.<br/>
                    * Implemented APIs to upload files (jpeg, pdf, jpg) on the server and store them on AWS S-3 bucket.
                  </p>
                </TimelineContent>
              </li>
            </ul>
          </Timeline>
        </TimelineContainer>
      </WorkWrapper>
    </ExperienceWrapper>
  </Layout>
);

export default Experience;
