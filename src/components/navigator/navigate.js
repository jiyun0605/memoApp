import React from "react";
import styled from "styled-components";

const Navigate = ({ onClick, postId, disabeld }) => {
  return (
    <NavDiv>
      <ArrowBtn
        content="Previous"
        onClick={() => onClick("PREV")}
        disabeld={disabeld}
      >
        <i class="fas fa-arrow-left"></i>
      </ArrowBtn>
      <NavNum>{postId}</NavNum>
      <ArrowBtn
        content="Next"
        onClick={() => onClick("NEXT")}
        disabeld={disabeld}
      >
        <i class="fas fa-arrow-right"></i>
      </ArrowBtn>
    </NavDiv>
  );
};

const NavDiv = styled.div`
  position: relative;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-content: center;
`;
const NavNum = styled.div`
  align-self: center;
`;
const ArrowBtn = styled.button`
   {
    background-color: #00b5ad;
    border: none;
    width: 8rem;
    padding: 1rem 0;
    color: white;
    float: ${(props) => (props.content === "Next" ? "right" : "left")};
    margin: 0px;
    &:active,
    &:focus {
      outline: none;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.7);
    }
  }
`;

export default Navigate;
