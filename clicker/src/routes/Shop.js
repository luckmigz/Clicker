import styled from 'styled-components'
import LeftBnt from '../components/LeftBnt';
import RightBnt from '../components/RightBnt';



const px2vw = (size, width = 1440) => `${(size/width)*100}vw`;
const px2vh = (size, height = 1440) => `${(size/height)*100}vh`;

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap; 
  margin: ${px2vw(10)};
  max-width: 100%;
  background-image: linear-gradient(90deg,#FFFF44 35%,#000000 165%);
  width: ${px2vw(1415)};
  
  
  @media (min-width: 1024px){
    max-height: ${px2vh(1440)};
    flex-wrap: nowrap; 

  }
`
const Box = styled.div`
  display:flex;
  background-image: linear-gradient(90deg,#002F52 35%,#326589 165%);
  width: ${px2vw(640)};
  max-height: ${px2vw(640)};
  flex-direction: column;
  height: 100%;

  @media (min-width: 768px) {
    width: ${px2vw(640)};
    min-height: ${px2vw(640)};
    height: 100%;
  }

  @media (min-width: 1024px) {
    width: ${px2vw(640)};
    min-height: ${px2vw(640)};
    height: 100%;
  }
`;


function Shop() {
  return (
    <AppContainer>
      <LeftBnt/>
      <RightBnt/>
      <Box/> 
    </AppContainer>
  );
}

export default Shop;

