import React from 'react';
import styled from 'styled-components';
import { Colors } from '../theme';

import BacklogCard from '../components/BacklogCard';
import RouterWrapper from './RouteWrapper';

const Cont = styled.div`
  display: grid;
  grid-template-columns: 275px 275px 275px;
  justify-content: space-between;
  min-height: 350px;
`;

// TODO: Proptypes
export default function BacklogContainer() {
  return (
    <RouterWrapper title="Backlog" size="md">
      <Cont>
        <BacklogCard bg={Colors.primary} />
        <BacklogCard bg={Colors.secondary} />
        <BacklogCard bg={Colors.yellow} />
      </Cont>
    </RouterWrapper>
  );
}
