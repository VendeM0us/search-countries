import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faB } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faB, faMagnifyingGlass)

const MainContainer = styled.div`
  background: #66ccff;
  padding: 15px;
  color: white;
`;

const SearchContainer = styled.div`
  margin: auto;
  width: fit-content;
`;

const Input = styled.input`
  outline: none;
  border: solid 2px white;
  border-radius: 5px;
  height: 25px;
  width: 500px;
  transition: border-color 0.5s;
`;

const Container = styled.div`
  display: inline-block;
  margin: 0 10px;
`;

const Search = ({str, onChange}) => (
  <MainContainer>
    <SearchContainer className="search">
      <Container>
        <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
      </Container>
      <Container>
        <strong>Find Countries: </strong>
      </Container>
      <Input placeholder="type country name here..." className="search-field" value={str} onChange={onChange} />
    </SearchContainer>
  </MainContainer>
)

export default Search