import styled from "styled-components";
import FlipCard from './flipcard';


const App2 = () => {

  const arr = [1,1,1,1,1,1,1,1,1]

  return (
    <FlexContainer>
      {arr.map(i => <FlipCard />)}
    </FlexContainer>
  );
};

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: DodgerBlue;
`


export default App2;