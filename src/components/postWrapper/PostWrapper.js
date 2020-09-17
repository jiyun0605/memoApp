import React from "react";
import styled from "styled-components";
const PostWrapper = ({ children }) => {
  return <PostContainer>{children}</PostContainer>;
};

const PostContainer = styled.div`
  width: 50rem;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 90%;
  }
`;
export default PostWrapper;
