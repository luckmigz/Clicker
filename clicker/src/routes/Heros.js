import styled from 'styled-components'
import LeftBnt from '../components/LeftBnt';
import RightBnt from '../components/RightBnt';
import Hero from '../components/HButtons';


const px2vw = (size, width = 1440) => `${(size/width)*100}vw`;


const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap; 
  max-width: 100%;
  background: #202124;
  padding-top: (32 / 45)*100%;
  
`
const Background = styled.div`
  display:flex;
  background-color: #5B3109;
  width: ${px2vw(1169)};
  padding-top: (32 / 45)*100%;
  flex-direction: column;
  height: 100%;
  flex-shrink: 0;
  border: ${px2vw(30)} ridge rgba(140, 97, 14, 0.50);

  @media (min-width: 768px) {
    width: ${px2vw(1169)};
    min-height: ${px2vw(640)};
    height: 100%;
    padding-top: (32 / 45)*100%;
  }

  @media (min-width: 1024px) {
    width: ${px2vw(1169)};
    min-height: ${px2vw(640)};
    height: 100%;
    padding-top: (32 / 45)*100%;
  }
`;


function Heros() {
  return (
    <AppContainer>
      <LeftBnt/>
      <RightBnt/>
      <Background>
        <Hero />
      </Background>
    </AppContainer>
  );
}

export default Heros;

