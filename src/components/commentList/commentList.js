import React from "react";
import styled from "styled-components";
import { Comment } from "../";
const CommentList = ({ comments }) => {
  const commentList = comments.map((comments, i) => {
    return (
      <Comment name={comments.email.split("@")} body={comments.body} key={i} />
    );
  });
  return <ComList>{commentList}</ComList>;
};

const ComList = styled.ul`
  list-style-type: none;
  background-color: #f0f0f0;
  padding: 1rem;
  border-radius: 5px;
`;

export default CommentList;
