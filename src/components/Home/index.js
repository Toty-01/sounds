import styled from "styled-components";
import Gridbutton from "./GidButton";

export default function Home(){

  const list = ["el1", "el2", "el3", "el4"];
  return (
    <Wrapper>
      <Grid>
        {list.map((el)=>{
          return <Gridbutton key={el}>{el}</Gridbutton>
        })}
      </Grid>
    </Wrapper>
  );
}
const Wrapper =styled.div`
  
`;


const Grid =styled.div`
  display: grid;
  width: 400px;
  height: 400px; 
  border: 2px solid;
  grid-template-columns: 1fr 1fr;
  column-gap: 12px;
  row-gap: 12px;
  padding: 24px;
  margin: auto;
  border-radius: 1rem;
  @media(max-width : 640px){
    width: 300px;
    height: 300px; 
  }
`;