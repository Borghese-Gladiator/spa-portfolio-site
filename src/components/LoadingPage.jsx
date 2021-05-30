import styled from 'styled-components';
import LoadingIconPath from '../assets/Spinner-1s-200px.svg';

const FullPageDiv = styled.div`
  height: 100vh;
  background: linear-gradient(to bottom, #00d2ff, #928dab);
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const LoadingPage = () => {
  return (
    <FullPageDiv>
      <img src={LoadingIconPath} alt="Loading Icon"/>
      <h1>Loading</h1>
    </FullPageDiv>
  )
}

export default LoadingPage;