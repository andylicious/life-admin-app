import React from 'react';
import styled, { keyframes } from 'styled-components';

const keyF = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const Spinner = styled.div`
  display: inline-block;
  width: 64px;
  height: 64px;
  margin: 2em;

  &:after {
    content: ' ';
    display: block;
    width: 46px;
    height: 46px;
    margin: 1px;
    border-radius: 50%;
    border: 5px solid #fff;
    border-color: #000 transparent #000 transparent;
    animation: ${keyF} 1.2s linear infinite;
  }
`;

// TODO: PROPTypes
export default function Loader({ isLoading, children }) {
  return <div>{isLoading ? <Spinner /> : <>{children}</>}</div>;
}
