import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

export default function Header({ isLight, handleToggleTheme }){
  const location = useLocation();
  

  return (
    <Wrapper>
      <h1>SoundS</h1>
      <nav>
        <Link to="/">
          <MenuEl isCurrentPage={location.pathname === "/"}>Home</MenuEl>
        </Link>
        <Link to="/About">
          <MenuEl isCurrentPage={location.pathname === "/About"}>About</MenuEl>
        </Link>
      </nav>
      <button onClick={handleToggleTheme}>{isLight ? "dark" : "light"}</button>
    </Wrapper>
  );
}
const Wrapper =styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  font-size: 1.2rem;
  border-bottom: solid 2px;
  & nav {
    display: flex;
    margin-left: auto;
    margin-right: auto;
  }
  & a {
    text-decoration: none;
    color: inherit;
    margin-right: 1rem;
  }
  & nav a:hover {
    transition: 1s;
    color: grey;
  }
  & h1 {
    display: flex;
    margin-left: 1rem;
    margin-right: 1rem;
    font-size: 1rem;
  }
  & button {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-top: 0.4rem;
    padding-bottom: 0.4rem;
  }
`;

const MenuEl = styled.p`
  padding-bottom: 2px;
  border-bottom: solid 2px ${props=>props.isCurrentPage ? "": "transparent"};
  &:hover{
    border-bottom : solid 2px; 
  }
`;