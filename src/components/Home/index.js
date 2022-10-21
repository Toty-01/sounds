import styled from "styled-components";
import Gridbutton from "./GidButton";
import useSounds from "hooks/useSounds.js";

export default function Home(){

  const {buttonsList} = useSounds();
  return (
    <Wrapper>
      <h1>SoundS</h1>
      <Grid>
        {buttonsList.map(({soundPlay, isPlayed, id, handleSampleChange}, index)=>{
          return (
          <Gridbutton 
          key={index} 
          soundPlay= {soundPlay} 
          isPlayed= {isPlayed} 
          id={id}
          handleSampleChange={handleSampleChange}
          />
          );
        })}
      </Grid>
      <p>Cliquer sur</p> 
      <p> → ♫ ← </p> 
       <p>dans le pad pour importer vos propres Samples</p>
    </Wrapper>
  );
}
const Wrapper =styled.div`
  & h1 {
    text-align: center;
    margin-top: 2rem;
    margin-bottom: 2.8rem;
    font-size: 2rem;
  }
  & p {
    text-align: center;
    margin-top: 2rem;
    font-size: 1.2rem;
  }
  & p:last-child {
    margin-bottom: 2rem;
  }
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
  background-color: grey;
  @media(max-width : 640px){
    width: 300px;
    height: 300px; 
  }
`;