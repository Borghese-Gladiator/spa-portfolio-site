import styled from 'styled-components';
import React, { useRef } from "react";
import Layout from './components/_layouts/Layout';
// Icons
import { AiFillCode } from 'react-icons/ai';
import { MdWork } from 'react-icons/md';
import { GiGraduateCap } from 'react-icons/gi';

const ContentBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-left: 15vw;
  margin-right: 15vw;
`;
const CenteredHeader = styled.h2`
  text-align: center;
`;
const Row = styled.div`
  display: flex;
  > * {
    margin: 5px;
  }
`;
const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid ${({ theme }) => theme.text};
  padding: 5px;
`;
const StyledCardHeader = styled.div`
  height: 30%;
  background: ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.body};
  text-align: center;
`
function App() {
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);

  return (
    <Layout>
      {/* Content */}
      <ContentBody>
        <section ref={aboutRef}>
          <CenteredHeader>ABOUT ME</CenteredHeader>
          <Row>
            <div style={{ flex: 1 }}>
              <StyledCard>
                <p><MdWork />{' '}Full Stack Developer, DevOps Engineer, Data Science Enthusaist</p>
                <p><GiGraduateCap />{' '}Bachelors in Computer Science, UMass Amherst</p>
                <p><AiFillCode />{' '}1+ years Work Experience</p>
              </StyledCard>
            </div>
            <div style={{ flex: 2 }}>
              <StyledCard>
                <h4 style={{padding: 0, margin: 0}}>I'm a Software Engineer at Dell EMC working on CloudIQ</h4>
                <p>CloudIQ is a cloud platform that enables customers to see analysis and the current status of their storage devices (eg: PowerMax, Unity, SC, etc.). As part of the Data Analytics team, I frequently encounter Data Science and love learning more about applying machine learning from co-workers and courses.</p>
                <p>I'm a recent graduate from UMass Amherst looking to make an exciting impact. Every week, I hear of exciting new applications of AI from MIT Daily News, Medium's Daily Digest, and/or Gartner's Hype Cycle</p>
              </StyledCard>
            </div>
          </Row>
        </section>
        <section ref={experienceRef}>
          <CenteredHeader>EXPERIENCE</CenteredHeader>
          <StyledCard>
            <StyledCardHeader>Header</StyledCardHeader>
            <p>People call me Tim. I am currently a Software Engineer at Dell EMC working on CloudIQ, a cloud platform that enables customers to see analysis and the current status of their storage devices (eg: PowerMax, Unity, SC, etc.). In the Data Analytics team, I frequently encounter Data Science and love learning more about applying machine learning from co-workers and courses.</p>
          </StyledCard>
        </section>
        <section ref={projectsRef}>
          <CenteredHeader>PROJECTS</CenteredHeader>
        </section>
        <section ref={skillsRef}>
          <CenteredHeader>SKILLS</CenteredHeader>
        </section>
        <section ref={skillsRef}>
          <CenteredHeader>Links</CenteredHeader>
          <p>Related links: Blog Posts, Certificates, Languages</p>
        </section>
      </ContentBody>
    </Layout>
  );
}

export default App;