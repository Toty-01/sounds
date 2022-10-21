import styled from "styled-components";

export default function About(){
  return (
    <Wrapper>
      <h2>Notre site</h2>
      <p>Notre site permet de génerer des sons pour produire sa propre musique</p>
       <p>Il est également possible d'importer ses propres samples de sons sur le pad pour se faire un template personnalisé</p>
       <p>Notre objectif est de stimuler la créativité musicale</p>
    </Wrapper>
  );
}
const Wrapper =styled.div`
  h2 {
    text-align: center;
    font-size: 1.4rem;
    margin: 2rem;
  }
  & p {
    text-align: center;
    padding: 1rem;
    font-size: 1.2rem;
  }
`;