import React from "react";
import styled, { keyframes } from "styled-components";

interface BoxProps {
  bgColor?: string;
}

const Container = styled.div``;

const rotateAnim = keyframes`
  0% {
    transform: rotate3d(0, 0, 0, 0deg);
    background-color: blue;
  }
  33% {
    transform: rotate3d(1, 3, 2, 120deg);
    background-color: red;
  }
  66% {
    transform: rotate3d(5, 2, 0, 200deg);
    background-color: black;
  }
  100%{
    transform: rotate3d(0, 0, 0, 360deg);
    background-color: blue;
  }
`;

const Tag = styled.span`
  font-size: 42px;
  color: white;
`;

const Box = styled.div<BoxProps>`
  width: 200px;
  height: 200px;
  animation: ${rotateAnim} 2s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  ${Tag}:hover {
    color: black;
  }
`;

const Circle = styled(Box)`
  border-radius: 100px;
`;

const Styled = () => {
  return (
    <Container>
      <Box>
        <Tag>tag</Tag>
      </Box>
      <Circle bgColor="teal" />
    </Container>
  );
};

export default Styled;
