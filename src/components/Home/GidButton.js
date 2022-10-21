import styled from "styled-components";

export default function Gridbutton({isPlayed = false, soundPlay, id, handleSampleChange}){
  return( 
  <Wrapper isPlayed = {isPlayed} onClick={soundPlay}>
    <label onClick={(e)=> e.stopPropagation()} htmlFor={id}>♫</label>
    <input onClick={(e)=> e.stopPropagation()} id={id} type="file" onChange={handleSampleChange}/>
  </Wrapper>
)};

const Wrapper = styled.div`
  cursor: pointer;
  border-radius: 0.5rem;
  background: #a7ffe4;
  background: radial-gradient(ellipse farthest-corner at center center, #a7ffe4 0%, rgba(0,234,255,0.54) 80%);
  background: -webkit-radial-gradient(ellipse farthest-corner at center center, #a7ffe4 0%, rgba(0,234,255,0.54) 80%);
  background: -moz-radial-gradient(ellipse farthest-corner at center center, #a7ffe4 0%, rgba(0,234,255,0.54) 80%);
  position: relative;
  overflow: hidden;
  &::before {
    position: absolute;
    content: "";
    top: 0;
    right: 0;
    bottom: 0; 
    left: 0;
    z-index:0;
    background: #d5d2ce;
    background: radial-gradient(ellipse farthest-corner at center center, #d5d2ce ${(props)=>(props.isPlayed ? "20%" : "0%")}, rgba(122,68,149,0.67) 80%);
    background: -webkit-radial-gradient(ellipse farthest-corner at center center, #d5d2ce ${(props)=>(props.isPlayed ? "20%" : "0%")}, rgba(122,68,149,0.67) 80%);
    background: -moz-radial-gradient(ellipse farthest-corner at center center, #d5d2ce ${(props)=>(props.isPlayed ? "20%" : "0%")}, rgba(122,68,149,0.67) 80%);
    opacity: ${(props)=>(props.isPlayed ? "1" : "0")};
    transition: linear 0.5s;
  }
  &:hover::before {
    opacity: 1;
  }
  &:active::before {
    opacity: 1;
    background: #d5d2ce;
    background: radial-gradient(ellipse farthest-corner at center center, #d5d2ce 0%, rgba(122,68,149,0.67) 60%);
    background: -webkit-radial-gradient(ellipse farthest-corner at center center, #d5d2ce 0%, rgba(122,68,149,0.67) 60%);
    background: -moz-radial-gradient(ellipse farthest-corner at center center, #d5d2ce 0%, rgba(122,68,149,0.67) 60%);
  }
  & input {
    display: none;
  }
  & label {
    position: absolute;
    right: 12px;
    top: 12px;
    font-size: 1.8rem;
    cursor: pointer;
  }
`;