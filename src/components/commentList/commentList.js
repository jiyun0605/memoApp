import React from "react";
import styled from "styled-components";
import { Comment } from "../";
const CommentList = () => {
  return (
    <ComList>
      <Comment />
      <Comment />
      <Comment />
    </ComList>
  );
};

const ComList = styled.ul`
  list-style-type: none;
  background-color: #f0f0f0;
  padding: 1rem;
  border-radius: 5px;
`;

export default CommentList;
