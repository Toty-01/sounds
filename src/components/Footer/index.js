import styled from "styled-components";

export default function Footer(){
  return (
    <Wrapper>
      <h2>Merci de visiter notre Site</h2>
    </Wrapper>
  );
}
const Wrapper =styled.footer`
  width: 80%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  font-size: 1.4rem;
  border-top: solid 2px;
  text-align:center;
`;