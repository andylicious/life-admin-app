import React from 'react';
import styled from 'styled-components';
import Container from '@material-ui/core/Container';
import { Colors } from '../theme';


const Heading = styled.h1`
  text-align: left;
  color: ${Colors.darkGrey};
  font-family: 'Montserrat', sans-serif;
`;

// TODO: Proptypes
export default function RouteWrapper({ title, children, size }) {
  return (
    <Container maxWidth={size}>
      <div>
        <Heading>{title.toUpperCase()}</Heading>
      </div>
      <div>{children}</div>
    </Container>
  );
}
