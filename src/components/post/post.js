import React from "react";
import styled from "styled-components";
import { CommentList } from "../";
const Post = ({ title, body, comments }) => (
  <PostDiv>
    <Title>{title}</Title>
    <Ptxt>{body}</Ptxt>
    <CommentList comments={comments} />
  </PostDiv>
);

const PostDiv = styled.div`
  padding: 1rem;
  margin-top: 1rem;
  margin-bottom: 2rem;
  background-color: #fafafa;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2), 0 3px 6px rgba(0, 0, 0, 0.3);
`;
const Title = styled.h1`
  font-size: 3rem;
`;
const Ptxt = styled.p`
  font-size: 2rem;
`;
export default Post;
