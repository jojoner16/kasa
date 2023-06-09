import styled from 'styled-components';

const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  font-family: 'Montserrat', sans-serif;
`;

const StyledTitle = styled.h1`
  padding-bottom: 30px;
  max-width: 280px;
  line-height: 50px;
`;

function About() {
  return (
    <AboutContainer>
      <StyledTitle>A Propos</StyledTitle>
    </AboutContainer>
  );
}

export default About;
