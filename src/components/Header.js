import React from 'react';
import styled from 'styled-components';

const Head = styled.header`
  display: block;
`;

export default function Header() {
  return (
    <div>
      <Head>
        <h1>Test</h1>
      </Head>
    </div>
  );
}
