import React from "react";
import styled from "styled-components";

const HeaderDiv = styled.div`
  background-color: #00b5ad;
  color: white;
  font-size: 2rem;
  padding: 1.2rem;
  text-align: center;
  font-weight: 600;
  margin-bottom: 2rem;
`;
const Header = () => {
  return <HeaderDiv>POSTS</HeaderDiv>;
};
export default Header;
