import React from "react";
import styled from "styled-components";
const Comment = () => {
  return (
    <CommentLi>
      <Body>
        <Name>name</Name>body
      </Body>
    </CommentLi>
  );
};

const CommentLi = styled.li`
  front-size: 1.2rem;
  color: #868e96;
`;
const Name = styled.b`
  margin-right: 0.5rem;
  color: #212529;
`;
const Body = styled.p`
  color: #212529;
`;
export default Comment;
