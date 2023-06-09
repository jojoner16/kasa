import styled from 'styled-components';

const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
  font-family: 'Montserrat', sans-serif;
`;

const StyledTitle = styled.h1`
  padding-bottom: 30px;
  max-width: 280px;
  line-height: 50px;
`;

function Home() {
  return (
    <HomeWrapper>
      <StyledTitle>Accueil</StyledTitle>
    </HomeWrapper>
  );
}

export default Home;
