import styled from 'styled-components'
import LeftBnt from '../components/LeftBnt';
import RightBnt from '../components/RightBnt';



const AppContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-image: linear-gradient(90deg,#002F52 35%,#326589 165%);
`

function Home() {
  return (
    <AppContainer>
      <LeftBnt/>
      <RightBnt /> 
    </AppContainer>
  );
}

export default Home;

